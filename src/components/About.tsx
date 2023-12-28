import "../css/About.css"
import minecr from "../assets/minecraftLogo.svg"
import wifi from "../assets/wifiLogo.svg"
import gear from "../assets/gearLogo.svg"
import fire from "../assets/fireLogo.svg"
import puzzle from "../assets/puzzle.svg"
import hummer from "../assets/hammer.svg"
import figma from "../assets/figma.svg"
import lightning from "../assets/lightningLogo.svg"
import legoCard from "../assets/legoCard.svg"
import htmlCard from "../assets/htmlCard.svg"
import javaCard from "../assets/javaCard.svg"
import pythonCard from "../assets/pythonCard.svg"
import cplusCard from "../assets/cplusCard.svg"
import cshCard from "../assets/cshLogo.svg"
import unityCard from "../assets/unityCard.svg";
import gamedev from "../assets/gamedev.svg"
import modeling from "../assets/3D.svg"
import websites from "../assets/websites.svg"
import programming from "../assets/programming.svg"
import robots from "../assets/robots.svg"



const About = () => {
    return (
        <div className="about" id="about">
            <div className="container-about">
                <span className="main-sign-about">Добро пожаловать в Роботик— ваш ключ к захватывающему миру технологий и творчества!{<br />}{<br />}

                    Открывайте для себя веселое программирование, захватывающие проекты и уникальные курсы, которые не только раскроют ваши таланты, но и повысят успеваемость в школе!
                    Превратите свою любовь к технике в потрясающий опыт обучения с Роботик— где будущее начинается сегодня!
                </span>
                <span className="main-sign-about" id="span-hashtags">#Роботик #Технотворчество #ПрограммированиеДляДетей</span>
                <span className="main-sign-about" id="span-education">ПРОГРАММА ОБУЧЕНИЯ</span>

                <hr className="line" />

                <img src={minecr} id="minecr" className="icons" />
                <img src={wifi} id="wifi" className="icons" />
                <img src={gear} id="gear" className="icons" />
                <img src={lightning} id="lightning" className="icons" />
                <img src={puzzle} id="puzzle" className="icons" />
                <img src={fire} id="fire" className="icons" />
                <img src={hummer} id="hammer" className="icons" />
                <img src={figma} id="figma" className="icons" />
                <span className="main-sign-about" id="span-program">НАПРАВЛЕНИЯ ДЛЯ ИЗУЧЕНИЯ</span>
                <div className="cards-directions">
                    <div className="upper-line">
                        <img src={legoCard} className="directions-item"/>
                        <img src={htmlCard} alt="" className="directions-item"/>
                        <img src={javaCard} alt="" className="directions-item"/>
                        <img src={pythonCard} alt="" className="directions-item"/>
                    </div>
                    <div className="down-line">

                        <img src={cplusCard}className="directions-item" />
                        <img src={cshCard} className="directions-item"/>
                        <img src={unityCard} className="directions-item"/>
                    </div>
                </div>
                <span className="main-sign-about" id="span-directions">ЧЕМУ МЫ ОБУЧАЕМ</span>
                <div className="cards-education">
                    <div className="upper-directions">
                        <img src={gamedev} alt="" />
                        <img src={modeling} alt="" />
                        <img src={websites} alt="" />
                    </div>
                    <div className="upper-directions">
                        <img src={programming} alt="" />
                        <img src={robots} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;