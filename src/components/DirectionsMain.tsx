import RobotsCard from "./Directions/RobotsCard";
import '../css/Directions.css'

const DirectionsMain = () => {
    return (
            <div className="directions-main">
                <span className="directions-sign" >Наши направления</span>
                <RobotsCard />
            </div>
    )
}

export default DirectionsMain