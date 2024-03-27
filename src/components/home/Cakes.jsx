import React from "react";
import waffle from "../../assets/img/waffle.jpg"
import sansebastian from "../../assets/img/sansebastian.jpg"
import croissant from "../../assets/img/croissant.jpg"
import cheesecake from "../../assets/img/cheesecake.jpg"

const Cakes = () => {
  return (
    <div>
      <section className="CakesSection">

        <div className="width-90">
            
          <h2 className="headText">
            Our Exclusive <span> Cakes </span>
          </h2>

          <div className="card-parts">

            <div className="row">
                <div className="col-6 col-lg-4 col-xl-3">
                    <div className="card mt-4 " >
                        <img src={waffle} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title cardHeadText">Waffle</h5>
{/*                             
                            <div className="card-bottom-part">
                            <p className="card-price">
                                $20.00
                            </p>
                            <a href="#" className="cardBtn btn btn-primary">
                                Taste now 
                            </a>
                            </div> */}
                        </div>                        
                    </div>
                </div>


                <div className="col-6 col-lg-4 col-xl-3">
                    <div className="card mt-4 " >
                        <img src={sansebastian}  className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title cardHeadText">San Sebastian </h5>
{/*                             
                            <div className="card-bottom-part">
                            <p className="card-price">
                                $20.00
                            </p>
                            <a href="#" className="cardBtn btn btn-primary">
                                Taste now 
                            </a>
                            </div> */}
                        </div>                        
                    </div>
                </div>

                <div className="col-6 col-lg-4 col-xl-3">
                    <div className="card mt-4 " >
                        <img src={croissant} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title cardHeadText">Croissant</h5>
{/*                             
                            <div className="card-bottom-part">
                            <p className="card-price">
                                $20.00
                            </p>
                            <a href="#" className="cardBtn btn btn-primary">
                                Taste now 
                            </a>
                            </div> */}
                        </div>                        
                    </div>
                </div>

                <div className="col-6 col-lg-4 col-xl-3">
                    <div className="card mt-4 " >
                        <img src={cheesecake} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title cardHeadText">Honey Cake</h5>
{/*                             
                            <div className="card-bottom-part">
                            <p className="card-price">
                                $20.00
                            </p>
                            <a href="#" className="cardBtn btn btn-primary">
                                Taste now 
                            </a>
                            </div> */}
                        </div>                        
                    </div>
                </div>
                
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default Cakes;