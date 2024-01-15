import RobotsCard from "./Directions/RobotsCard";
import ProgramCard from "./Directions/ProgramGamedevCard";
import OgeHolidaysCard from "./Directions/OgeHolidayCards";
import { motion as m } from 'framer-motion'
import '../css/Directions.css'


const DirectionsMain = () => {
    return (

        <m.section className="directions-main">

            <div className="container-main">
                <span className="directions-sign" >Наши направления</span>

                <RobotsCard />
                <ProgramCard />
                <OgeHolidaysCard />
            </div>
        </m.section>
    )
}

export default DirectionsMain