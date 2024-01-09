import first from "../assets/plusses/1.svg"
import second from "../assets/plusses/2.svg"
import third from "../assets/plusses/3.svg"
import "../css/PlusesAndFooter.css"

const Pluses = () => {

    return (

        <section className="pluses">



            <div className="container-main">
                <div className="pluses-main">
                    <span className="main-sign-pluses">Почему стоит выбрать нас?</span>
                    <div className="plus">
                        <img src={first} alt="" className="image-plus" />
                        <div className="plus-text-div">

                            <span className="plus-name">Результативность</span>
                            <span className="plus-description">Каждый из обучающихся детей отрабатывает теоретические навыки на практике. Будь то создание роботов или игр в 3D.</span>
                        </div>
                    </div>

                    <div className="plus">
                        <img src={second} alt="" className="image-plus" />
                        <div className="plus-text-div">

                            <span className="plus-name">Участие в олимпиадах</span>
                            <span className="plus-description">У каждого ребенка будет возможность проявить себя в различных олимпиадах, за прохождение которых будут выдаваться сертификаты.</span>
                        </div>
                    </div>

                    <div className="plus">
                        <img src={third} alt="" className="image-plus" />
                        <div className="plus-text-div" id="plus-last">
                            <span className="plus-name">Профессиональные кураторы</span>
                            <span className="plus-description">Наши программы обучения разработаны высококвалифицированными экспертами, а лучшие педагоги помогут все понять с первого раза.</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pluses;