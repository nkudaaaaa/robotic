import rs from '../assets/lastRs.svg';
import ls from '../assets/lastLs.svg';
import robotL from '../assets/Heads/robot-banner-l.svg';
import robotR from '../assets/Heads/robot-banner-r.svg';
import 'react-dom'
import "../css/NavbarBanner.css"
import { downAnimation } from '../animations/animations';
import { leftAnimation } from '../animations/animations';
import { motion as m } from 'framer-motion'

const Banner = () => {

    return (
        <div className="banner-main" >
            <div className="home-routing"></div>
            <div className="banner">
                <div className="marquee">
                    <div className="marquee__content">
                        <ul className="list-inline">
                            <li><img src={rs} alt="" /></li>
                        </ul>
                        <ul className="list-inline">
                            <li><img src={rs} alt="" /></li>
                        </ul>
                        <ul className="list-inline">
                            <li><img src={rs} alt="" /></li>
                        </ul>
                    </div>
                </div>
                <div className="marquee2">
                    <div className="marquee2__content">
                        <ul className="list-inline">
                            <li><img src={ls} alt="" /></li>
                        </ul>
                        <ul className="list-inline">
                            <li><img src={ls} alt="" /></li>
                        </ul>
                        <ul className="list-inline">
                            <li><img src={ls} alt="" /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="down-banner">
                <m.div className="banner-text" variants={leftAnimation} initial="hidden" animate="visible">
                    <span className='banner-text-bold'>в Краснодаре</span>
                    <span className='banner-text-sign'>Влюбляемся в IT профессии, повышаем успеваемость в школе и учимся по-новому взаимодействовать с гаджетами</span>
                </m.div>
                <m.div className="robots" variants={downAnimation} initial="hidden" animate="visible">
                    <m.img src={robotL} id='robotL'/>
                    <m.img src={robotR} id='robotR' />
                </m.div>
            </div>


        </div>
    )
}

export default Banner;