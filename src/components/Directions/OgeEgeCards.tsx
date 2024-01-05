import { useState } from "react";
import pensil from "../../assets/directions/pensil.svg"
import ModalWindow from "../ModalWindow";


const OgeEgeCard = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }
    
    return (
        <div className="oge-ege" >
            <div className="oge-card-main">

                <div className="oge-front">
                    <div className="oge-front-left">
                        <img src={pensil} alt="" id="pensil-img1" />
                    </div>
                    <div className="oge-front-right">
                        <span className="card-front-mainsign">Подготовка к ОГЭ</span>
                        <span className="card-front-thinsign">Информатика, математика</span>
                        <div className="card-front-btn">
                            <button className="signup" onClick={toggleModal}>Записаться!</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ege-card-main">
                <div className="ege-front">
                    <div className="ege-front-left">
                        <img src={pensil} id="pensil-img2" />
                    </div>
                    <div className="ege-front-right">
                        <span className="card-front-mainsign">Подготовка к ЕГЭ</span>
                        <span className="card-front-thinsign">Информатика, математика</span>
                        <div className="card-front-btn">
                            <button className="signup" id="holidays" onClick={toggleModal}>Записаться!</button>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && <ModalWindow onClose={toggleModal} />}
        </div>
    )
}

export default OgeEgeCard;