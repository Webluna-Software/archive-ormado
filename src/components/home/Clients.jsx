import Slider from "react-slick";
import removebg from '../../assets/img/removebg.png';

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
            <h3>Our Partners</h3>
            <span>Our high-quality coffee beans attract priceless collaborations.</span>
          </div>
          <div className="client-slider_container">
            <div className="row">
              <Slider {...settings}>
                <div className="col-12 col-md-2">
                  <div className="clients-img">
                    <img src='https://i0.wp.com/www.modest.coffee/wp-content/uploads/2018/02/la-marzocco-logo.png?fit=285%2C166&ssl=1' alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="col-12 col-md-2">
                  <div className="clients-img">
                    <img src='https://b2b.mallofberlin.de/wp-content/themes/dshg/images/logo-min.png' alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="col-12 col-md-2">
                  <div className="clients-img">
                    <img src='https://res.cloudinary.com/westfielddg/image/upload/westfield-media/de/retailer/logos/o8l8x0qb6xnjfstrqpll.png' alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="col-12 col-md-2">
                  <div className="clients-img">
                    <img src={removebg} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="col-12 col-md-2">
                  <div className="clients-img">
                    <img src='https://cdn.metro-online.com/-/media/Project/MCW/shared/Bucket-Header/METRO.svg?rev=-1&w=129&hash=DB804DB52AB628282509929F5704CC77' alt="" className="img-fluid" />
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
