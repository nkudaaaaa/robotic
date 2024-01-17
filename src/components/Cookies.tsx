
import { useState } from "react";
import cookie from "../assets/Heads/cookies.jpg"
import { motion } from "framer-motion";

const animation = {
    hidden: { y: "200%", },
    visible: { y: "0%", }
}


const CookiesInfo = () => {
    const [isActive, setIsActive] = useState<boolean>(true);

    return (
        <>  
                    { isActive && <div className="cookies-main"
                    >
                        <motion.div className="cookies"
                            variants={animation}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 1, type: 'spring', delay: 3 }}
                        >
                            <div className="cookies-text">
                                <h3 className="cookies-header">Сайт использует файлы Cookies</h3>
                                <p className="cookies-sign">Потому что без них ничего не работает :)</p>
                                <button type="submit" className="cookies-btn" onClick={() => setIsActive(false)}>Принять</button>
                            </div>
                            <img src={cookie} alt="cookies-img" className="cookies-img" />
                        </motion.div>
                    </div>}
        </>
    )
}

export default CookiesInfo;