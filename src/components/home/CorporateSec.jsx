import React from 'react'
import img from "../../assets/img/pngwing1.png"
import { useNavigate } from 'react-router-dom'

const CorporateSec = () => {
  const navigate = useNavigate();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    navigate("/CorporateSocialResponsibility");
  };
  

  return (
    <>
    <section className='csr-section '>
    <div class="container-fluid">
                <div className="row  ">
                          <div className=" img-part col-12 col-sm-6  col-md-6  ">
                            <img src={img} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
                          </div>
                          <div className=" text-part col-12 col-sm-6 col-md-6 ">
                          <h2 >Enjoy your  <span>coffee </span>   <span>before</span> your activity</h2>
                          <p className=" body-text ">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
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

export default CorporateSec