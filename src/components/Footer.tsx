import "../css/PlusesAndFooter.css"
import tg from "../assets/footer/Telegram.svg"
import vk from "../assets/footer/Vk.svg"
import ws from "../assets/footer/Whatsapp.svg"
import { ChangeEvent, useState } from "react"
import ModalWindow from "./ModalWindow"

interface callBackData {
    name: string;
    phone: string;
}

const Footer = () => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [isSMS, setIsSMS] = useState(false)

    const toggleModal = () => {
        setIsSMS(!isSMS);
        setName('')
        setPhone('')
    }    

    const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
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
            if (phone[n - 1] === '-' || phone[n - 1] === ')'|| phone[n - 1] === '(') setPhone(phone.slice(0, n -1))
          }
    }

    const submitForm = () => {
        const url = 'http://localhost:8080/postConsultation';

        const dataToSend: callBackData = {
            name: name,
            phone: phone,
        }

        if (name === "" || phone === "") {
            alert("Вы не заполнили все поля!")
            return;
        }
        if (phone.length !== 18) {
            alert("Вы не заполнили правильно номер телефона ")
            return;
        }
        setIsSMS(true)
        console.log(phone+'qqqqq');
        console.log(dataToSend);
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(dataToSend),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
        })
            .then(response => response.json())
            .then(responseData => {

                console.log('Успешно отправлено и получено:', responseData);

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
                <div className="call-form">
                    <div className="call-form-text">
                        <span className="call-form-header">Не знаете, с чего начать?</span>
                        <span className="call-form-desc">Подберем оптимальную форму обучения исходя из ваших пожеланий</span>
                    </div>
                    <div className="form-div">
                        <form method="post">
                            <input type="text" placeholder="Имя..." className="form-input" value={name} onChange={handleChangeName} onKeyDown={submitFromInput}/>
                            <input type="text" placeholder="Телефон..." className="form-input" value={phone} onChange={handleChangePhone} onKeyDown={submitFromInput}/>
                            <input type="button" value="Заказать звонок" className="form-btn" onClick={submitForm} />
                        </form>
                        <span className="politicy-span" id="contacts">Нажимая на кнопку, вы соглашаетесь с <a href="#!">обработкой персональных данных</a></span>
                    </div>
                </div>
                <div className="call-form cont">
                    <div className="contacts-div">
                        <span className="contacts-text">ул. Героя Пешкова, 14</span>
                        <span className="contacts-text">+7 (999) - 999 - 99 - 99</span>
                    </div>
                    <div className="icons-footer">
                        <a href="https://t.me/ROBOTIKKRD_BOT" target="_blank"><img src={tg} alt="" className="social-icon" /></a>
                        <a href="https://t.me/ROBOTIKKRD_BOT" target="_blank"><img src={vk} alt="" className="social-icon" /></a>
                        <a href="https://t.me/ROBOTIKKRD_BOT" target="_blank"><img src={ws} alt="" className="social-icon" /></a>
                    </div>

                </div>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Adc36c1edc98ca4d8d885ab666600305f1cbb4df8e201b23de0efbc24cf7e4e1e&amp;source=constructor" width="940" height="271" />

                <div className="footer-info">
                    <a href="/"><span className="footer-logo">Роботик</span></a>
                    <div className="socials">
                        <a href="https://t.me/ROBOTIKKRD_BOT" target="_blank"><img src={tg} alt="" className="social-icon" /></a>
                        <a href="https://t.me/ROBOTIKKRD_BOT" target="_blank"><img src={vk} alt="" className="social-icon" /></a>
                        <a href="https://t.me/ROBOTIKKRD_BOT" target="_blank"> <img src={ws} alt="" className="social-icon" /></a>
                    </div>
                    <div className="documents">
                        <span className="doc-text">Политика конфиденциальности</span>
                        <span className="doc-text">Пользвательское соглашение</span>
                    </div>
                </div>
            </div>
        
        {isSMS && <ModalWindow onClose={() => toggleModal()} selectedDirection="Консультация" isVisible={false} info={{name, phone}}>
            </ModalWindow>}
        </section>
    )
}

export default Footer;