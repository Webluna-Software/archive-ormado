import React, { useContext, useEffect, useState } from "react";
import ApiLinkContext from "../../context/ApiLinkContext";
import axios from "axios";

const Faq = () => {
  const { ApiLink } = useContext(ApiLinkContext);

  const [faq, setFaq] = useState([]);

  useEffect(() => {
    axios
      .get(`${ApiLink}/faq`)
      .then((res) => {
        setFaq(res.data.data);
        console.log(res.data.data, "Faq Context Success");
      })
      .catch((error) => {
        console.error("Error fetching faq data:", error);
      });
  }, []);

  return (
    <>
      <section className="Faqs mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <div className="title">
                <div className="upper">
                  <h3>FAQ</h3>
                </div>
              </div>
              <div className="question">
                <h1>Questions</h1>
                <h3> ? </h3>
                <span>Look here.</span>
              </div>
              <div className="accordion " id="accordionExample">
                {faq.map((item, i) => {
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
                          <h6>{item.title}</h6>
                        </button>
                      </h2>
                      <div
                        id={`collapse${i}`}
                        className={`accordion-collapse collapse ${
                          i == 0 ? "show" : ""
                        } `}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="lorem1 "> {item.text} </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="Faqs">
      <div className="container1">
        <div className="Center">
          <div className="title">
            <div className="line"></div>
            <div className="upper">  <h5>FAQ</h5></div>
          </div>
          <div className="question">
            <h1>Questions </h1>
            <h3> ? </h3>
            <span className="lookHere">Look here</span>
          </div>

        </div>
      </div>
    </section> */}
    </>
  );
};

export default Faq;
