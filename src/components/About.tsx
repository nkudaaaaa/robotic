import "../css/About.css"
import { useQuery } from 'react-query';
import bg from "../assets/about/bg.svg";
import bgsmall from "../assets/about/bgsmall.svg";
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

const loadImage = async (src: string) => {
    const response = await fetch(src);
    const data = await response.blob();
    return URL.createObjectURL(data);
  };

const About = () => {

    const { data: bgData } = useQuery('about-bg-w', () => loadImage(bg));
    const { data: bgsmallData } = useQuery('about-bg', () => loadImage(bgsmall));

    return (
        <section className="about" id="about">
            <div className="container-main">
                <div className="images-bg">
                    <picture>
                    <source media="(min-width: 3440px)" srcSet={bgData} id="about-bg-w"/>
                    <source media="(min-width: 1440px)" srcSet={bgData} id="about-bg-w"/>
                    <source media="(min-width: 768px)" srcSet={bgData} id="about-bg-w"/>
                    <img src={bgsmallData} id="about-bg" />
                    </picture>
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
                    transition={{ duration: 0.9 }} 
                     >
                <span className="main-sign-about" id="span-program">НАПРАВЛЕНИЯ ДЛЯ ИЗУЧЕНИЯ</span>
                    <div className="upper-line">
                        <img src={legoCard} className="directions-item" loading="lazy"/>
                        <img src={htmlCard} alt="" className="directions-item" loading="lazy"/>
                        <img src={javaCard} alt="" className="directions-item" loading="lazy"/>
                    </div>
                    <div className="down-line">
                        <img src={pythonCard} alt="" className="directions-item" id="python" loading="lazy"/>
                        <img src={cplusCard} className="directions-item" loading="lazy"/>
                        <img src={cshCard} className="directions-item" id="csharp" loading="lazy"/>
                        <img src={unityCard} className="directions-item" id="unity" loading="lazy"/>
                    </div>
                </motion.div>

                <motion.div className="cards-education"
                    variants={animationDirReversed}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 0.9, delay: 0.1}} 
                    >
                    <span className="main-sign-about" id="span-directions">ЧЕМУ МЫ ОБУЧАЕМ</span>
                    <div className="down-directions">
                        <img src={programming} alt="" className="down-directions-item" loading="lazy"/>
                        <img src={robots} alt="" id="robototechnics" className="down-directions-item" loading="lazy"/>
                    </div>
                    <div className="upper-directions">
                        <img src={websites} alt="" className="down-directions-item grid" loading="lazy"/>
                        <img src={modeling} alt="" className="down-directions-item grid" loading="lazy"/>
                        <img src={gamedev} alt="" className="down-directions-item" id="gamedev" loading="lazy"/>
                    </div>
                </motion.div>
            </div>
        </section >
    )
}

export default About;