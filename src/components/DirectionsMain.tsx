import RobotsCard from "./Directions/RobotsCard";
import ProgramCard from "./Directions/ProgramGamedevCard";
import OgeEgeCard from "./Directions/OgeEgeCards";
import Holidays from "./Directions/Holidays";
import '../css/Directions.css'

const DirectionsMain = () => {
    return (
        <div className="directions-main">
            <div className="container-directions">
                <span className="directions-sign" >Наши направления</span>
                <RobotsCard />
                <ProgramCard />
                <OgeEgeCard />
                <Holidays />
            </div>
        </div>
    )
}

export default DirectionsMain