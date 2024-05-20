import  { useContext,useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from "axios";
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import 'swiper/css/effect-fade';
import { ApiLinkContext } from '../../context/ApiLinkContext';
import { Link } from 'react-router-dom';

const OrmadoKaffehaus = () => {

const {ApiLink} = useContext(ApiLinkContext);

const [slider , setSlider]=useState([]);

useEffect(() => {
  axios.get(`${ApiLink}/slider`)
    .then((res) => {
      setSlider(res.data.data);
      console.log(res.data.data, "Slider Context Success");
    })
    .catch((error) => {
      console.error("Error fetching slider data:", error);
    });
}, []);


  return (
    <>
      <section className="OrmadoKaffehaus">
        <div className="container-fluid">
          <div className="row">
            <div className="OrmadoKaffehausAll">
            <div className="OrmadoKaffehausText   col-12 col-sm-4 col-md-4 col-lg-5  swiperCol">
                <div className="d-flex justify-content-center align-items-center "  style={{ height: "70vh" }}>
                  <div className="ormadoBox">
                    <div className="ormadoText">
                      <div className="ormadoTitle">
                        <h2>  ORMADO <span>KAFFEEHAUS</span> </h2>
                      </div>
                      <div className="ormadoDesc">
                        <p>
                        Ormado Kaffeehaus is a global brand originating from Germany. Our journey began in Berlin in 2017, and since then, we have expanded our business model to cities like Baku, Odessa, and Dubai. Through rigorous testing and refinement, we have identified successful strategies, products, and services tailored to each location. Ormado Kaffeehaus provides franchise opportunities for partners, with branches in Azerbaijan, Germany, Ukraine, and the UAE operating under the franchise model.
                        </p>
                      </div>
                      <div className="ormadoBtn">
                        <button>
                          <Link to="/about">Learn more</Link>
                        </button>
                      </div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="OrmadoKaffehausSwiper col-12 col-sm-12 col-md-8 col-lg-7">
                <div className="d-flex justify-content-end ">
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{
                      delay: Infinity,
                      disableOnInteraction: false,
                    }}
                    speed={2500}
                    className="swiperMobile"
                  >
                  {slider.map((fd,i) => (
                      <SwiperSlide   key={i}>
                        <div className="d-flex justify-content-end swiperImgBox ">
                          <div className="imagesfluid">
                            <img src={fd.image[0]} alt="swiperimage" className=" imgSwiperCoffe"/> 
                          </div>
                          <div className="swiperOpacity">
                            <div className="swiperMobileContainer" style={{ display: "block" }}>   
                              <div className="ormadoTitle">
                                <h2>ORMADO <span>KAFFEEHAUS</span> </h2>
                              </div>
                              <div className="ormadoDesc">
                                <p>
                                  Ormado Kaffeehaus is a global brand originating from Germany. Our journey began in Berlin in 2017, and since then, we have expanded our business model to cities like Baku, Odessa, and Dubai. Through rigorous testing and refinement, we have identified successful strategies, products, and services tailored to each location. Ormado Kaffeehaus provides franchise opportunities for partners, with branches in Azerbaijan, Germany, Ukraine, and the UAE operating under the franchise model.
                                </p>
                              </div>                   
                              <div className="ormadoBtn">
                                <button>
                                  <Link to="/about">Learn more</Link>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}

          
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OrmadoKaffehaus