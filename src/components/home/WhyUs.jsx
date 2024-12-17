import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import axios from "axios";
import ApiLinkContext from "../../context/ApiLinkContext";

const WhyUs = () => {
  const { ApiLink2 } = useContext(ApiLinkContext);
  const [whyus, setWhyUs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`${ApiLink2}/whyUs`)
      .then((res) => {
        setWhyUs(res.data.data[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  // const url = whyus.url && whyus.url.replace("watch?v=", "embed/");

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
  
  //Dahboardan elave tag ile gelen text ve desc qarsisini almaq ucun!
const stripHtmlTags = (html) => {
  return html.replace(/<\/?[^>]+(>|$)/g, "");
};
const decodeHtmlEntities = (text) => {
  const txt = document.createElement('textarea');
  txt.innerHTML = text;
  return txt.value;
};


  return (
    <>
      {loading ? (
        <p>loading</p>
      ) : (
        <section className="whyus">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="whyus-text">
                <h2>
                  WHY US <h1 className="ms-3">?</h1>
                </h2>
                {/* <span dangerouslySetInnerHTML={{ __html: whyus.text }} /> */}
                <span>{stripHtmlTags(decodeHtmlEntities(whyus.text ))}</span>
              </div>
            </div>
            <div className="col-12 col-md-7">
              <div className="position-relative">
              <iframe
                            width="100%"
                            height="400px"
                            src={getYoutubeEmbedUrl(whyus.url)}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                {/* <iframe
                  width="100%"
                  height={url ? "400px" : ""}
                  src={`${url}`}
                  title="YouTube video player"
                  // frameBorder="0"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe> */}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default WhyUs;
