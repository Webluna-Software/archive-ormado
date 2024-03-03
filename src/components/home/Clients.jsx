import Slider from "react-slick";
import client1 from "../../assets/img/client1.png";
import client2 from "../../assets/img/client2.png";
import client3 from "../../assets/img/client3.png";
import client4 from "../../assets/img/client4.png";
import client5 from "../../assets/img/client5.png";

const Clients = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 650,
        dots: true,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 450,
        dots: true,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 320,
        dots: true,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="clients mt-5">
      <div className="row">
        <div className="col-12">
          <div className="clients-text">
            <h3>Our Clients</h3>
            <span>Our high-quality coffee beans attract priceless collaborations.</span>
          </div>
          <div className="client-slider_container">
            <div className="row">
              <Slider {...settings}>
                <div className="col-12 col-md-2">
                  <div className="clients-img">
                    <img src={client1} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="col-12 col-md-2">
                  <div className="clients-img">
                    <img src={client2} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="col-12 col-md-2">
                  <div className="clients-img">
                    <img src={client3} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="col-12 col-md-2">
                  <div className="clients-img">
                    <img src={client4} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="col-12 col-md-2">
                  <div className="clients-img">
                    <img src={client5} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="col-12 col-md-2">
                  <div className="clients-img">
                    <img src={client3} alt="" className="img-fluid" />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
