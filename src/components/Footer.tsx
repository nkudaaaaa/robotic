import "../css/PlusesAndFooter.css"
import tg from "../assets/footer/Telegram.svg"
import vk from "../assets/footer/Vk.svg"
import ws from "../assets/footer/Whatsapp.svg"
import { ChangeEvent, useState } from "react"
import ModalWindow from "./ModalWindow"
import { Link } from 'react-router-dom';
import { animationDir } from '../animations/CardsAnimation';
import { motion } from "framer-motion"
import logoonly from '../assets/Heads/logotextdown.svg'

interface callBackData {
    name: string;
    phone: string;
    time: string;
}

const Footer = () => {

    const [name, setName] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [isSMS, setIsSMS] = useState<boolean>(false)

    const toggleModal = () => {
        setIsSMS(!isSMS);
        setName('')
        setPhone('')
    }

    const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        if (/^[А-Яа-яA-Za-z]*$/.test(inputValue)) {
            if (inputValue.length > 30) {
                setName(inputValue.slice(0, 30));
            }
            else setName(inputValue)
        }
    }

    const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
        const formatted = formatPhone(e.target.value)
        setPhone(formatted)
    }

    const formatPhone = (value: string) => {
        if (!value) return value;

        let phoneNumber = value.replace(/[^\d+]/g, '');

        const phoneNumberLength = phoneNumber.length;

        if (phoneNumberLength === 1 && phoneNumber !== "+") {
            phoneNumber = `+7 ${phoneNumber}`;
        }

        if (phoneNumberLength < 6) {
            return `${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2)})`;
        }

        if (phoneNumberLength < 8) {
            return `${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2, 5)})-${phoneNumber.slice(5)}`;
        }
        if (phoneNumberLength < 10) {
            return `${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2, 5)})-${phoneNumber.slice(5, 8)}-${phoneNumber.slice(8)}`
        }

        return `${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2, 5)})-${phoneNumber.slice(5, 8)}-${phoneNumber.slice(8, 10)}-${phoneNumber.slice(10, 12)}`;
    };

    const submitFromInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            submitForm();
        }
        if (e.key === 'Backspace') {
            const n = phone.length;
            if (['-', ')', '('].includes(phone[n - 1])) setPhone(phone.slice(0, n - 1))
            if (n === 5) setPhone('')
        }
    }

    const submitForm = () => {
        const url = 'https://slrserver.tech/callBack';
        const milliseconds =Date.now() ;
        const parsedDate = new Date(milliseconds + 3 * 60 * 60 * 1000).toISOString();

        const dataToSend: callBackData = {
            name: name,
            phone: phone,
            time: parsedDate
        }

        if (name === "" || phone === "") {
            alert("Вы не заполнили все поля!")
            return;
        }
        if (phone.length !== 18) {
            alert("Вы не заполнили правильно номер телефона!")
            return;
        }
        console.log(dataToSend);
        
        setIsSMS(true)
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(dataToSend),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
        })
            .then(response => response.json())
            .then(responseData => {
                return responseData;
            })
            .catch(error => {
                console.error('Ошибка при отправке данных:', error);
                throw error;
            });
    }
    return (

        <section className="footer">
            <div className="container-main">
                <motion.div className="call-form"
                    variants={animationDir}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 0.9 }} >
                    <div className="call-form-text">
                        <h6 className="call-form-header">Не знаете, с чего начать?</h6>
                        <span className="call-form-desc">Подберем оптимальную форму обучения исходя из ваших пожеланий</span>
                    </div>
                    <div className="form-div">
                        <form method="post" action="">
                            <input type="text" placeholder="Имя..." name="name" className="form-input" value={name} onChange={handleChangeName} onKeyDown={submitFromInput} />
                            <input type="text" placeholder="Телефон..." name="phone" className="form-input" value={phone} onChange={handleChangePhone} onKeyDown={submitFromInput} />
                            <input type="button" value="Заказать звонок" className="form-btn" onClick={submitForm} title="Отправить запрос на звонок" />
                        </form>
                        <p className="politicy-span" id="contacts">Нажимая на кнопку, вы соглашаетесь с <a href="/privacy">обработкой персональных данных</a></p>
                    </div>
                </motion.div>
                <div className="call-form cont">
                    <div className="contacts-div">
                    <mark><h6 className="contacts-text">ул. Героя Пешкова, 14</h6></mark>
                        <mark><h6 className="contacts-text phone">+7 (918) - 123 - 05 - 93</h6></mark>
                    </div>
                    <div className="icons-footer">
                        <a href="https://t.me/ROBOTIKKRD_BOT" target="_blank"><img src={tg} alt="telegram" className="social-icon" loading="lazy" rel="noopener noreferrer"/></a>
                        <a href="https://t.me/ROBOTIKKRD_BOT" target="_blank"><img src={vk} alt="vkontakte" className="social-icon" loading="lazy" rel="noopener noreferrer"/></a>
                        <a href="https://t.me/ROBOTIKKRD_BOT" target="_blank"><img src={ws} alt="whatsapp" className="social-icon" loading="lazy" rel="noopener noreferrer"/></a>
                    </div>

                </div>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Adc36c1edc98ca4d8d885ab666600305f1cbb4df8e201b23de0efbc24cf7e4e1e&amp;source=constructor;theme=light" width="940" height="271" loading="lazy" title="yandex-map" />

                <footer className="footer-info">
                    <a href="/" id="logo-a"><img src={logoonly} alt="logo" id="logo-footer" /></a>
                    <div className="socials">
                        <a href="https://t.me/ROBOTIKKRD_BOT" target="_blank"><img src={tg} alt="" className="social-icon" loading="lazy" rel="noopener noreferrer"/></a>
                        <a href="https://t.me/ROBOTIKKRD_BOT" target="_blank"><img src={vk} alt="" className="social-icon" loading="lazy" rel="noopener noreferrer"/></a>
                        <a href="https://t.me/ROBOTIKKRD_BOT" target="_blank"> <img src={ws} alt="" className="social-icon" loading="lazy" rel="noopener noreferrer"/></a>
                    </div>
                    <div className="documents">
                        <Link to="/privacy#privacy" className="doc-text">Политика конфиденциальности </Link>
                        <Link to="/privacy" className="doc-text">
                            Пользовательское соглашение
                        </Link>

                    </div>
                </footer>
            </div>
            {isSMS && <ModalWindow onClose={() => toggleModal()} selectedDirection="Консультация" isVisible={false} info={{ name, phone }}/>}
        </section >
    )
}

export default Footer;