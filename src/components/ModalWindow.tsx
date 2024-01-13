import "../css/ModalWindow.css"
import React, { useState, ChangeEvent, useEffect, useRef } from 'react';
import { motion, useAnimation } from "framer-motion";
import SMSValidation from "./SMSValidation";


interface LessonRegistrationModalProps {
  onClose: () => void;
  selectedDirection: string;
  isVisible: boolean;
  info: {name: string, phone: string};
}


const ModalWindow: React.FC<LessonRegistrationModalProps> = ({ onClose, selectedDirection, isVisible, info }) => {
  const initialDir = selectedDirection;

  const [name, setName] = useState<string>(info.name);
  const [surname, setSurname] = useState<string>('');
  console.log(info);
  
  const [phoneNumber, setPhoneNumber] = useState<string>(info.phone)
  const [selected, setSelected] = useState(initialDir);

  const [isActive, setIsActive] = useState(false);

  const [isModalFirstVisible, setIsModalFirstVisible] = useState(isVisible);

  const inputRefs = useRef<HTMLInputElement | null>(null);

  const options = ["Робототехника", "Программирование", "Разработка игр", "Подготовка к ОГЭ (математика)", "Подготовка к ОГЭ (информатика)", "Проведение праздников"];

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);

  };

  const handleSurNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSurname(e.target.value);
  };

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value)
    setPhoneNumber(formatted);
  };

  const controls = useAnimation();

  const animateForm = () => {
    setIsModalFirstVisible(false);
    controls.start({ x: -400, opacity: 0, transition: { duration: 0.5 } });
  };


  const formatPhone = (value: string) => {
    if (!value) return value;

    let phoneNumber = value.replace(/[^\d+]/g, '');

    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength === 1 && phoneNumber !== "+") {
      phoneNumber = `+7 ${phoneNumber}`;
    }

    if (phoneNumberLength < 6) {
      return `${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2)})`;
    }

    if (phoneNumberLength < 8) {
      return `${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2, 5)})-${phoneNumber.slice(5)}`;
    }
    if (phoneNumberLength < 10) {
      return `${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2, 5)})-${phoneNumber.slice(5, 8)}-${phoneNumber.slice(8)}`
    }

    return `${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2, 5)})-${phoneNumber.slice(5, 8)}-${phoneNumber.slice(8, 10)}-${phoneNumber.slice(10, 12)}`;
  };

  interface data {
    name: string;
    surname: string,
    phone: string,
    direction: string;
  }

  const formDataPostFromInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      formDataPost()
    }
  }


  const formDataPost = () => {
    const url = 'http://localhost:8080/post';

    const dataToSend: data = {
      name,
      surname,
      phone: phoneNumber,
      direction: selected
    }

    if (name === "" || surname === "" || phoneNumber === "") {
      alert("Вы не заполнили все поля!")
      return;
    }
    if (phoneNumber.length !== 18) {
      alert("Вы не заполнили правильно номер телефона ")
      return;
    }
    console.log('Отправляемые данные:', JSON.stringify(dataToSend));
    
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(dataToSend),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response;
    })
    .then(responseData => {
        animateForm();
        console.log('Успешно отправлено и получено:', responseData);
        return responseData;
      })
      .catch(error => {
        console.error('Ошибка при отправке данных:', error);
        throw error;
      });
    
  }


  useEffect(() => {

    document.body.classList.add('modal-open');
      inputRefs.current?.focus();

    return () => {
      document.body.classList.remove('modal-open');
      
    };
  }, []);

  return (
    <motion.div className="modal-overlay" onClick={onClose}>
      <motion.div className="modal" onClick={(e) => e.stopPropagation()}>
        {isModalFirstVisible && <motion.div className="modal-first" animate={controls}>
          <span className="modal-main-sign">Заполните форму для записи на интересующее направление</span>
          <div className="inputs">
            <input type="text" value={name} onChange={handleNameChange} className="input-field" placeholder="Имя" ref={inputRefs}/>
            <input type="text" value={surname} onChange={handleSurNameChange} className="input-field" placeholder="Фамилия" />
            <input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} className="input-field" placeholder="Телефон" required onKeyDown={formDataPostFromInput}/>
            <div className="dropdown-form">
              <div className="dropdown-form-btn" onClick={() => setIsActive(!isActive)}>
                {selected}
                <span className="fas fa-caret-down"></span>
              </div>
              {isActive && (
                <div className="dropdown-form-content">
                  {options.map((option) => (
                    <div
                      onClick={() => {
                        setSelected(option);
                        setIsActive(false);
                      }}
                      className="dropdown-form-item"
                    >
                      {option}
                    </div>
                  ))}
                </div>

              )}
            </div>
            <button onClick={formDataPost} className="signup" id="form-btn">Записаться</button>
          </div>
        </motion.div>}
        
        {!isModalFirstVisible && <SMSValidation phone={phoneNumber.slice(13)} onClose={onClose} />
        }

      </motion.div>
    </motion.div>
  );
};
export default ModalWindow;




