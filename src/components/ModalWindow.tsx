import "../css/ModalWindow.css"
import React, {useState, ChangeEvent, useEffect, useRef} from 'react';
import {motion, useAnimation} from "framer-motion";
import SMSValidation from "./SMSValidation";


interface LessonRegistrationModalProps {
    onClose: () => void;
    selectedDirection: string;
    isVisible: boolean;
    info: { name: string, phone: string };
}

interface data {
    name: string;
    surname: string,
    phone: string,
    direction: string;
    date: string;
}

const ModalWindow: React.FC<LessonRegistrationModalProps> = ({onClose, selectedDirection, isVisible, info}) => {
    const initialDir: string = selectedDirection;

    const [name, setName] = useState<string>(info.name);
    const [surname, setSurname] = useState<string>('');

    const [phoneNumber, setPhoneNumber] = useState<string>(info.phone)
    const [selected, setSelected] = useState<string>(initialDir);

    const [isActive, setIsActive] = useState<boolean>(false);

    const [isModalFirstVisible, setIsModalFirstVisible] = useState<boolean>(isVisible);

    const inputRefs = useRef<HTMLInputElement | null>(null);

    const options = ["Робототехника", "Программирование", "Разработка игр", "Подготовка к ОГЭ (математика)", "Подготовка к ОГЭ (информатика)", "Проведение праздников"];

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (/^[А-Яа-яA-Za-z]*$/.test(inputValue)) {
            if (inputValue.length > 30) setName(inputValue.slice(0, 30));
            else setName(inputValue)
        }
    };

    const handleSurNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (/^[А-Яа-яA-Za-z]*$/.test(inputValue)) {
            if (inputValue.length > 50) setSurname(inputValue.slice(0, 50));
            else setSurname(inputValue)
        }
    };

    const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        const formatted = formatPhone(e.target.value)
        setPhoneNumber(formatted);
    };

    const controls = useAnimation();

    const animateForm = () => {
        setIsModalFirstVisible(false);
        controls.start({x: -400, opacity: 0, transition: {duration: 0.5}});
    };


    const formatPhone = (value: string) => {
        if (!value) return value;

        let phoneNumber = value.replace(/[^\d+]/g, '');
        const phoneNumberLength = phoneNumber.length;

        if (phoneNumberLength === 1 && phoneNumber !== "+") phoneNumber = `+7 ${phoneNumber}`;

        if (phoneNumberLength < 6) return `${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2)})`;

        if (phoneNumberLength < 8) return `${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2, 5)})-${phoneNumber.slice(5)}`;

        if (phoneNumberLength < 10) return `${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2, 5)})-${phoneNumber.slice(5, 8)}-${phoneNumber.slice(8)}`

        return `${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2, 5)})-${phoneNumber.slice(5, 8)}-${phoneNumber.slice(8, 10)}-${phoneNumber.slice(10, 12)}`;
    };

    const formDataPostFromInput = (e: React.KeyboardEvent<HTMLInputElement>) => {

        if (e.key === 'Enter') {
            formDataPost()
        }
        if (e.key === 'Backspace') {
            const n = phoneNumber.length;
            if (phoneNumber[n - 1] === '-' || phoneNumber[n - 1] === ')' || phoneNumber[n - 1] === '(') setPhoneNumber(phoneNumber.slice(0, phoneNumber.length - 1))
            if (n === 5) setPhoneNumber('')
        }
    }

    const formDataPost = () => {
        const url = 'https://slrserver.tech/submitUserData';
        const milliseconds = Date.now() ;
        const parsedDate = new Date(milliseconds + 3 * 60 * 60 * 1000).toISOString()
        const dataToSend: data = {
            name,
            surname,
            phone: phoneNumber,
            direction: selected,
            date: parsedDate
        }

        if (name === "" || surname === "" || phoneNumber === "") {
            alert("Вы не заполнили все поля!")
            return;
        }
        if (phoneNumber.length !== 18) {
            alert("Вы не заполнили правильно номер телефона ")
            return;
        }
        console.log(dataToSend)
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(dataToSend),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response;
            })
            .then(responseData => {
                animateForm();
                return responseData;
            })
            .catch(error => {
                console.error('Ошибка при отправке данных:', error);
                throw error;
            });
    }

    useEffect(() => {
        document.body.classList.add('modal-open');
        inputRefs.current?.focus();

        return () => {
            document.body.classList.remove('modal-open');
        };
    }, []);

    return (
        <motion.div className="modal-overlay" onClick={onClose}>
            <motion.div className="modal" onClick={(e) => e.stopPropagation()} title="Запись на занятие">
                {isModalFirstVisible && <motion.div className="modal-first" animate={controls}>
                    <h3 className="modal-main-sign">Заполните форму для записи на интересующее направление</h3>
                    <div className="inputs">
                        <input type="text" value={name} onChange={handleNameChange} name="name" className="input-field"
                               placeholder="Имя..." ref={inputRefs}/>
                        <input type="text" value={surname} onChange={handleSurNameChange} name="surname"
                               className="input-field" placeholder="Фамилия..."/>
                        <input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} name="phone"
                               className="input-field" placeholder="Телефон..." required
                               onKeyDown={formDataPostFromInput}/>
                        <div className="dropdown-form">
                            <div className="dropdown-form-btn" onClick={() => setIsActive(!isActive)}>
                                {selected}
                                <span className="fas fa-caret-down"></span>
                            </div>
                            {isActive && (
                                <div className="dropdown-form-content">
                                    {options.map((option) => (
                                        <div
                                            onClick={() => {
                                                setSelected(option);
                                                setIsActive(false);
                                            }}
                                            className="dropdown-form-item"
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>

                            )}
                        </div>
                        <button onClick={formDataPost} className="signup" id="form-btn"
                                title="Записаться на занятие">Записаться
                        </button>
                    </div>
                </motion.div>}
                {!isModalFirstVisible && <SMSValidation phone={phoneNumber.slice(13)} onClose={onClose}/>}
            </motion.div>
        </motion.div>
    );
};
export default ModalWindow;




