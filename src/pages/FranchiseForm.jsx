import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiLinkContext from "../context/ApiLinkContext";
import axios from "axios";

import Modal from "../components/modal/modal";

const FranchiseForm = () => {
  const { ApiLink2 } = useContext(ApiLinkContext);
  const [img,setImg] = useState([])
  useEffect(() => {
    axios.get(`${ApiLink2}/franchiseForm`).then((res) => {
      setImg(res.data.data[0])
    });
  });

  const [fullname, setfullName] = useState();
  const [email, setemail] = useState();
  const [phone, setPhone] = useState();
  const [city, setcity] = useState();
  const [country, setcountry] = useState();
  // const [submissionStatus, setSubmissionStatus] = useState(null);

  //MODAL
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", body: "" });

  // VALIDATION
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [countryError, setCountryError] = useState(false);

  // const [showModal, setShowModal] = useState(false);
  // const [showErrorModal, setShowErrorModal] = useState(false);

  const fromPost = (e) => {
    e.preventDefault();
    let isValid = true;

    const fieldCheck = [
      { value: fullname, error: setNameError },
      { value: email, error: setEmailError },
      { value: phone, error: setPhoneError },
      { value: city, error: setCityError },
      { value: country, error: setCountryError },
    ];

    fieldCheck.forEach((item) => {
      if (!item.value || item.value.trim() === "") {
        item.error(true);
        isValid = false;
      } else {
        item.error(false);
      }
    });

    if (isValid) {
      axios.post(`${ApiLink2}/franchiseForm`, {
          fullname: fullname,
          email: email,
          phone: phone,
          city: city,
          country: country,
        })
        .then((res) => {
          if (res.data.status == "success") {
            setModalContent({
              title: "Thank you!",
              body: "Your form has been submitted successfully!",
            });
            setShowModal(true);
          }
        })
        .catch(() => {
          setModalContent({
            title: "Something went wrong!",
            body: "Something went wrong. Please try again.",
          });
          setShowModal(true);
        });
    }
  };
  const handleCloseModal = () => {
    setShowModal(false);
    window.location.reload();
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); 
    if (value && !value.startsWith("+")) {
      value = "+" + value; 
    }
    setPhone(value); 
    setPhoneError(false);
  };
  
  // const handlePhoneChange = (e) => {
  //   const value = e.target.value.replace(/\D/g, "");
  //   setphone(value);
  //   setPhoneError(false);
  // };

  

  return (
    <>
      <div className="franchiseform">
        <div className="franchiseform-part1">
          <img
            className="franchiseform-img"
            src={img.image}
            alt="Franchise Image"
          />
        </div>
        <div className="franchiseform-part2">
          <div className="franchiseform-part2-main">
            <div className="franchiseform-part-header">
              <h1>
                ORMADO
                <br /> KAFFEEHAUS <br /> <span>FRANCHISE</span>{" "}
              </h1>
            </div>
            <form onSubmit={fromPost} className="franchiseform-inputs">
              <div className="franchiseform-input-text">
                <label htmlFor="name">
                  <p>
                    Full name<span>*</span>
                  </p>
                </label>
              </div>
              <div className="franchiseform-input">
                <input
                  id="name"
                  placeholder="Jon Doe"
                  type="text"
                  onChange={(e) => {
                    setfullName(e.target.value);
                    setNameError(false);
                  }}
                />
              </div>
              {nameError && (
                <span className="invalid_message">Full name is required</span>
              )}

              <div className="franchiseform-input-text">
                <label htmlFor="email">
                  <p>
                    Email address<span>*</span>
                  </p>
                </label>
              </div>
              <div className="franchiseform-input">
                <input
                  id="email"
                  placeholder="example@gmail.com"
                  type="text"
                  onChange={(e) => {
                    setemail(e.target.value);
                    setEmailError(false);
                  }}
                />
              </div>
              {emailError && (
                <span className="invalid_message">
                  Email address is required
                </span>
              )}
              <div className="franchiseform-input-text">
                <label htmlFor="phone">
                  <p>
                    Phone<span>*</span>
                  </p>
                </label>
              </div>
              <div className="franchiseform-input">
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="Enter your number"
                  // onChange={(e) => {
                  //   setphone(e.target.value)
                  //   setPhoneError(false)
                  // }}
                />
              </div>
              {phoneError && (
                <span className="invalid_message">Phone is required</span>
              )}


             {/* bunlar yeni inputdu */}
              <div className="franchiseform-input-text">
                <label htmlFor="phone">
                  <p>
                    Additional Information
                  </p>
                </label>
              </div>
              <div className="franchiseform-input">
                <input
                  id="phone"
                  type="text"
                  placeholder="Enter your number"
                />
              </div>

              <div className="franchiseform-input-text">
                <label htmlFor="phone">
                  <p>
                    What do you personally expect from a partnershop ? 
                  </p>
                </label>
              </div>
              <div className="franchiseform-input">
                <input
                  id="phone"
                  type="text"
                  placeholder="Enter your number"
                />
              </div>

              <div className="franchiseform-input-text">
                <label htmlFor="phone">
                  <p>
                    What makes you the perfect Ormado Kaffehaus franchisee? 
                  </p>
                </label>
              </div>
              <div className="franchiseform-input">
                <input
                  id="phone"
                  type="text"
                  placeholder="Enter your number"
                />
              </div>

              <div className="franchiseform-input-text">
                <label htmlFor="phone">
                  <p>
                    Why did you choose our Ormado Kaffehaus coffee house franchisee? 
                  </p>
                </label>
              </div>
              <div className="franchiseform-input">
                <input
                  id="phone"
                  type="text"
                  placeholder="Enter your number"
                />
              </div>

              {/* burda yeni input bitdi */}


 
              <div className="franchiseform-country-city">
                <div className="franchiseform-country">
                  <div className="franchiseform-input-text">
                    <label htmlFor="country">
                      <p>
                        County<span>*</span>
                      </p>
                    </label>
                  </div>
                  <div className="franchiseform-input">
                    <input
                      id="country"
                      placeholder="Faroe Islands"
                      type="text"
                      onChange={(e) => {
                        setcountry(e.target.value);
                        setCountryError(false);
                      }}
                    />
                    {countryError && (
                      <span className="invalid_message">
                        Country is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="franchiseform-city">
                  <div className="franchiseform-input-text">
                    <label htmlFor="city">
                      <p>
                        City<span>*</span>
                      </p>
                    </label>
                  </div>
                  <div className="franchiseform-input">
                    <input
                      id="city"
                      placeholder="Redlands"
                      type="text"
                      onChange={(e) => {
                        setcity(e.target.value);
                        setCityError(false);
                      }}
                    />
                    {cityError && (
                      <span className="invalid_message">City is required</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="franchiseform-text">
                <p>
                  Your personal data will be used to process your enquiry,
                  support your experience throughout this website, and for other
                  purposes described in our
                  <Link className="franchiseform-link">Privacy policy.</Link>
                </p>
                <p>
                  Yes, please send me franchising opportunitiesBy checking this
                  box you will receive franchising opportunities from Retail
                  Food Group across all of our franchise brands via email. You
                  can unsubscribe at any time.
                </p>
              </div>
              <div className="franchiseform-btn mb-2">
                <button
                  type="submit"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <p>Submit</p>
                </button>
              </div>
            </form>

            {/* <div className="btn-form-modal">
              <div
                className={`modal fade ${showModal ? "show" : ""}`}
                tabIndex={-1}
                role="dialog"
                style={{ display: showModal ? "block" : "none" }}
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Thank you!</h5>
                      <button
                        type="button"
                        onClick={() => {
                          window.location.reload();
                          setShowModal(false);
                        }}
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <p>Your form has been submitted successfully!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="btn-form-modal">
                    <div className={`modal fade ${showErrorModal ? 'show' : ''}`} tabIndex={-1} role="dialog" style={{ display: showErrorModal ? 'block' : 'none' }}>
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                           <div className="modal-header">
                            <h5 className="modal-title">Something went wrong!</h5>
                            <button type="button" 
                              onClick={() => {
                              window.location.reload()
                              setShowErrorModal(false)
                              }}
                              className="btn-close" data- bs-dismiss="modal" aria-label="Close">
                            </button>
                          </div>
                          <div className="modal-body">
                            <p>Something went wrong. Please try again.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
          </div>
        </div>
      </div>

      <Modal
        show={showModal}
        onClose={handleCloseModal}
        title={modalContent.title}
        body={modalContent.body}
      />
    </>
  );
};

export default FranchiseForm;
