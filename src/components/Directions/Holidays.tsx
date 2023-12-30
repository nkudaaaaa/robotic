import holidayImg from "../../assets/directions/holidays.svg"
import present from "../../assets/directions/present.svg"

const Holidays = () => {

    return (
        <div className="holiday-dir-main">
            <div className="holiday-card">
                <div className="h-dir-left">
                    <span className="directions-sign" id="h-dir-left-sign">Проведение ваших праздников</span>
                    <span className="directions-sign" id="h-dir-left-thin">Создадим необычайный и очень увлекательный праздник по вашим пожеланиям</span>
                    <div className="h-dir-left-buttons">
                        <button className="signup bigw">Записаться!</button>

                    </div>
                </div>
                <div className="h-dir-right" >
                    <span className="directions-sign" id="h-dir-right-age">5-17 лет</span>
                    <img src={holidayImg} id="holiday-img" />
                    <img src={present} id="present" />
                </div>

            </div>
        </div>
    )
}

export default Holidays;