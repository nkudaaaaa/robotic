import "../css/PlusesAndFooter.css"

const Footer = () => {
    return (

        <div className="footer">
            <div className="container-main">
                <div className="call-form">
                    <div className="call-form-text">
                        <span className="call-form-header">Не знаете, с чего начать?</span>
                        <span className="call-form-desc">Подберем оптимальную форму обучения исходя из ваших пожеланий</span>
                    </div>
                    <div className="form-div">
                        <form method="post">
                            <input type="text" placeholder="Имя..." className="form-input"/>
                            <input type="text" placeholder="Телефон..." className="form-input"/>
                            <input type="button" value="Заказать звонок" className="form-btn"/>
                        </form>
                            <span className="politicy-span">Нажимая на кнопку, вы соглашаетесь с <a href="#!">обработкой персональных данных</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;