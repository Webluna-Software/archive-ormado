import React from 'react'
import img from "../assets/img/pngwing1.png"
import img2 from "../assets/img/Rectangle13.png"
const KSM = () => {
  return (
    <>
    <section className='KSM'>
        <div className="section-banner">
        <div class="container">
                        <div className="row flex-lg-row-reverse align-items-center ">
                          <div className="col-10 col-sm-8 col-lg-6">
                            <img src={img} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
                          </div>
                          <div className="col-lg-6">
                          <h2 >Enjoy your  <span>coffee </span>   <span>before</span> your activity</h2>
                            <p className="lead body-text ">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                          </div>
                        </div>
                    </div>
        </div>
        <section className='section-main'>
            <div className="container">
                <div className="row">
                    <div className="card-main col-12 ">
                        <div className="card-image">
                            <img src={img2} className=" img-fluid" alt="Bootstrap Themes" loading="lazy" />
                        </div>
                        <div className="card-body">
                            <p className='body-title'>Integer Maecenas Eget Viverra</p>
                            <p className="lead body-text ">Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim.</p>
                        </div>
                    </div>
                    <div className="card-main col-12 ">
                        <div className="card-image">
                            <img src={img2} className=" img-fluid" alt="Bootstrap Themes" loading="lazy" />
                        </div>
                        <div className="card-body">
                            <p className='body-title'>Integer Maecenas Eget Viverra</p>
                            <p className="lead body-text ">Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim.</p>
                        </div>
                    </div>
               </div>
            </div>
        </section>
    </section>
    </>
  )
}

export default KSM