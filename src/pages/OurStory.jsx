import { useContext, useEffect, useState } from "react";
import ApiLinkContext from "../context/ApiLinkContext";
import axios from "axios";
import PreLoader from "./PreLoader";
import LazyLoad from "react-lazy-load";
import { Helmet } from "react-helmet";
import Faq from "../components/home/Faq";

//Dahboardan elave tag ile gelen text ve desc qarsisini almaq ucun!
const stripHtmlTags = (html) => {
  return html.replace(/<\/?[^>]+(>|$)/g, "");
};
const decodeHtmlEntities = (text) => {
  const txt = document.createElement('textarea');
  txt.innerHTML = text;
  return txt.value;
};


const OurStory = () => {
  const { ApiLink2 } = useContext(ApiLinkContext);
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(true);

  // NEW API
  const [ourStory, setOurStory] = useState([]);
  const [mission, setMission] = useState([]);
  const [vision, setVision] = useState([]);
  const [greatThink, setGreatThink] = useState([]);
  const [count, setCount] = useState([]);
  const [roastingHouse, setRoastingHouse] = useState([]);
  const [faqOurstory, setFaqOurstory] = useState([]);

  useEffect(() => {
    // About
    axios.get(`${ApiLink2}/ourStory`).then((res) => {
      setLoading(false);
      setOurStory(res.data.data);
      // console.log(res.data.data, "OurStory ");
    });
    // API ALL
    Promise.all([
      axios.get(`${ApiLink2}/ourStory`),
      axios.get(`${ApiLink2}/mission`),
      axios.get(`${ApiLink2}/vision`),
      axios.get(`${ApiLink2}/greatThink`),
      axios.get(`${ApiLink2}/count`),
      axios.get(`${ApiLink2}/roastingHouse`),
      axios.get(`${ApiLink2}/faqOurstory`),
    ])
      .then(
        ([
          ourStory,
          missionRes,
          visionRes,
          greatRes,
          countRes,
          roastingRes,
          faqOurstoryRes,
        ]) => {
          setLoading1(false);
          setOurStory(ourStory.data.data);
          // console.log(ourStory.data.data, "ourStory");
          setMission(missionRes.data.data);
          // console.log(missionRes.data.data, "Mission");
          setVision(visionRes.data.data);
          // console.log(visionRes.data.data, "Vision");
          setGreatThink(greatRes.data.data);
          // console.log(greatRes.data.data, "GreatThink");
          setCount(countRes.data.data);
          // console.log(countRes.data.data, "Count");
          setRoastingHouse(roastingRes.data.data);
          // console.log(roastingRes.data.data, "roastingHouse");
          setFaqOurstory(faqOurstoryRes.data.data);
          // console.log(faqOurstoryRes.data.data, "FaqOurstory");
        }
      )
      .catch((error) => {
        console.error("Failed to fetch data:", error);
        setLoading1(false);
      });
  }, [ApiLink2]);

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
      {loading || loading1 ? (
        <PreLoader />
      ) : (
        <>
          <Helmet>
            <title>Our story</title>
          </Helmet>
          <section className="ourstory">
            <div className="container-fluid ">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
                  <div className="desc">
                    <h3>{ourStory[0].title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: ourStory[0].text }} />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
                  <div className="ourstoryImg">
                    {/* style={{width:"659px",height:"332px"}} */}
                    <img
                      src={ourStory[0].image}
                      alt={ourStory[0].title}
                      className="img-fluid rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="roasting">
              <h3 className="ms-1">{roastingHouse[0].title} </h3>
              <p
                className="ms-2"
                dangerouslySetInnerHTML={{ __html: roastingHouse[0].text }}
              />
              <div className="container-fluid">
                <div className="row g-3 ">
                  {roastingHouse[0].images.map((image, index) => (
                    <div
                      key={index}
                      className="roasting-img col-12 col-sm-6 col-md-4 col-lg-4"
                    >
                      <LazyLoad>
                        <img
                          src={image}
                          alt={`Roasting image ${index + 1}`}
                          className="img-fluid"
                        />
                      </LazyLoad>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="missionVision">
              <div className="container-fluid">
                <div className="row g-4">
                  <div className="col-12  col-sm-4 ">
                    <div className="missonDesc">
                      <h3>{mission[0].title}</h3>
                      <p>{stripHtmlTags(decodeHtmlEntities(mission[0].text ))}</p>
                      {/* <p dangerouslySetInnerHTML={{ __html: mission[0].text }}/> */}
                    </div>
                  </div>
                  <div className="col-12  col-sm-4  text-center">
                    <h1>&</h1>
                  </div>
                  <div className="col-12  col-sm-4 ">
                    <div className="visionDesc">
                      <h3>{vision[0].title}</h3>
                      {/* <p dangerouslySetInnerHTML={{ __html: vision[0].text }} /> */}
                      <p>{stripHtmlTags(decodeHtmlEntities(vision[0].text ))}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="weareperfect">
              <div className="container-fluid">
                <div className="row g-3">
                  <div className="col-12 col-sm-12 col-md-5 col-lg-5 ">
                    <div className="imgBox">
                      {greatThink[0].videoUrl ? (
                        greatThink[0].videoUrl.includes("youtube.com") ||
                        greatThink[0].videoUrl.includes("youtu.be") ? (
                          <iframe
                            width="100%"
                            height="315"
                            src={getYoutubeEmbedUrl(greatThink[0].videoUrl)}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={greatThink[0].title}
                          ></iframe>
                        ) : (
                          <video
                            src={greatThink[0].videoUrl}
                            controls
                            width="100%"
                            poster={greatThink[0].image}
                          />
                        )
                      ) : (
                        <p>Video not available</p>
                      )}
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-7 col-lg-7 ">
                    <div className="weAreDesc">
                      <h3>{greatThink[0].title}</h3>
                      <p
                        className="pb-5"
                        dangerouslySetInnerHTML={{ __html: greatThink[0].text }}
                      />
                    </div>
                    <div className="row">
                      <div className="col-6 col-sm-4 col-md-4 col-lg-4 ">
                        <div className="counter">
                          <h2>{count[0].count1}+</h2>
                          <p className="ms-2">{count[0].title1}</p>
                        </div>
                      </div>
                      <div className="col-6 col-sm-4 col-md-4 col-lg-4 ">
                        <div className="counter">
                          <h2>{count[0].count2}+</h2>
                          <p className="ms-2">{count[0].title2}</p>
                        </div>
                      </div>
                      <div className="col-6 col-sm-4 col-md-4 col-lg-4 ">
                        <div className="counter">
                          <h2>{count[0].count3}+</h2>
                          <p className="ms-2">{count[0].title3}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Faq faqs={faqOurstory} />
        </>
      )}
    </>
  );
};

export default OurStory;
