import React from 'react'
import {  useNavigate } from 'react-router-dom'
import img from "../../assets/img/DeliveryImg.png"

const GiftCardSec = () => {
  const navigate = useNavigate();
  
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    navigate("/GiftCard");
  };

  return (
    <>
    <section className='GiftCardSec'>
      <div className="container-fluid">
        <div className="row ">
          <div className="img-part col-12 col-sm-6 col-md-6 ">
            <img src={img} className="d-block mx-lg-auto img-fluid" alt="Banner Image"  loading="lazy" />
          </div>
          <div className="text-part col-12 col-sm-6  col-md-6">
            <h2 >Your <span> coffee</span> is on its way</h2>
            <p className=" body-text ">Uber Eats and let your favorites come to you.</p>
              <div className="ormadoBtn ">
              <button type="button" onClick={handleScrollToTop}>Learn More</button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    </>
  )
}

export default GiftCardSec