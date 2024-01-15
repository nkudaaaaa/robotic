import "../css/About.css"
import bg from "../assets/about/bg.svg";
import legoCard from "../assets/about/legoCard.svg"
import htmlCard from "../assets/about/htmlCard.svg"
import javaCard from "../assets/about/javaCard.svg"
import pythonCard from "../assets/about/pythonCard.svg"
import cplusCard from "../assets/about/cplusCard.svg"
import cshCard from "../assets/about/cshLogo.svg"
import unityCard from "../assets/about/unityCard.svg";
import gamedev from "../assets/about/gamedev.svg"
import modeling from "../assets/about/3D.svg"
import websites from "../assets/about/websites.svg"
import programming from "../assets/about/programming.svg"
import robots from "../assets/about/robots.svg"
import { animationDir, hrAnimation, animationDirReversed } from '../animations/CardsAnimation';
import { motion } from "framer-motion"

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container-main">
                <div className="images-bg">
                    <img src={bg} id="about-bg" />
                </div>
                <span className="main-sign-about">Добро пожаловать в Роботик— ваш ключ к захватывающему миру технологий и творчества!{<br />}{<br />}

                    Открывайте для себя веселое программирование, захватывающие проекты и уникальные курсы, которые не только раскроют ваши таланты, но и повысят успеваемость в школе!
                    Превратите свою любовь к технике в потрясающий опыт обучения с Роботик— где будущее начинается сегодня!
                </span>
                <span className="main-sign-about" id="span-hashtags">#Роботик #Технотворчество #ПрограммированиеДляДетей</span>
                <span className="main-sign-about" id="span-education">ПРОГРАММА ОБУЧЕНИЯ</span>

                <motion.div className="line"
                    variants={hrAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 0.9 }} />
                <motion.div className="cards-directions"
                    variants={animationDir}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 0.9 }}  >
                <span className="main-sign-about" id="span-program">НАПРАВЛЕНИЯ ДЛЯ ИЗУЧЕНИЯ</span>
                    <div className="upper-line">
                        <img src={legoCard} className="directions-item" />
                        <img src={htmlCard} alt="" className="directions-item" />
                        <img src={javaCard} alt="" className="directions-item" />
                    </div>
                    <div className="down-line">
                        <img src={pythonCard} alt="" className="directions-item" id="python" />
                        <img src={cplusCard} className="directions-item" />
                        <img src={cshCard} className="directions-item" id="csharp" />
                        <img src={unityCard} className="directions-item" id="unity" />
                    </div>
                </motion.div>

                <motion.div className="cards-education"
                    variants={animationDirReversed}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 0.9}} 
                    >
                    <span className="main-sign-about" id="span-directions">ЧЕМУ МЫ ОБУЧАЕМ</span>
                    <div className="down-directions">
                        <img src={programming} alt="" className="down-directions-item" />
                        <img src={robots} alt="" id="robototechnics" className="down-directions-item" />
                    </div>
                    <div className="upper-directions">
                        <img src={websites} alt="" className="down-directions-item grid" />
                        <img src={modeling} alt="" className="down-directions-item grid" />
                        <img src={gamedev} alt="" className="down-directions-item" id="gamedev" />
                    </div>
                </motion.div>
            </div>
        </section >
    )
}

export default About;