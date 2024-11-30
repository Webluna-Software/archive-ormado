import  { useContext, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ApiLinkContext } from "../../context/ApiLinkContext";
import enjoyImage from "../../assets/img/Rectangle 7.png";
import axios from "axios";
import { Link } from "react-router-dom";

const EnjoyOurCoffee = () => {
  
  const { ApiLink } = useContext(ApiLinkContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${ApiLink}/product`).then((res) => {
      setProducts(res.data.products);
      console.log(res.data.products, "Products Context Success");
    });
  }, []);

  return (
    <>
      <section className="EnjoyOurCoffee">
        <div className="container-fluid">
          <div className="row">
            <div className="EnjoyOurCoffeeAll">
              <div className="EnjoyOurCoffeePart1 col-12  col-md-6 col-lg-5">
                <div className="EnjoyOurCoffeeImage">
                  <img
                    src={enjoyImage}
                    alt="EnjoyOurCoffeeImage"
                    className="img-fluid "
                  />
                </div>
              </div>
              <div className="EnjoyOurCoffeePart2 col-12 col-sm-12 col-md-6 col-lg-7 px-lg-5">
                <div className="ourcoffe ">
                  <p className="subtitle">Our Coffee</p>
                  <h2>Enjoy a new blend of coffee style</h2>
                  <p className="body-text">
                    It is best to start your day with a cup of coffee. Discover
                    the best flavour coffee you will ever have. We provide the
                    best for our customers.
                  </p>
                </div>
                <div className="getsomeoffer">
                  <p className="subtitle">Get Some Offer</p>
                  <p className="body-text">Offers valid for a limited time</p>
                </div>
                <div className="product">
                  <div className="learnmore">
                    <div className="learnbutton">
                  <Link to="/products"><div className="button"> Learn More</div></Link>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          opacity="0.5"
                          d="M4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75V11.25ZM4 12.75H20V11.25H4V12.75Z"
                          fill="#D59729"
                        />
                        <path
                          d="M14 6L20 12L14 18"
                          stroke="#D59729"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="cards">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={1}
                      // loop={true}
                      autoplay={{
                        delay: Infinity,
                        disableOnInteraction: false,
                      }}
                      speed={2500}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Autoplay, Pagination, Navigation]}
                      className="businessHour-swiper"
                      breakpoints={{
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 10,
                        },
                        480: {
                          slidesPerView: 2,
                          spaceBetween: 10,
                        },
                        650: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                        830: {
                          slidesPerView: 2,
                          spaceBetween: 10,
                        },
                        1024: {
                          slidesPerView: 2,
                          spaceBetween: 10,
                        },
                        1100: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                        1300: {
                          slidesPerView: 4,
                          spaceBetween: 10,
                        },
                      }}
                    >
                      {products.map((i) => (
                        <SwiperSlide key={i._id}>
                          <div className="swiper" id="swiper-2">
                            <div className="swiper-wrapper justify-content-center">
                              <div className="card">
                                <div className="disc">
                                  {/* <div className="discount">
                                    <span> %130 Off</span>
                                  </div> */}
                                </div>
                                <div className="imagefluid">
                                  <img src={i.coverImage} alt="energy_drink" />
                                </div>
                                <p className="name text-center">{i.title}</p>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="learn-button">
                    <Link to="/products"  className="btn">Learn more</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnjoyOurCoffee;
