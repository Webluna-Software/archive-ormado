import React from "react";
import weare from "../assets/img/weareperfect.png";
import overlay from "../assets/img/overlay.png";
import { useContext } from "react";
import ApiLinkContext from "../context/ApiLinkContext";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import roasting1 from "../assets/img/roasting1.png";
import roasting2 from "../assets/img/roasting2.png";
import roasting3 from "../assets/img/roasting3.png";
import { Link } from "react-router-dom";
import PreLoader from "./PreLoader";
const OurStory = () => {
  const { ApiLink, ApiLink2 } = useContext(ApiLinkContext);
  const [about, setAbout] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(true);

  // NEW API
  const [mission, setMission] = useState([])  ;
  const [vision, setVision] = useState([])    ;
  const [great, setGreat] = useState([])      ;
  const [count,setCount] = useState([])       ;
  const [roasting,setRoasting] = useState([]) ;

  useEffect(() => {
    // About
    axios.get(`${ApiLink}/about`).then((res) => {
      setLoading(false);
      setAbout(res.data.data[0]);
    });

    // API ALL
    Promise.all([
      axios.get(`${ApiLink2}/mission`),
      axios.get(`${ApiLink2}/vision`),
      axios.get(`${ApiLink2}/greatThink`),
      axios.get(`${ApiLink2}/count`),
      axios.get(`${ApiLink2}/roastingHouse`)
    ]).then(([missonRes, visionRes, greatRes,countRes,roastingRes]) => {
      setLoading1(false);
      setMission(missonRes.data.data[0]);
      setVision(visionRes.data.data[0]);
      setGreat(greatRes.data.data[0]);
      setCount(countRes.data.data[0])
      setRoasting(roastingRes.data.data[0])
    });
  }, []);

  const iframeVideo = mission.videoUrl
    ? mission.videoUrl.replace("watch?v=", "embed/")
    : "";
console.log(great,"iframe");
  return (
    <>
      {loading || loading1 ? (
        <PreLoader />
      ) : (
        <section className="ourstory">
          <div className="container-fluid ">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
                <div className="desc">
                  <h3>{about.headerText}</h3>
                  <p dangerouslySetInnerHTML={{ __html: about.text }} />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
                <div className="ourstoryImg">
                  {/* style={{width:"659px",height:"332px"}} */}
                  <img src={about.image} alt="" className="img-fluid rounded" />
                </div>
              </div>
            </div>
          </div>
          <div className="roasting">
            <h3 className="ms-1">
              {roasting.title}
            </h3>
            <p className="ms-2" dangerouslySetInnerHTML={{__html:roasting.text}}/>
            <div className="container-fluid">
              <div className="row g-3">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
                  <img src={roasting.images} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div className="missionVision">
            <div className="container-fluid">
              <div className="row g-4">
                <div className="col-12  col-sm-4 ">
                  <div className="missonDesc">
                    <h3>{mission.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: mission.text }} />
                  </div>
                </div>
                <div className="col-12  col-sm-4  text-center">
                  <h1>&</h1>
                </div>
                <div className="col-12  col-sm-4 ">
                  <div className="visionDesc">
                    <h3>{vision.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: vision.text }} />
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
                    
                    <iframe
                      width="100%"
                      height="600px"
                      src="https://www.youtube.com/embed/GWIAwS09PpM?si=y8oA1wSGDkE_3Rb2"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-7 col-lg-7 ">
                  <div className="weAreDesc">
                    <h3>{great.title}</h3>
                    <p
                      className="pb-5"
                      dangerouslySetInnerHTML={{ __html: great.text }}
                    />
                  </div>
                  <div className="row">
                    <div className="col-6 col-sm-4 col-md-4 col-lg-4 ">
                      <div className="counter">
                        <h2>{count.count1}+</h2>
                        <p className="ms-2">{count.title1}</p>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-4 col-lg-4 ">
                      <div className="counter">
                        <h2>{count.count2}+</h2>
                        <p className="ms-2">{count.title2}</p>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-4 col-lg-4 ">
                      <div className="counter">
                        <h2>{count.count3}+</h2>
                        <p className="ms-2">{count.title3}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default OurStory;
