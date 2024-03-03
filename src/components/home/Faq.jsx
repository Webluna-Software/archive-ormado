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
        <div className="container-fluid">
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
              <div className="container-fluid mt-4">
                <div class="accordion" id="accordionExample">
                  {faq.map((item, i) => (
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseTwo${i}`} aria-expanded="false" aria-controls="collapseTwo">
                          {item.title}
                        </button>
                      </h2>
                      <div id={`collapseTwo${i}`} class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          {item.text}
                        </div>
                      </div>
                    </div>))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </>
  );
};

export default Faq;
