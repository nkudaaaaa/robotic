import { useState } from "react";
import pensil from "../../assets/directions/pensil.svg"
import ModalWindow from "../ModalWindow";
import holidayImg from "../../assets/directions/holidays.svg"

const OgeEgeCard = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDirection, setSelectedDirection] = useState<string>('')


    const toggleModal = (d:string) => {
        setIsModalOpen(!isModalOpen);
        setSelectedDirection(d);
    }    

    return (
        <div className="oge-holidays" >
            <div className="oge-card-main">

                <div className="oge-front">
                    <div className="oge-front-left">
                        <img src={pensil} alt="" id="pensil-img1" />
                    </div>
                    <div className="oge-front-right">
                        <span className="card-front-mainsign">Подготовка к ОГЭ</span>
                        <span className="card-front-thinsign nowrap">Математика, информатика</span>
                        <div className="card-front-btn">
                            <button className="signup big" onClick={() => toggleModal("Подготовка к ОГЭ")}>Записаться!</button>
                        </div>
                    </div>
                </div>
            </div>

        <div className="holiday-dir-main">
        <div className="holiday-card">
            <div className="holiday-front-left">
            <img src={holidayImg} id="holiday-img" />
            </div>
            <div className="holiday-front-right" >
                <span className="card-front-mainsign nowrap">Проведение праздников</span>
                <span className="card-front-thinsign" >Создадим праздник по Вашим пожеланиям</span>
                <div className="h-dir-left-buttons">
                    <button className="signup big" onClick={() => toggleModal("Проведение праздников")}>Записаться!</button>
                </div>
            </div>

        </div>
    </div>
            {isModalOpen && <ModalWindow onClose={() => toggleModal('')} selectedDirection={selectedDirection} />}
        </div>
    )
}

export default OgeEgeCard;