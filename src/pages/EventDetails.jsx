import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import slugify from "slugify";
import { ApiLinkContext } from "../context/ApiLinkContext";
import PreLoader from "./PreLoader";
// import { Helmet } from "react-helmet";
import LazyLoad from "react-lazy-load";

const EventDetails = () => {
  const { eventTitle } = useParams();
  const [eventDetails, setEventDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { ApiLink2 } = useContext(ApiLinkContext);

  useEffect(() => {
    axios
      .get(`${ApiLink2}/event`)
      .then((res) => {
        const allEvents = res.data.data;
        const matchedEvent = allEvents.find(
          (event) => slugify(event.title, { lower: true }) === eventTitle
        );
        setEventDetails(matchedEvent);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching event detail:", err);
        setLoading(false);
      });
  }, [eventTitle, ApiLink2]);


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
    return "";
  };

  return (
    <>
      <section className="EventDetails">
        {loading ? (
          <PreLoader />
        ) : (
          <>
               <hr style={{ color: "orange", fontWeight: "bold" }} />
            <div className="container-fluid ">
              <div className="row">
                <div className="event-details">
                    <div className="event-title">
                        <h3>{eventDetails.title}</h3>
                    </div>
                <div className="event-img">
                            <LazyLoad>
                              <img
                                src={eventDetails.image}
                                alt={eventDetails.title}
                                className="img-fluid w-100"
                              />
                            </LazyLoad>
                          </div>
                        <div className="my-5 event-text">
                          <p
                            dangerouslySetInnerHTML={{
                              __html: eventDetails.desc,
                            }}
                          />
                        </div>
                        <div className=" event-video">
                          <iframe
                            width="100%"
                            height="400px"
                            src={getYoutubeEmbedUrl(eventDetails.video)}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                        </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default EventDetails;
