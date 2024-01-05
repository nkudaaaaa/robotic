import "../css/About.css"
// import minecr from "../assets/about/minecraftLogo.svg"
// import wifi from "../assets/about/wifiLogo.svg"
// import gear from "../assets/about/gearLogo.svg"
// import fire from "../assets/about/fireLogo.svg"
// import puzzle from "../assets/about/puzzle.svg"
// import hummer from "../assets/about/hammer.svg"
// import figma from "../assets/about/figma.svg"
// import lightning from "../assets/about/lightningLogo.svg"
import bg  from "../assets/about/bg.svg";
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



const About = () => {
    return (
        <div className="about" id="about">
            <div className="container-main">
                <span className="main-sign-about">Добро пожаловать в Роботик— ваш ключ к захватывающему миру технологий и творчества!{<br />}{<br />}

                    Открывайте для себя веселое программирование, захватывающие проекты и уникальные курсы, которые не только раскроют ваши таланты, но и повысят успеваемость в школе!
                    Превратите свою любовь к технике в потрясающий опыт обучения с Роботик— где будущее начинается сегодня!
                </span>
                <span className="main-sign-about" id="span-hashtags">#Роботик #Технотворчество #ПрограммированиеДляДетей</span>
                <span className="main-sign-about" id="span-education">ПРОГРАММА ОБУЧЕНИЯ</span>

                <div className="line" />
                <div className="images-bg">
                    <img src={bg} id="about-bg" />
                </div>
                <span className="main-sign-about" id="span-program">НАПРАВЛЕНИЯ ДЛЯ ИЗУЧЕНИЯ</span>
                <div className="cards-directions">
                    <div className="upper-line">
                        <img src={legoCard} className="directions-item" />
                        <img src={htmlCard} alt="" className="directions-item" />
                        <img src={javaCard} alt="" className="directions-item" />
                        <img src={pythonCard} alt="" className="directions-item" />
                    </div>
                    <div className="down-line">

                        <img src={cplusCard} className="directions-item" />
                        <img src={cshCard} className="directions-item" />
                        <img src={unityCard} className="directions-item" />
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
                        <img src={robots} alt="" id="robototechnics" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;