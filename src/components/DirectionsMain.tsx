import RobotsCard from "./Directions/RobotsCard";
import ProgramCard from "./Directions/ProgramGamedevCard";
import OgeHolidaysCard from "./Directions/OgeHolidayCards";
import '../css/Directions.css'

const DirectionsMain = () => {
    return (
        <section className="directions-main">
            <div className="container-main">
                <span className="directions-sign" >Наши направления</span>
                <RobotsCard />
                <ProgramCard />
                <OgeHolidaysCard />
            </div>
        </section>
    )
}

export default DirectionsMain