import Slider from "react-slick";
import { useContext, useEffect, useState } from "react";
import ApiLinkContext from "../../context/ApiLinkContext";
import axios from "axios";

const Clients = () => {
  const { ApiLink2 } = useContext(ApiLinkContext);
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`${ApiLink2}/ourClients`)
      .then((res) => {
        setPartners(res.data.data);
        setLoading(false);
        // console.log(res.data.data,"clients");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
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
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        <section className="clients mt-5">
          <div className="row">
            <div className="col-12">
              <div className="clients-text">
                <h3>Our Partners</h3>
                <span>
                  Our high-quality coffee beans attract priceless
                  collaborations.
                </span>
              </div>
              <div className="client-slider_container">
                <div className="row">
                  <Slider {...settings}>
                    {partners.map((partner) => (
                      <div className="col-12 col-md-2" key={partner._id}>
                        <div className="clients-img">
                          <img
                            src={partner.image}
                            alt="Partner image"
                            className="img-fluid"
                            style={{cursor:"pointer"}}
                            onClick={() => {
                              const targetLink =
                                !partner.url.startsWith("http://") &&
                                !partner.url.startsWith("https://")
                                  ? `https://${partner.url}`
                                  : partner.url;
                              window.open(targetLink, "_blank");
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Clients;
