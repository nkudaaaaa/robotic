import "../css/PlusesAndFooter.css"
import tg from "../assets/footer/Telegram.svg"
import vk from "../assets/footer/Vk.svg"
import ws from "../assets/footer/Whatsapp.svg"

const Footer = () => {
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
                            <input type="text" placeholder="Имя..." className="form-input" />
                            <input type="text" placeholder="Телефон..." className="form-input" />
                            <input type="button" value="Заказать звонок" className="form-btn" />
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
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Adc36c1edc98ca4d8d885ab666600305f1cbb4df8e201b23de0efbc24cf7e4e1e&amp;source=constructor" width="1140" height="571" ></iframe>

                <div className="footer-info">
                    <a href="/"><span className="footer-logo" >Роботик</span></a>
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

        </section>
    )
}

export default Footer;