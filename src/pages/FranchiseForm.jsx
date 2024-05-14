import { useContext, useEffect, useState } from "react";
import frenchiseFormimg from "../assets/img/FranchiseForm.png";
import { Link } from "react-router-dom";
import ApiLinkContext from "../context/ApiLinkContext";
import axios from "axios";

const FranchiseForm = () => {
  const { ApiLink } = useContext(ApiLinkContext);
  useEffect(() => {
    axios.get(`${ApiLink}/franchiseForm`).then((res) => {
      console.log(res.data, "FranchiseForm");
    });
  });
  const [fullName, setfullName] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  const [city, setcity] = useState();
  const [country, setcountry] = useState();
  // const [submissionStatus, setSubmissionStatus] = useState(null);

  // VALIDATION
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [countryError, setCountryError] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const fromPost = (e) => {
    e.preventDefault();
    let isValid = true;

    const fieldCheck = [
      { value: fullName, error: setNameError },
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
      axios
        .post(`${ApiLink}/franchiseForm`, {
          fullName: fullName,
          email: email,
          phone: phone,
          city: city,
          country: country,
        })
        .then((res) => {
          if (res.data.status == "success") {
            setShowModal(true);
          }
        })
        .catch(() => {
          setShowErrorModal(true);
        });
    }
  };

  return (
    <>
      <div className="franchiseform">
        <div className="franchiseform-part1">
          <img
            className="franchiseform-img"
            src={frenchiseFormimg}
            alt="error"
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
                  onChange={(e) =>{
                    setemail(e.target.value)
                    setEmailError(false)
                  }}
                />
              </div>
              {emailError && (
                <span className="invalid_message">Email address is required</span>
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
                  placeholder="+994"
                  type="tel"
                  onChange={(e) => {
                    setphone(e.target.value)
                    setPhoneError(false)
                  }}
                />
              </div>
              {phoneError && (
                <span className="invalid_message">Phone is required</span>
              )}
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
                      onChange={(e) =>{
                        setcountry(e.target.value)
                        setCountryError(false)
                      }}
                    />
                    {
                      countryError && (
                        <span className="invalid_message">Country is required</span>
                      )
                    }
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
                      onChange={(e) =>{
                        setcity(e.target.value)
                        setCityError(false)
                      }}
                    />
                    {
                      cityError && (
                        <span className="invalid_message">City is required</span>
                      )
                    }
                  </div>
                </div>
              </div>
              <div className="franchiseform-text">
                <p>
                  Your personal data will be used to process your enquiry,
                  support your experience throughout this website, and for other
                  purposes described in our{" "}
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

            <div className="btn-form-modal">
              <div
                className={`modal fade ${showModal ? "show" : ""}`}
                tabIndex={-1}
                role="dialog"
                style={{ display: showModal ? "block" : "none" }}
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Thank you !</h5>
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
            </div>
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
    </>
  );
};

export default FranchiseForm;
