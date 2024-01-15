import first from "../assets/plusses/1.svg"
import second from "../assets/plusses/2.svg"
import third from "../assets/plusses/3.svg"
import "../css/PlusesAndFooter.css"
import { motion } from "framer-motion"
import { plusesAnimation } from '../animations/CardsAnimation'

const Pluses = () => {

    return (

        <section className="pluses">



            <span className="main-sign-pluses">Почему стоит выбрать нас?</span>
            <div className="container-main">
                <div className="pluses-main">
                    <motion.div className="plus"
                        variants={plusesAnimation}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.8, delay: 0.1, type: 'spring' }}
                        viewport={{ amount: 0.1}}>
                        <img src={first} alt="" className="image-plus" />
                        <div className="plus-text-div">

                            <span className="plus-name">Результативность</span>
                            <span className="plus-description">Каждый из обучающихся детей отрабатывает теоретические навыки на практике. Будь то создание роботов или игр в 3D.</span>
                        </div>
                    </motion.div>

                    <motion.div className="plus"
                        variants={plusesAnimation}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
                        viewport={{ amount: 0.1}}
                        exit="hidden">
                        <img src={second} alt="" className="image-plus" />
                        <div className="plus-text-div">

                            <span className="plus-name">Участие в олимпиадах</span>
                            <span className="plus-description">У каждого ребенка будет возможность проявить себя в различных олимпиадах, за прохождение которых будут выдаваться сертификаты.</span>
                        </div>
                    </motion.div>

                    <motion.div className="plus"
                        variants={plusesAnimation}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
                        viewport={{ amount: 0.1}}>
                        <img src={third} alt="" className="image-plus" />
                        <div className="plus-text-div" id="plus-last">
                            <span className="plus-name">Профессиональные кураторы</span>
                            <span className="plus-description">Наши программы обучения разработаны высококвалифицированными экспертами, а лучшие педагоги помогут все понять с первого раза.</span>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Pluses;