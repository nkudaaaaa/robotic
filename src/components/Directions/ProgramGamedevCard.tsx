import { motion } from "framer-motion";
import { useState } from "react";
import comp from "../../assets/directions/computer.svg"
import closeIcon from "../../assets/directions/add.svg"
import minecr from "../../assets/directions/minecr.svg"
import ModalWindow from "../ModalWindow";

const ProgramCard = () => {

    const [isFlippedPr, setIsFlippedPr] = useState<boolean>(false);
    const [isAnimatingPr, setIsAnimatingPr] = useState<boolean>(false);
    const [isFlippedGm, setIsFlippedGm] = useState<boolean>(false);
    const [isAnimatingGm, setIsAnimatingGm] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    function handleFlipPr() {
        if (!isAnimatingPr) {
            setIsFlippedPr(!isFlippedPr);
            setIsAnimatingPr(!isAnimatingPr);
        }
    }

    function handleFlipGm() {
        if (!isAnimatingGm) {
            setIsFlippedGm(!isFlippedGm);
            setIsAnimatingGm(!isAnimatingGm);
        }
    }



    return (
        <div className="programming-gamedev" >
            <motion.div className="program-card-main"
                initial={false}
                animate={{ rotateY: isFlippedPr ? 180 : 360 }}
                transition={{ duration: 0.6, animationDirection: "normal" }}
                onAnimationComplete={() => setIsAnimatingPr(false)}>

                <div className="program-front">
                    <div className="program-front-left">
                        <img src={comp} alt="" id="computer-img" />
                    </div>
                    <div className="program-front-right">
                        <span className="card-front-mainsign">Программирование</span>
                        <span className="card-front-thinsign">Научим Вашего ребенка основам различных языков</span>
                        <div className="card-front-btn">
                            <button className="signup smallw" id="ege" onClick={toggleModal}>Записаться!</button>
                            <button className="more smallw" onClick={handleFlipPr} id="oge">Подробнее</button>
                        </div>
                        <span className="card-front-mainsign age">12-18 лет</span>
                    </div>
                </div>

                <div className="program-back">
                    <span className="card-back-sign">В основе курса лежит изучение таких языков программирования как Java, C#,
                        HTML и CSS, основы вёрстки и FRONTEND-разработки. Курс рассчитан на 2 года, затрагивает разные направления
                        программирования и даёт ребёнку полное понимание того, чем ему интересно занимать в сфере IT.</span>
                    <img src={closeIcon} className="close-icon" onClick={handleFlipPr} />
                </div>
            </motion.div>

            <motion.div className="game-card-main"
                initial={false}
                animate={{ rotateY: isFlippedGm ? 180 : 360 }}
                transition={{ duration: 0.6, animationDirection: "normal" }}
                onAnimationComplete={() => setIsAnimatingGm(false)}>

                <div className="game-front">
                    <div className="game-front-left">
                        <img src={minecr} alt="" id="minecr-img" />
                    </div>
                    <div className="game-front-right">
                        <span className="card-front-mainsign">Разработка игр</span>
                        <span className="card-front-thinsign">Научим Вашего ребенка создавать игры на Unity</span>
                        <div className="card-front-btn">
                            <button className="signup smallw" onClick={toggleModal}>Записаться!</button>
                            <button className="more smallw" onClick={handleFlipGm}>Подробнее</button>
                        </div>
                        <span className="card-front-mainsign age">12-18 лет</span>
                    </div>
                </div>

                <div className="game-back">
                    <span className="card-back-sign">Разработка игр - одно из самых перспективных направлений в сфере IT. Если ваш ребёнок творческая личность, то это направление идеально ему подойдёт. Курс обучения 2 года и включает в себя всё, начиная с азов программирования и до создания полноценных 2D и 3D проектов с помощью игрового движка Unity.</span>
                    <img src={closeIcon} className="close-icon" onClick={handleFlipGm} />
                </div>
            </motion.div>
            {isModalOpen && <ModalWindow onClose={toggleModal} />}
        </div>
    )
}

export default ProgramCard;