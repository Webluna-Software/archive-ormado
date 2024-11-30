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


  const apiData = [
    {
      step: 1,
      options: [
        { id: 1, label: 'Südlü', image: Coffee1 },
        { id: 2, label: 'Südsüz', image: Coffee2 },
      ],
    },
    {
      step: 2,
      options: [
        { id: 3, label: 'Soyuq', image: Coffee1 },
        { id: 4, label: 'İsti', image: Coffee2 },
      ],
    },
    {
      step: 3,
      options: [
        { id: 5, label: 'Şirin', image: Coffee1 },
        { id: 6, label: 'Acı', image: Coffee2 },
      ],
    },
    {
      step: 4,
      options: [
        { id: 7, label: 'Güclü', image: Coffee1 },
        { id: 8, label: 'Zəif', image: Coffee2 },
      ],
    },
  ];

  const handleOptionClick = (option) => {
    // Qeydiyyatdan keçməni yoxlayırıq
    // if (!isRegistered) {
    //     setModalContent({ title: "Qeydiyyatdan keçin", body: "Xahiş edirik, davam etmədən əvvəl qeydiyyatdan keçin!" });
    //     setShowModal(true);
    //     return;
    // }
    setSelectedOptions({ ...selectedOptions, [step]: option });
    if (step < apiData.length) {
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
                {apiData[step - 1].options.map(option => (
                  <div className="option-click" key={option.id}>
                    <div className="option-main" onClick={() => handleOptionClick(option.label)}>
                      <figure><img src={option.image} alt={option.label} /></figure>
                      <p>{option.label}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="step-indicators">
                {apiData.map((_, index) => (
                  <span key={index} className={step === index + 1 ? 'active' : ''}>{index + 1}</span>
                ))}
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
