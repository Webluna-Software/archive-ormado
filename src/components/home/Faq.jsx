import React, { useState } from 'react';

const decodeHtmlEntities = (text) => {
  const txt = document.createElement('textarea');
  txt.innerHTML = text;
  return txt.value;
};

const stripHtmlTags = (html) => {
  return html.replace(/<\/?[^>]+(>|$)/g, "");
};

const Faq = ({ faqs }) => {
  const activeFaqs = faqs.filter((item) => item.active);
  const [openIndex, setOpenIndex] = useState(0); 

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      {activeFaqs.length > 0 && (
        <div className="Faqs">
          <div className="container1">
            <div className="Center">
              <div className="title">
                <div className="line"></div>
                <div className="upper">
                  <h5>FAQ</h5>
                </div>
              </div>

              <div className="question">
                <h1>
                  Questions ? <span>Look here</span>
                </h1>
              </div>

              <div className="accordion" id="accordionExample">
                {activeFaqs.map((item, i) => (
                  <AccordionItem
                    key={item._id}
                    index={i}
                    title={item.title}
                    text={item.text}
                    isOpen={openIndex === i} 
                    toggleAccordion={toggleAccordion}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const AccordionItem = ({ index, title, text, isOpen, toggleAccordion }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button    className={`custom-accordion-button ${isOpen ? 'open' : 'collapsed'}`}    type="button"    onClick={() => toggleAccordion(index)} >
          <h6 className="accordion-title">{title}</h6>
          <i    className={`accordion-icon fa-solid fa-chevron-right ${isOpen ? 'rotate' : ''}`} ></i>
        </button>
      </h2>
      <div className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`} data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <p className="lorem1">{stripHtmlTags(decodeHtmlEntities(text))}</p>
        </div>
      </div>
    </div>
  );
};



export default Faq;
