import { useContext, useState, useEffect } from "react";
import { ApiLinkContext } from "../context/ApiLinkContext";
import axios from "axios";
import PreLoader from "./PreLoader";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import slugify from "slugify";
import LazyLoad from "react-lazy-load";

const Events = () => {
  const [event, setEvent] = useState([]);
  const [reserv, setReserv] = useState([]);
  const [loading, setLoading] = useState(true);
  const { ApiLink2 } = useContext(ApiLinkContext);

  useEffect(() => {
    Promise.all([
      axios.get(`${ApiLink2}/reservBanner`),
      axios.get(`${ApiLink2}/event`),
    ])
      .then(([bannerRes, res]) => {
        const eventData = res.data.data;
        console.log("Event data:", eventData);
        setEvent(eventData);

        const reservData = bannerRes.data.reservBanner[0];
        setReserv(reservData);

        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching data:", err);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <section className="eventsPage">
      <div className="Reverse-title col-12 col-md-12 col-sm-12">
          <div className="first-card-img">
            <img
              className="img-fluid col-12 col-md-12 col-sm-12"
              src={reserv.image}
            />
          </div>
        </div>
        <div className="container">
          {loading ? (
            <PreLoader />
          ) : (
            <>
              <Helmet>
                <title>Events</title>
              </Helmet>
              <div className="row m-0 justify-content-start">
                <div className="events">
                  <div className="title">
                    <h3>Events</h3>
                  </div>
                  <div className="cardsEvents row m-0 ">
                  {event.map((event, index) => (
                    <div
                      className="eventcard col-12 col-md-4 col-lg-3"
                      key={index}
                    >
                      <LazyLoad>
                        <Link
                          to={`/eventDetails/${slugify(
                            event.title
                          ).toLowerCase()}`}
                          style={{ color: "#000" }}
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' }); 
                          }}
                        >
                          <figure>
                            <img src={event.image} alt={event.title} />
                          </figure>
                          <div className="card-header">
                            <p className="p-title">{event.title}</p>
                            <p
                              className="p-body-text"
                              dangerouslySetInnerHTML={{ __html: event.desc }}
                            />
                            <p className="p-body-read">
                              <span> Read more</span>
                            </p>
                          </div>
                        </Link>
                      </LazyLoad>
                    </div>
                  ))}
                </div>
                </div>

              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Events;
