import { useState } from "react";
import pensil from "../../assets/directions/pensil.svg"
import ModalWindow from "../ModalWindow";
import holidayImg from "../../assets/directions/holidays.svg"
import { motion } from "framer-motion"
import { animation } from "../../animations/CardsAnimation"

const OgeEgeCard = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDirection, setSelectedDirection] = useState<string>('')


    const toggleModal = (d: string) => {
        setIsModalOpen(!isModalOpen);
        setSelectedDirection(d);
    }

    return (
        <div className="oge-holidays"
        >
            <div className="oge-card-main"
            >

                <motion.div className="oge-front"
                    variants={animation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    exit="hidden">
                    <div className="oge-front-left">
                        <img src={pensil} alt="" id="pensil-img1" />
                    </div>
                    <div className="oge-front-right">
                        <span className="card-front-mainsign">Подготовка к ОГЭ</span>
                        <span className="card-front-thinsign nowraps">Математика, информатика</span>
                        <div className="card-front-btn">
                            <button className="signup big" onClick={() => toggleModal("Подготовка к ОГЭ")}>Записаться!</button>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="holiday-card-main">
                <motion.div className="holiday-front"
                    variants={animation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 0.8 }}>
                    <div className="holiday-front-left">
                        <img src={holidayImg} id="holiday-img" />
                    </div>
                    <div className="holiday-front-right" >
                        <span className="card-front-mainsign nowrap">Проведение праздников</span>
                        <span className="card-front-thinsign" >Создадим праздник по Вашим пожеланиям</span>
                        <div className="card-front-btn">
                            <button className="signup big" onClick={() => toggleModal("Проведение праздников")}>Записаться!</button>
                        </div>
                    </div>

                </motion.div>
            </div>
            {isModalOpen && <ModalWindow onClose={() => toggleModal('')} selectedDirection={selectedDirection} isVisible={true} info={{ name: '', phone: '' }} />}
        </div>
    )
}

export default OgeEgeCard;