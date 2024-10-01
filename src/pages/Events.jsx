import { useContext, useState, useEffect } from "react";
import { ApiLinkContext } from "../context/ApiLinkContext";
import axios from "axios";
import PreLoader from "./PreLoader";
import { Helmet } from "react-helmet";

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

  // YouTube video linkini embed formata çevirmək üçün helper funksiya
  const getYoutubeEmbedUrl = (url) => {
    let videoId = null;

    if (url.includes("youtu.be")) {
      videoId = url.split("youtu.be/")[1].split("?")[0];
    } else if (url.includes("youtube.com")) {
      const params = new URLSearchParams(url.split("?")[1]);
      videoId = params.get("v");
    }

    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return ""; // Düzgün URL deyilsə boş qaytarır
  };

  return (
    <>
      <Helmet>
        <title>Event</title>
      </Helmet>
      <section className="eventPage">
        <div className="container">
          <div className="Event-title col-12 col-md-12 col-sm-12">
            <div className="first-card-img">
              <img
                className="img-fluid col-12 col-md-12 col-sm-12"
                src={reserv.image}
                alt="eventImage"
              />
            </div>
          </div>
          <div className="row">
            <div className="blogs mt-5">
              <div className="cardsBlogs row m-0 ">
                {event.map((item, i) => (
                  <div className="blogcard col-12 col-md-4 col-lg-3" key={i}>
                    <div className="card-header">
                      <p className="p-title">{item.title}</p>
                      <figure>
                        {item.video ? (
                          item.video.includes("youtube.com") || item.video.includes("youtu.be") ? (
                            <iframe
                              width="100%"
                              height="315"
                              src={getYoutubeEmbedUrl(item.video)}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              title={item.title}
                            ></iframe>
                          ) : (
                            <video
                              src={item.video}
                              controls
                              width="100%"
                              poster={item.image}
                            />
                          )
                        ) : (
                          <p>Video mövcud deyil</p>
                        )}
                      </figure>
                      <p
                        className="p-body-text"
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
