import React, { useState } from 'react';
import Coffee1 from "../../assets/img/image 6.png";
import Coffee2 from "../../assets/img/Rectangle 174.png";
import Modal from '../modal/modal';
import { useNavigate } from 'react-router-dom';

const YourFavoriteCoffee = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); 
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false); 
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', body: '' });

  const handleOptionClick = (option) => {
   // Qeydiyyatdan keçməni yoxlayırıq
    // if (!isRegistered) {
    //     setModalContent({ title: "Qeydiyyatdan keçin", body: "Xahiş edirik, davam etmədən əvvəl qeydiyyatdan keçin!" });
    //     setShowModal(true);
    //     return;
    // }
    setSelectedOptions({ ...selectedOptions, [step]: option });
    if (step < 4) {
      setStep(step + 1);
    } else {
      submitToBackend();
    }
  };

  const handleRegistration = () => {
    setShowRegistrationModal(false);
    navigate('/login');
  };

  const submitToBackend = () => {
    const payload = { favoriteCoffee: selectedOptions };
    console.log('YourFavoriteCoffee:', payload);
  };

  return (
    <>
      <section className='YourFavoriteCoffee my-5'>
        <div className="coffee-beans color-1"></div>
        <div className="coffee-beans color-2"></div>
        <div className="coffee-beans bean-1"></div>
        <div className="coffee-beans bean-2"></div>
        <div className="coffee-beans bean-3"></div>
        <div className="coffee-beans bean-4"></div>
        <div className="container-fluid">
          <div className="row">
            <h2>Südlü kofe sevirsiniz?</h2>
            <div className="favorite-coffee-section">
              <div className="coffee-options">
                {step === 1 && (
                  <div className="option-click">
                    <div className="option-main" onClick={() => handleOptionClick('Südlü')}>
                      <figure><img src={Coffee1} alt="Südlü Coffee" /></figure>
                      <p>Südlü</p>
                    </div>
                    <div className="option-main" onClick={() => handleOptionClick('Südsüz')}>
                      <figure><img src={Coffee2} alt="Südsüz Coffee" /></figure>
                      <p>Südsüz</p>
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div className="option-click">
                    <div className="option-main" onClick={() => handleOptionClick('Soyuq')}>
                      <figure><img src={Coffee1} alt="Soyuq Coffee" /></figure>
                      <p>Soyuq</p>
                    </div>
                    <div className="option-main" onClick={() => handleOptionClick('İsti')}>
                      <figure><img src={Coffee2} alt="İsti Coffee" /></figure>
                      <p>İsti</p>
                    </div>
                  </div>
                )}
                {step === 3 && (
                  <div className="option-click">
                    <div className="option-main" onClick={() => handleOptionClick('Şirin')}>
                      <figure><img src={Coffee1} alt="Şirin Coffee" /></figure>
                      <p>Şirin</p>
                    </div>
                    <div className="option-main" onClick={() => handleOptionClick('Acı')}>
                      <figure><img src={Coffee2} alt="Acı Coffee" /></figure>
                      <p>Acı</p>
                    </div>
                  </div>
                )}
                {step === 4 && (
                  <div className="option-click">
                    <div className="option-main" onClick={() => handleOptionClick('Güclü')}>
                      <figure><img src={Coffee1} alt="Güclü Coffee" /></figure>
                      <p>Güclü</p>
                    </div>
                    <div className="option-main" onClick={() => handleOptionClick('Zəif')}>
                      <figure><img src={Coffee2} alt="Zəif Coffee" /></figure>
                      <p>Zəif</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="step-indicators">
                <span className={step === 1 ? 'active' : ''}>1</span>
                <span className={step === 2 ? 'active' : ''}>2</span>
                <span className={step === 3 ? 'active' : ''}>3</span>
                <span className={step === 4 ? 'active' : ''}>4</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal show={showModal} onClose={() => setShowModal(false)} title={modalContent.title} body={modalContent.body} showLoginButton={true}/>
    </>
  );
};

export default YourFavoriteCoffee;
