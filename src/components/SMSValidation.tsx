import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import "../css/ModalWindow.css"
import * as bcrypt from 'bcryptjs';

interface SMSProps {
    phone: string;
    onClose: () => void
}

const SMSValidation: React.FC<SMSProps> = ({ phone, onClose }) => {

    const [smsContent1, setSmsContent1] = useState<string>("");
    const [smsContent2, setSmsContent2] = useState<string>("");
    const [smsContent3, setSmsContent3] = useState<string>("");
    const [smsContent4, setSmsContent4] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [unsuccessCount, setUnsuccessCount] = useState<number>(0);


    const [countdown, setCountdown] = useState(50);
    const [isShaking, setIsShaking] = useState(false);

    const [success, setSuccess] = useState<boolean>(false);

    const [showFirstDiv, setShowFirstDiv] = useState(true);

    const switchDivs = () => {
        setShowFirstDiv((prev) => !prev);
    };

    const inputRefs = [useRef<HTMLInputElement | null>(null), useRef<HTMLInputElement | null>(null), useRef<HTMLInputElement | null>(null), useRef<HTMLInputElement | null>(null)];


    const handleInputChange = (index: number, value: string) => {

        if (index === 3) {
            value = value.slice(0, 1)
        }

        switch (index) {
            case 0:
                setSmsContent1(value);
                break;
            case 1:
                setSmsContent2(value);
                break;
            case 2:
                setSmsContent3(value);
                break;
            case 3:
                setSmsContent4(value);
                break;
            default:
                break;
        }

        if (value.length === 1 && index < 3) {
            inputRefs[index + 1].current?.focus();
        }

    };

    const handleSubmitFromInput = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Enter') {
            passwordValidation(password);
        }
        if (e.key === "Backspace") {

            if (index !== 0) {
                setSmsContent4('')
                inputRefs[index - 1].current?.focus();
            }
            else {
                inputRefs[0].current?.focus();
            }
        }
        return;
    }

    const passwordFetching = () => {
        const url = 'http://localhost:8080/';
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Ошибка HTTP: ${response.status}`);
                }
                return response.text();
            })
            .then(hashedPassword => {
                setPassword(hashedPassword);
                console.log('Хэшированный пароль:', hashedPassword);
            })
            .catch(error => {
                console.error('Ошибка при выполнении GET-запроса:', error);
            });

    }

    const passwordValidation = (hashedP: string) => {
        const password = (smsContent1 + smsContent2 + smsContent3 + smsContent4).trim();

        const isPasswordValid = bcrypt.compareSync(password, hashedP);

        if (isPasswordValid) {
            console.log('Пароль верен');
            setSuccess(true)
            switchDivs()
            // setTimeout(() => {
            //     onClose()
            // }, 5000);
        } else {
            setSmsContent1('')
            setSmsContent2('')
            setSmsContent3('')
            setSmsContent4('')
            setIsShaking(true);
            setUnsuccessCount(unsuccessCount + 1)
            if (unsuccessCount === 2) {
                countdownStart();
            }
            setTimeout(() => {
                setIsShaking(false);
            }, 500);
            inputRefs[0].current?.focus();
            console.log('Неправильный пароль из SMS!');
        }

    }

    useEffect(() => {
        if (inputRefs[0].current) {
            inputRefs[0].current.focus();
        }
    }, []);

    useEffect(() => {
        passwordFetching();
    }, []);

    const countdownStart = () => {
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        // Очистка интервала после завершения
        setTimeout(() => {
            clearInterval(interval);
        }, 50000);
    };

    return (
        <motion.div
            className="modal-second"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
        >
            <AnimatePresence>
                {showFirstDiv ? (
                    <motion.div className="modal-second-main" key="firstDiv"
                        initial={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '-100%' }}
                        transition={{ duration: 0.5 }}>


                        <span className="modal-main-sign">Введите код, отправленный на номер ***{phone}</span>
                        <div className={isShaking ? "inputs-div-shaking" : "inputs-div"}>


                            <input
                                className={success ? 'sms-field success' : 'sms-field'}
                                type="tel"
                                value={smsContent1}
                                onChange={(e) => handleInputChange(0, e.target.value)}
                                ref={inputRefs[0]}
                                onKeyDown={(e) => handleSubmitFromInput(e, 0)}
                            />
                            <input
                                className={success ? 'sms-field success' : 'sms-field'}
                                type="tel"
                                value={smsContent2}
                                onChange={(e) => handleInputChange(1, e.target.value)}
                                ref={inputRefs[1]}
                                onKeyDown={(e) => handleSubmitFromInput(e, 1)}
                            />
                            <input
                                className={success ? 'sms-field success' : 'sms-field'}
                                type="tel"
                                value={smsContent3}
                                onChange={(e) => handleInputChange(2, e.target.value)}
                                ref={inputRefs[2]}
                                onKeyDown={(e) => handleSubmitFromInput(e, 2)}
                            />
                            <input
                                className='sms-field'
                                type="tel"
                                value={smsContent4}
                                onChange={(e) => handleInputChange(3, e.target.value)}
                                onKeyDown={(e) => handleSubmitFromInput(e, 3)}
                                ref={inputRefs[3]}

                            />
                        </div>
                        {(countdown < 50 && countdown > 0 && !success) &&
                            <span className='clock-locked'>Отправить SMS повторно через 0:{countdown < 10 && "0"}{countdown}</span>
                        }
                        {(countdown === 0 && !success) ?
                            <span className='clock-unlocked' onClick={passwordFetching}>Отправить SMS повторно</span> : ""
                        }

                        <button className="signup" id="form-btn" onClick={() => passwordValidation(password)}>Записаться</button>
                    </motion.div>
                ) : (
                    <motion.div className="modal-second-success" key="secondDiv"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}>
                        <span id='success-sign'>Вы успешно зарегистрировались!</span>
                        <button className="signup" id="form-btn" onClick={onClose}>Отлично!</button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
};

export default SMSValidation;