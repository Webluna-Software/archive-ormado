import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ApiLinkContext from "../context/ApiLinkContext";
import Faq from "../components/home/Faq"
import Modal from "../components/modal/modal";
import LazyLoad from "react-lazy-load";
import { Helmet } from "react-helmet";

const Reserve = () => {
  const { ApiLink, ApiLink2 } = useContext(ApiLinkContext);
  const [reserv, setReserv] = useState([]);
  const [faqData,setFaqData] = useState([])
  const [fullName, setfullName] = useState();
  const [email, setemail] = useState();
  const [phone, setPhone] = useState();
  const [numbOfGuest, setnumbOfGuest] = useState();
  const [date, setdate] = useState();
  const [time, settime] = useState();
  const [branch, setbranch] = useState();
  const [remark, setremark] = useState();
  const [reserveType, setreserveType] = useState();
  // const [submissionStatus, setSubmissionStatus] = useState(null);
  // Validation
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [guestError, setGuestError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [timeError, setTimeError] = useState(false);
  const [branchError, setBranchError] = useState(false);
  const [remarkError, setRemarkError] = useState(false);

  //MODAL
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", body: "" });
  const [reloadOnClose, setReloadOnClose] = useState(true);

  useEffect(() => {
    Promise.all([
      axios.get(`${ApiLink2}/reservBanner`),
      axios.get(`${ApiLink2}/faqReservation`)
    ])
      .then(([bannerRes,faqRes]) => {
        const faqResData = faqRes.data.faqReservation ;
        setFaqData(faqResData) ;
        const reservData = bannerRes.data.reservBanner[0];
        setReserv(reservData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const ReservePost = (e) => {
    e.preventDefault();

    let isValid = true;

    const fieldCheck = [
      { value: fullName, setter: setNameError },
      { value: email, setter: setEmailError },
      { value: phone, setter: setPhoneError },
      { value: numbOfGuest, setter: setGuestError },
      { value: date, setter: setDateError },
      { value: time, setter: setTimeError },
      { value: branch, setter: setBranchError },
      { value: remark, setter: setRemarkError },
    ];

    fieldCheck.forEach((item) => {
      if (!item.value || item.value.trim() === "") {
        item.setter(true);
        isValid = false;
      } else {
        item.setter(false);
      }
    });

    if (isValid) {
      axios.post(`${ApiLink}/reserve`, {
          fullName: fullName,
          email: email,
          phone: phone,
          numbOfGuest: numbOfGuest,
          date: date,
          time: time,
          branch: branch,
          remark: remark,
          reserveType: reserveType,
        })
        .then((res) => {
          if (res.data.status == "success") {
            setShowModal(true);
            setModalContent({
              title: "Thank you!",
              body: "Your form has been submitted successfully!",
            });
            setReloadOnClose(true);
          }
        })
        .catch(() => {
          setModalContent({
            title: "Something went wrong!",
            body: "Something went wrong. Please try again.",
          });
          setShowModal(true);
          setReloadOnClose(true);
        });
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (reloadOnClose) {
      window.location.reload();
    }
  };

  const reserveTypeRadio = (value) => {
    return value == reserveType;
  };

  const handleKeyDown = (e) => {
    // Prevents user from entering a number below 5
    if (e.key === "Enter" || e.key === "Tab") {
      if (numbOfGuest < 6) {
        alert("The minimum number for a reservation is 6 people.");
        // setModalContent({
        //   title: "Attention!",
        //   body: "The minimum number for a reservation is 6 people."
        // });
        // setShowModal(true);
        // setReloadOnClose(false);
        e.preventDefault();
      }
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value < 6 && value !== "") {
      setGuestError(true);
      // alert("Attention!\nThe minimum number for a reservation is 6 people.");
      setModalContent({
        title: "Attention!",
        body: "The minimum number for a reservation is 6 people.",
      });
      setShowModal(true);
      setReloadOnClose(false);
    } else {
      setnumbOfGuest(value);
      setGuestError(false);
    }
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
  //   const value = e.target.value;
  //   const onlyNums = value.replace(/[^\d]/g, "");
  //   setphone(onlyNums);
  //   setPhoneError(false);
  // };

  const today = new Date();
  const twoWeeksLater = new Date();
  twoWeeksLater.setDate(today.getDate() + 14);

  const todayFormatted = today.toISOString().split("T")[0];
  const twoWeeksLaterFormatted = twoWeeksLater.toISOString().split("T")[0];

  return (
    <>
      <Helmet>
        <title>Reserve</title>
      </Helmet>
      <div className="reserve">
        {/* <div className="Reverse-title col-12 col-md-12 col-sm-12">
          <div className="first-card-img">
            <img
              className="img-fluid col-12 col-md-12 col-sm-12"
              src={reserv.image}
              alt="reserve image"
              id="bannerImg"
            />
          </div>
        </div> */}
        <div className="reserve-form-header">
          <div className="reserve-header-text">
            <h1>{reserv.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: reserv.text }} />
          </div>
        </div>
        <div className="reserve-form">
          <div className="reserve-part1">
            <LazyLoad>
              <img className="reserve-img" src={reserv.leftImage} alt={reserv.title} />
            </LazyLoad>
          </div>
          <div className="reserve-part2">
            <div className="reserve-part2-main">
              <div className="reserve-part-header">
                <h1>Reserve a table</h1>
              </div>
              <form onSubmit={ReservePost} className="reserve-inputs">
                <div className="reserve-text ">
                  <div className="reserve-text-main">
                    <div className="textInput">
                      <input
                        type="radio"
                        id="reserve-radio"
                        checked={reserveTypeRadio("event")}
                        name="reserve-radio"
                        value="event"
                        onClick={(e) => setreserveType(e.target.value)}
                      />
                      <label htmlFor="reserve-radio">
                        {" "}
                        <p>For the event</p>{" "}
                      </label>
                    </div>
                    <div className="textInput">
                      <input
                        type="radio"
                        id="reserve-radio2"
                        checked={reserveTypeRadio("friends")}
                        name="reserve-radio"
                        value="friends"
                        onClick={(e) => setreserveType(e.target.value)}
                      />
                      <label htmlFor="reserve-radio2">
                        {" "}
                        <p>For a meeting with friends</p>{" "}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="reserve-inputs-main">
                  <div className="reserve-part1">
                    <div className="reserve-input-text">
                      <label htmlFor="name">
                        <p>
                          Full name<span>*</span>
                        </p>
                      </label>
                    </div>
                    <div className="reserve-input">
                      <input
                        id="name"
                        placeholder="Jon Doe"
                        type="text"
                        className={`${nameError ? "invalid" : ""}`}
                        onChange={(e) => {
                          setfullName(e.target.value);
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
                  <div className="reserve-part2">
                    <div className="reserve-input-text">
                      <label htmlFor="email">
                        <p>
                          Email address<span>*</span>
                        </p>
                      </label>
                    </div>
                    <div className="reserve-input">
                      <input
                        id="email"
                        placeholder="example@gmail.com"
                        type="email"
                        className={`${emailError ? "invalid" : ""}`}
                        onChange={(e) => {
                          setemail(e.target.value);
                          setEmailError(false);
                        }}
                      />
                      {emailError && (
                        <span className="invalid_message">
                          Please enter a valid email address to proceed.
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="reserve-inputs-main">
                  <div className="reserve-part1">
                    <div className="reserve-input-text">
                      <label htmlFor="phone">
                        <p>
                          Phone Number<span>*</span>
                        </p>
                      </label>
                    </div>
                    <div className="reserve-input">
                      <input
                        id="phone"
                        className={`${phoneError ? "invalid" : ""}`}
                        placeholder="Enter your number"
                        type="tel"
                        value={phone}
                        onChange={handlePhoneChange}
                      />
                      {phoneError && (
                        <span className="invalid_message">
                          Telephone number is required.
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="reserve-part2">
                    <div className="reserve-input-text">
                      <label htmlFor="number">
                        <p>
                          Number of guest<span>*</span>
                        </p>
                      </label>
                    </div>
                    <div className="reserve-input">
                      <input
                        id="number"
                        placeholder="5+"
                        type="number"
                        className={`${guestError ? "invalid" : ""}`}
                        min={5}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                      />
                      {guestError && (
                        <span className="invalid_message">
                          The number of guests must be mentioned.
                        </span>
                      )}
                      {/* {
                        numbOfGuest < 5 && (
                          <div className="alert alert-warning mt-2" role="alert">
                            <strong> Attention!</strong>The minimum number for a reservation is 5 people.
                          </div>
                        )
                      } */}
                    </div>
                  </div>
                </div>
                <div className="reserve-inputs-main">
                  <div className="reserve-part1">
                    <div className="reserve-input-text">
                      <label htmlFor="date">
                        <p>
                          Date<span>*</span>
                        </p>
                      </label>
                    </div>
                    <div className="reserve-input">
                      <input
                        type="date"
                        value={date}
                        className={`${dateError ? "invalid" : ""}`}
                        onChange={(e) => {
                          setdate(e.target.value);
                          setDateError(false);
                        }}
                        min={todayFormatted}
                        max={twoWeeksLaterFormatted}
                      />
                      {dateError && (
                        <span className="invalid_message">
                          Date is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="reserve-part2">
                    <div className="reserve-input-text">
                      <label htmlFor="time">
                        <p>
                          Time<span>*</span>
                        </p>
                      </label>
                    </div>
                    <div className="reserve-input">
                      <input
                        id="time"
                        className={`${timeError ? "invalid" : ""}`}
                        placeholder="00:00"
                        type="time"
                        onChange={(e) => {
                          settime(e.target.value);
                          setTimeError(false);
                        }}
                      />
                      {timeError && (
                        <span className="invalid_message">
                          Time is required
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="reserve-inputs-main">
                  <div className="reserve-part1">
                    <div className="reserve-input-text">
                      <label htmlFor="branch">
                        <p>
                          Branch<span>*</span>
                        </p>
                      </label>
                    </div>
                    <div className="reserve-input">
                      <select
                        name="branch"
                        id="branch"
                        defaultValue=""
                        className={`round ${branchError ? "invalid" : ""}`}
                        onChange={(e) => {
                          setbranch(e.target.value);
                          setBranchError(false);
                        }}
                      >
                        <option
                          style={{ fontWeight: "bold" }}
                          value=""
                          disabled
                          hidden
                        >
                          Select
                        </option>
                        <option value="Einbecker Str. 18, 10317 Berlin, Germany">
                          Einbecker Str. 18, 10317 Berlin, Germany
                        </option>
                        <option value="Leipziger Pl. 12, 10117 Berlin, Germany">
                          Leipziger Pl. 12, 10117 Berlin, Germany
                        </option>
                        <option value="Ibn Battuta Mall 120، Premises Number IBS-GF - Dubai - United Arab Emirates">
                          Ibn Battuta Mall 120، Premises Number IBS-GF - Dubai -
                          United Arab Emirates
                        </option>
                        <option value="23B Yusif Mammadaliyev St, Baku 1005">
                          23B Yusif Mammadaliyev St, Baku 1005
                        </option>
                        <option value="Zefir Mall, Baku">
                          Zefir Mall, Baku
                        </option>
                        <option value="Spyrydonivs'ka St, 2, Odessa, Odes'ka oblast, Ukraine, 65000">
                          Spyrydonivs&apos;ka St, 2, Odessa, Odes&apos;ka
                          oblast, Ukraine, 65000
                        </option>
                      </select>
                      {branchError && (
                        <span className="invalid_message">
                          Branch is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="reserve-part2">
                    <div className="reserve-input-text">
                      <label htmlFor="remarks">
                        <p>Additional remarks</p>
                      </label>
                    </div>
                    <div className="reserve-input">
                      <input
                        id="remarks"
                        placeholder="If you have any special requests, please note them."
                        type="text"
                        className={`${remarkError ? "invalid" : ""}`}
                        onChange={(e) => {
                          setremark(e.target.value);
                          setRemarkError(false);
                        }}
                      />
                      {remarkError && (
                        <span className="invalid_message">
                          Additional remarks is required
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="reserve-btn mt-4">
                  <button
                    type="submit"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    {" "}
                    <p>Reserve</p>
                  </button>
                  {/* <button
                    type="submit"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <p>Reserve</p>
                  </button> */}
                </div>

                {/* {submissionStatus === "success" && (
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            Thank you!
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          Your form has been submitted successfully!
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* {submissionStatus === "error" && (
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            Ups sorry!
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          Something went wrong. Please try again.
                        </div>
                      </div>
                    </div>
                  </div>
                )} */}
              </form>

              {/* <div className="btn-form-modal">
                    <div className={`modal fade ${showModal ? 'show' : ''}`} tabIndex={-1} role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                           <div className="modal-header">
                            <h5 className="modal-title">Thank you!</h5>
                            <button type="button" 
                              onClick={() => {
                              window.location.reload()
                              setShowModal(false)
                              }}
                              // eslint-disable-next-line react/no-unknown-property
                              className="btn-close" data- bs-dismiss="modal" aria-label="Close">
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
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        title={modalContent.title}
        body={modalContent.body}
      />
      <Faq faqs={faqData}/>
    </>
  );
};

export default Reserve;
