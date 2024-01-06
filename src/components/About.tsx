import React, { useState, useEffect } from 'react';
import '../css/About.css';
import bg from '../assets/about/bg.svg';
import legoCard from '../assets/about/legoCard.svg';
import htmlCard from '../assets/about/htmlCard.svg';
import javaCard from '../assets/about/javaCard.svg';
import pythonCard from '../assets/about/pythonCard.svg';
import cplusCard from '../assets/about/cplusCard.svg';
import cshCard from '../assets/about/cshLogo.svg';
import unityCard from '../assets/about/unityCard.svg';
import gamedev from '../assets/about/gamedev.svg';
import modeling from '../assets/about/3D.svg';
import websites from '../assets/about/websites.svg';
import programming from '../assets/about/programming.svg';
import robots from '../assets/about/robots.svg';

const About = () => {
  const [animatedDirection, setAnimatedDirection] = useState<string>('');
  const [directionIndex, setDirectionIndex] = useState<number>(0);

  const directionsOrder = [1, 4, 7, 5, 6, 2, 3, 7, 1, 3, 4, 6, 3, 5];
  const directions = [
    legoCard,
    htmlCard,
    javaCard,
    pythonCard,
    cplusCard,
    cshCard,
    unityCard,
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDirection = directionsOrder[directionIndex];
      setAnimatedDirection(directions[currentDirection - 1]);

      // Increment the directionIndex for the next interval
      setDirectionIndex((prevIndex) => (prevIndex + 1) % directionsOrder.length);
    }, 1500);

    return () => clearInterval(intervalId);
  }, [directionsOrder, directionIndex]);

  // Разделение массива направлений на две строки
  const firstRow = directions.slice(0, Math.ceil(directions.length / 2));
  const secondRow = directions.slice(Math.ceil(directions.length / 2));

  return (
    <div className="about" id="about">
      <div className="container-main">
        <span className="main-sign-about">Добро пожаловать в Роботик— ваш ключ к захватывающему миру технологий и творчества!{<br />}{<br />}
          Открывайте для себя веселое программирование, захватывающие проекты и уникальные курсы, которые не только раскроют ваши таланты, но и повысят успеваемость в школе! Превратите свою любовь к технике в потрясающий опыт обучения с Роботик— где будущее начинается сегодня!
        </span>
        <span className="main-sign-about" id="span-hashtags">#Роботик #Технотворчество #ПрограммированиеДляДетей</span>
        <span className="main-sign-about" id="span-education">ПРОГРАММА ОБУЧЕНИЯ</span>

        <div className="line" />
        <div className="images-bg">
          <img src={bg} id="about-bg" alt="Background" />
        </div>
        <span className="main-sign-about" id="span-program">НАПРАВЛЕНИЯ ДЛЯ ИЗУЧЕНИЯ</span>
        <div className="cards-directions">
          <div className="upper-line">
            {firstRow.map((direction, index) => (
              <img
                key={index}
                src={direction}
                className={`directions-item ${animatedDirection === direction ? 'animated' : ''}`}
                alt={`Direction ${index + 1}`}
              />
            ))}
          </div>
          <div className="down-line">
            {secondRow.map((direction, index) => (
              <img
                key={index}
                src={direction}
                className={`directions-item ${animatedDirection === direction ? 'animated' : ''}`}
                alt={`Direction ${firstRow.length + index + 1}`}
              />
            ))}
          </div>
        </div>
        <span className="main-sign-about" id="span-directions">ЧЕМУ МЫ ОБУЧАЕМ</span>
        <div className="cards-education">
          <div className="upper-directions">
            <img src={gamedev} alt="Game Development" />
            <img src={modeling} alt="3D Modeling" />
            <img src={websites} alt="Websites" />
          </div>
          <div className="upper-directions">
            <img src={programming} alt="Programming" />
            <img src={robots} alt="Robotics" id="robototechnics" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
