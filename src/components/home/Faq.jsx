import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import ApiLinkContext from "../../context/ApiLinkContext";
// import { FaqContext } from "../context/FaqContext";

const Faq = () => {
  // const [faq] = useContext(FaqContext);

  const {ApiLink}=useContext(ApiLinkContext)

  const [faqApi, setFaqApi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {

    axios.get(`${ApiLink}/faq`,)
      .then((res) => {
        console.log(res.data.data,"FAQS");
        setFaqApi(res.data.data);
        setLoading(false);
      })

      .catch(() => {
        setLoading(false);
        setError(true);

      })

  }, [])

  return (
    <div className="Faqs">
      <div className="container1">
        <div className="Center">
          <div className="title">
            <div className="line"></div>
            <div className="upper">
              <h5>FAQ</h5>
            </div>
          </div>

          <div className="question">
            <h1>
              Questions ? <span>Look here</span>
            </h1>
          </div>

          <div className="accordion " id="accordionExample">
            {faqApi.map((item, i) => {
              return (
                <div className="accordion-item" id={`first${i}`}>
                  <h2 className="accordion-header">
                    <button
                      id={i}
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${i}`}
                      aria-expanded="false"
                      aria-controls={`collapse${i}`}
                    >
                      <h6> {item.title} </h6>
                    </button>
                  </h2>
                  <div
                    id={`collapse${i}`}
                    className={`accordion-collapse collapse ${
                      i == 0 ? "show" : ""
                    } `}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body  ">
                      <p className="lorem1 "> {item.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
