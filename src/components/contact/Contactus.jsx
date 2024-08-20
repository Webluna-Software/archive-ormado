import { useContext, useState } from "react";
import ApiLinkContext from "../../context/ApiLinkContext";
import axios from "axios";

import Modal from "../modal/modal";
import { useEffect } from "react";

const Contactus = () => {
  const { ApiLink2 } = useContext(ApiLinkContext);
  const [leftSec,setLeftSec] = useState([]);
  // const [faqContact,setFaqContact] = useState([]) ;
  const [fullName, setFullName] = useState();
  const [email, setemail] = useState();
  const [number, setnumber] = useState();
  const [country, setcountry] = useState();
  const [companyName, setcompanyName] = useState();
  const [interestedIn, setinterestedIn] = useState();
  const [message, setmessage] = useState();

  //MODAL
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", body: "" });

  // VALIDATION
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [companyError, setCompanyError] = useState(false);
  const [interestError, setInterestError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  useEffect(()=>{
    Promise.all([
      axios.get(`${ApiLink2}/leftSection`),
    ])
    .then(([leftRes])=>{
      const leftData = leftRes.data.leftSection[0] ;
      setLeftSec(leftData)
    })
  },[])


  const ContactPost = (e) => {
    e.preventDefault();
    let isValid = true;
    const formCheck = [
      { value: fullName, setter: setNameError },
      { value: email, setter: setEmailError },
      { value: number, setter: setNumberError },
      { value: country, setter: setCountryError },
      { value: companyName, setter: setCompanyError },
      { value: interestedIn, setter: setInterestError },
      { value: message, setter: setMessageError },
    ];

    formCheck.forEach((fd) => {
      if (!fd.value || fd.value.trim() === "") {
        fd.setter(true);
        isValid = false;
      } else {
        isValid = true;
      }
    });

    if (isValid) {
      axios
        .post(`${ApiLink2}/admin/contactForm`, {
          fullName: fullName,
          email: email,
          number: number,
          country: country,
          companyName: companyName,
          interestedIn: interestedIn,
          message: message,
        })
        .then((res) => {
          if (res.data.status === "success") {
            setShowModal(true);
            setModalContent({
              title: "Thank you!",
              body: "Your form has been submitted successfully!",
            });
          }
        })
        .catch((err) => {
          console.log(err);
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
    setnumber(value);
    setNumberError(false);
  };
  
  // const handlePhoneChange = (e) => {
  //   const value = e.target.value.replace(/\D/g, "");
  //   setnumber(value);
  //   setNumberError(false);
  // };
  return (
    <>
      <div className="Contactus">
        <div className="boxcontainer">
          <div className="container">
            <div className="row">
              <div className=" col-12  col-lg-6  leftside">
                <div className="conbox">
                  <div className="middle">
                    <h1>
                     {leftSec.title}
                    </h1>
                  </div>

                  <div className="loremone">
                    <div className="first">
                      <h6 className="col-10" dangerouslySetInnerHTML={{__html:leftSec.text}}/>
                    </div>
                    {/* <div className="second">
                      <h6 className="col-10">
                        Your feedback matters, and we&apos;re eager to make your
                        experience with Ormado Kaffeehaus exceptional. Contact
                        us now!
                      </h6>
                    </div>
                    <br /> <br />
                    <div className="text text-white">
                      <p>Connecting Through Coffee, One Message at a Time</p>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* <div className=" col-12 col-sm-8 col-md-8 rightside "> */}
              <div className=" col-12  col-lg-6  rightside">
                <form onSubmit={ContactPost}>
                  <div className="inner">
                    <div className="container">
                      <div className="titlebox">
                        <p>Contact Us</p>
                      </div>

                      <div className="row inputRow justify-content-center">
                        <div className="col-11 col-sm-6 col-md-6 col-lg-6">
                          <div className="inputbox">
                            <label htmlFor="">
                              Full name <span>*</span>
                            </label>
                            <input
                              placeholder="Jon Doe"
                              className={`myinput ${
                                nameError ? "invalid" : ""
                              }`}
                              type="text"
                              onChange={(e) => {
                                setFullName(e.target.value);
                                setNameError(false);
                              }}
                            />
                            {nameError && (
                              <span className="invalid_message">
                                Full name is required
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="col-11 col-sm-6 col-md-6 col-lg-6">
                          <div className="inputbox">
                            <label htmlFor="">
                              Email address<span>*</span>
                            </label>
                            <input
                              placeholder="example@gmail.com"
                              className={`myinput ${
                                emailError ? "invalid" : ""
                              }`}
                              type="email"
                              onChange={(e) => {
                                setemail(e.target.value);
                                setEmailError(false);
                              }}
                            />
                            {emailError && (
                              <span className="invalid_message">
                                Email address is required
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="col-11 col-sm-6 col-md-6 col-lg-6">
                          <div className="inputbox">
                            <label htmlFor="">
                              Country/Region<span>*</span>
                            </label>
                            <select
                              onChange={(e) => {
                                setcountry(e.target.value);
                                setCountryError(false);
                              }}
                              defaultValue=""
                              className={`mySelected ${
                                countryError ? "invalid" : ""
                              }`}
                            >
                              <option
                                style={{ color: "#a19fa1" }}
                                value=""
                                disabled
                                hidden
                              >
                                Select :
                              </option>
                              <option value="Germany">Germany</option>
                              <option value="Azerbaijan">Azerbaijan</option>
                              <option value="Ukraine">Ukraine</option>
                              <option value="UAE">UAE</option>
                            </select>
                            {countryError && (
                              <span className="invalid_message">
                                Country/Region is required
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="col-11 col-sm-6 col-md-6 col-lg-6">
                          <div className="inputbox">
                            <label htmlFor="">
                              Phone<span>*</span>
                            </label>
                            <input
                              placeholder="Enter your number"
                              className={`myinput ${
                                numberError ? "invalid" : ""
                              }`}
                              type="tel"
                              value={ number}
                              onChange={handlePhoneChange}
                              // onChange={(e) => {
                              //   setnumber(e.target.value);
                              //   setNumberError(false);
                              // }}
                            />
                            {numberError && (
                              <span className="invalid_message">
                                Phone is required
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="col-11 col-sm-6 col-md-6 col-lg-6">
                          <div className="inputbox">
                            <label htmlFor="">Company Name</label>
                            <input
                              placeholder="50098 Cordia Key"
                              className={`myinput ${
                                companyError ? "invalid" : ""
                              }`}
                              type="text"
                              onChange={(e) => {
                                setcompanyName(e.target.value);
                                setCompanyError(false);
                              }}
                            />
                            {companyError && (
                              <span className="invalid_message">
                                Company name is required
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="col-11 col-sm-6 col-md-6 col-lg-6">
                          <div className="inputbox">
                            <label htmlFor="">Subject</label>
                            <input
                              placeholder="Enter subject"
                              className={`myinput ${
                                interestError ? "invalid" : ""
                              }`}
                              type="text"
                              onChange={(e) => {
                                setinterestedIn(e.target.value);
                                setInterestError(false);
                              }}
                            />
                            {interestError && (
                              <span className="invalid_message">
                                Subject is required
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="col-11 col-sm-12 col-md-12  ">
                          <label htmlFor="floatingTextarea">Message</label>
                          <div className="form-floating">
                            <textarea
                              className={`form-control textArea ${
                                messageError ? "invalid" : ""
                              }`}
                              placeholder="Write message...."
                              id="floatingTextarea"
                              type="text"
                              onChange={(e) => {
                                setmessage(e.target.value);
                                setMessageError(false);
                              }}
                            ></textarea>
                            <label htmlFor="floatingTextarea">Message</label>
                            {messageError && (
                              <span className="invalid_message">
                                Message is required
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="col-12 btnsubmit my-3">
                          <button
                            type="submit"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>

                {/* 
              <div className="btn-form-modal">
                    <div className={`modal fade ${showModal ? 'show' : ''}`} tabIndex={-1} role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                           <div className="modal-header">
                            <h5 className="modal-title">Thank you !</h5>
                            <button type="button" 
                              onClick={() => {
                              window.location.reload()
                              setShowModal(false)
                              }}
                              className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            </button>
                          </div>
                          <div className="modal-body">
                            <p>Your form has been submitted successfully!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
              </div>
            </div>
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

export default Contactus;
