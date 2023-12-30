import pensil from "../../assets/directions/pensil.svg"


const OgeEgeCard = () => {


    return (
        <div className="oge-ege" >
            <div className="oge-card-main">

                <div className="oge-front">
                    <div className="oge-front-left">
                        <img src={pensil} alt="" id="pensil-img1" />
                    </div>
                    <div className="oge-front-right">
                        <span className="oge-front-mainsign">Подготовка к ОГЭ</span>
                        <span className="oge-front-thinsign">Информатика, математика</span>
                        <div className="oge-front-btn">
                            <button className="signup bigw">Записаться!</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ege-card-main">
                <div className="ege-front">
                    <div className="ege-front-left">
                        <img src={pensil} id="pensil-img2" />
                    </div>
                    <div className="ege-front-right">
                        <span className="ege-front-mainsign">Подготовка к ЕГЭ</span>
                        <span className="ege-front-thinsign">Информатика, математика</span>
                        <div className="ege-front-btn">
                            <button className="signup bigw">Записаться!</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default OgeEgeCard;