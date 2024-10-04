import { useState } from "react";
// import whyus from "../../assets/img/why.png";
// import ytlogo from "../../assets/img/ytlogo.png";
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

  const url = whyus.url && whyus.url.replace("watch?v=", "embed/");
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
                <span dangerouslySetInnerHTML={{ __html: whyus.text }} />
              </div>
            </div>
            <div className="col-12 col-md-7">
              <div className="position-relative">
                <iframe
                  width="100%"
                  height={url ? "400px" : ""}
                  src={`${url}`}
                  title="YouTube video player"
                  // frameBorder="0"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default WhyUs;
