import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../assets/img/DeliveryImg.png"
const DeliverySec = () => {
  return (
    <>
    <section className='DeliverySec'>
    <div class="container-fluid">
                <div className="row ">
                          <div className="img-part  col-12 col-sm-6 col-md-6">
                            <img src={img} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes"  loading="lazy" />
                          </div>
                          <div className="text-part  col-12 col-sm-6 col-md-6">
                          <h2 >Your <span> coffee</span> is on its way</h2>
                          <p className=" body-text ">Uber Eats and let your favorites come to you.</p>
                            <div className="ormadoBtn ">
                            <Link to="/Delivery"><button type="button" > Learn More</button></Link>
                            </div>
                          </div>
                        </div>
                </div>


    </section>
    </>
  )
}

export default DeliverySec