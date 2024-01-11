import { useRef, useState, useEffect } from 'react';
import { motion } from "framer-motion";
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
    const inputRefs = [useRef<HTMLInputElement | null>(null), useRef<HTMLInputElement | null>(null), useRef<HTMLInputElement | null>(null), useRef<HTMLInputElement | null>(null)];

    const handleInputChange = (index: number, value: string) => {
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

    const passwordValidation = () => {
        const url = 'http://localhost:8080/';
        let hashed = '';
        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
            return response.text();
        })
        .then(hashedPassword => {
            hashed = hashedPassword;
            console.log('Хэшированный пароль:', hashedPassword);
            const password = (smsContent1 + smsContent2 + smsContent3 + smsContent4).trim();
            console.log(password);
            
            const isPasswordValid = bcrypt.compareSync(password, hashed);
    
            if (isPasswordValid) {
                console.log('Пароль верен');
                alert('Вы успешно записались!')
                onClose();
            } else {
                setSmsContent1('')
                setSmsContent2('')
                setSmsContent3('')
                setSmsContent4('')
                console.log('Неправильный пароль из SMS!');
            }
        })
        .catch(error => {
            console.error('Ошибка при выполнении GET-запроса:', error);
        });




    }

    useEffect(() => {
        if (inputRefs[0].current) {
            inputRefs[0].current.focus();
        }
    }, []);

    return (
        <motion.div
            className="modal-second"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
        >
            <span className="modal-main-sign">Введите код, отправленный на номер ***{phone}</span>
            <div className="inputs-div">

                <input
                    className="sms-field"
                    type="text"
                    value={smsContent1}
                    onChange={(e) => handleInputChange(0, e.target.value)}
                    ref={inputRefs[0]}
                />
                <input
                    className="sms-field"
                    type="text"
                    value={smsContent2}
                    onChange={(e) => handleInputChange(1, e.target.value)}
                    ref={inputRefs[1]}

                />
                <input
                    className="sms-field"
                    type="text"
                    value={smsContent3}
                    onChange={(e) => handleInputChange(2, e.target.value)}
                    ref={inputRefs[2]}

                />
                <input
                    className="sms-field"
                    type="text"
                    value={smsContent4}
                    onChange={(e) => handleInputChange(3, e.target.value)}
                    ref={inputRefs[3]}

                />
            </div>
            <button className="signup" id="form-btn" onClick={passwordValidation}>Записаться</button>
        </motion.div>
    )
};

export default SMSValidation;