import { useState } from "react";
import holidayImg from "../../assets/directions/holidays.svg"
import ModalWindow from "../ModalWindow";

const Holidays = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <div className="holiday-dir-main">
            <div className="holiday-card">
                <div className="h-dir-left">
                    <span className="directions-sign" id="h-dir-left-sign">Проведение ваших праздников</span>
                    <span className="directions-sign" id="h-dir-left-thin">Создадим необычайный и очень увлекательный праздник по вашим пожеланиям</span>
                    <div className="h-dir-left-buttons">
                        <button className="signup bigw" onClick={toggleModal}>Записаться!</button>
                        {isModalOpen && <ModalWindow onClose={toggleModal}/>}
                    </div>
                </div>
                <div className="h-dir-right" >
                    <span className="directions-sign" id="h-dir-right-age">5-17 лет</span>
                    <img src={holidayImg} id="holiday-img" />
                </div>

            </div>
        </div>
    )
}

export default Holidays;