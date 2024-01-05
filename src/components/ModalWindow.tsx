import "../css/ModalWindow.css"
import React, { useState, ChangeEvent, useEffect } from 'react';

interface LessonRegistrationModalProps {
    onClose: () => void;
  }
  
const ModalWindow: React.FC<LessonRegistrationModalProps> = ({ onClose }) => {
    const [name, setName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
  
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    };
  
    const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
      setPhoneNumber(e.target.value);
    };
  
    const handleSubmit = () => {
      // Обработка данных
      console.log('Имя:', name);
      console.log('Номер телефона:', phoneNumber);
      onClose();
    };

    useEffect(() => {
        // Блокируем прокрутку
        document.body.classList.add('modal-open');
    
        // Очищаем все эффекты при размонтировании компонента
        return () => {
          // Разблокируем прокрутку при закрытии модального окна
          document.body.classList.remove('modal-open');
        };
      }, []);
  
    return (
      <div className="modal-overlay">
        <div className="modal">
          <h2>Запись на урок</h2>
          <button className="close-button" onClick={onClose}>✖</button>
          <div className="inputs">
            <label>
              Имя:
              <input type="text" value={name} onChange={handleNameChange} className="input-field" />
            </label>
          </div>
          <div className="inputs">
            <label>
              Номер телефона:
              <input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} className="input-field" />
            </label>
          </div>
          <button onClick={handleSubmit} className="submit-button">Записаться</button>
        </div>
      </div>
    );
};

export default ModalWindow;