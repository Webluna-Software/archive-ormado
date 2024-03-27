import React, { useContext, useEffect, useState } from "react";
import background from "../assets/img/reservation-banner.png";
import card from "../assets/img/Rectangle.png";
import img from "../assets/img/reservation-form.jpg";
import axios from "axios";
import ApiLinkContext from "../context/ApiLinkContext";

const Reserve = () => {
  const { ApiLink } = useContext(ApiLinkContext);
  const [fullName, setfullName] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  const [numbOfGuest, setnumbOfGuest] = useState();
  const [date, setdate] = useState();
  const [time, settime] = useState();
  const [branch, setbranch] = useState();
  const [remark, setremark] = useState();
  const [reserveType, setreserveType] = useState();
  const [submissionStatus, setSubmissionStatus] = useState(null);
  // Validation
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError,setPhoneError] = useState(false)
  const [guestError,setGuestError] = useState(false)
  const [dateError,setDateError] = useState(false)
  const [timeError,setTimeError] = useState(false)
  const [branchError,setBranchError] = useState(false)
  const [remarkError,setRemarkError] = useState(false)

  useEffect(() => {
    axios.get(`${ApiLink}/reserve`).then((res) => {
      console.log(res.data, "ReserveForm");
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
      { value: branch, setter: setBranchError},
      { value: remark, setter: setRemarkError},
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
      axios
        .post(`${ApiLink}/reserve`, {
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
          console.log(res.data, "Reserve Form");
          setSubmissionStatus("success");
        })
        .catch((err) => {
          console.log(err);
          setSubmissionStatus("error");
        });
    }
  };

  const reserveTypeRadio = (value) => {
    return value == reserveType;
  };

  const handleKeyDown = (e) => {
    if (
      !(
        !(e.key >= "0" && e.key <= "9") ||
        e.key === "Backspace" ||
        e.key === "Delete"
      )
    ) {
      e.preventDefault();
    }
  };
  return (
    <>
      <div className="reserve">
        <div className="Reverse-title col-12 col-md-12 col-sm-12">
          <div className="first-card-img">
            <img
              className="img-fluid col-12 col-md-12 col-sm-12"
              src={card}
              alt=""
            />
          </div>
          <img className="background img-fluid" src={background} alt="" />
          <div className="firtst-card-title text-white"></div>
        </div>
        <div className="reserve-form-header">
          <div className="reserve-header-text">
            <h1>Reservation</h1>
            <p>
              Planning ahead with a reservation allows our team at Ormado
              Kaffeehaus to tailor your experience, ensuring everything is set
              for your event, from seating arrangements to personalized service,
              making your visit memorable.
            </p>
          </div>
        </div>
        <div className="reserve-form">
          <div className="reserve-part1">
            <img className="reserve-img" src={img} alt="error" />
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
                      <label for="reserve-radio">
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
                      <label for="reserve-radio2">
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
                          Email address is required
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
                          Phone<span>*</span>
                        </p>
                      </label>
                    </div>
                    <div className="reserve-input">
                      <input
                        id="phone"
                        className={`${phoneError ? "invalid" : ""}`}
                        placeholder="+994 55 604 52 08"
                        type="tel"
                        onChange={(e) =>{
                          setphone(e.target.value)
                          setPhoneError(false)
                        }}
                      />
                      {
                        phoneError && (
                          <span className="invalid_message">
                            Phone is required
                          </span>
                        )
                      }
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
                        onChange={(e) => {
                          setnumbOfGuest(e.target.value)
                          setGuestError(false)
                        }}
                        onKeyDown={handleKeyDown}
                      />
                      {
                        guestError && (
                          <span className="invalid_message">
                            Number of guest is required
                          </span>
                        )
                      }
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
                          setdate(e.target.value)
                          setDateError(false)
                        }}
                      />
                      {
                        dateError && (
                          <span className="invalid_message">Date is required</span>
                        )
                      }
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
                        onChange={(e) =>{
                          settime(e.target.value)
                          setTimeError(false)
                        }}
                      />
                      {
                        timeError && (
                          <span className="invalid_message">Time is required</span>
                        )
                      }
                    </div>
                  </div>
                </div>
                <div className="reserve-inputs-main">
                  <div className="reserve-part1">
                    <div className="reserve-input-text">
                      <label htmlFor="branch">
                        <p>Branch</p>
                      </label>
                    </div>
                    <div className="reserve-input">
                      <select
                        name="branch"
                        id="branch"
                        className={`round ${branchError ? "invalid" : ""}`}
                        onChange={(e) => {
                          setbranch(e.target.value)
                          setBranchError(false)
                        }}
                      >
                        <option
                          style={{ fontWeight: "bold" }}
                          value=""
                          disabled
                          selected
                        >
                          Branch :
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
                          Spyrydonivs'ka St, 2, Odessa, Odes'ka oblast, Ukraine,
                          65000
                        </option>
                      </select>
                      {
                        branchError && (
                          <span className="invalid_message">
                            Branch is required
                          </span>
                        )
                      }
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
                        placeholder="Redlands"
                        type="text"
                        className={`${remarkError ? "invalid" : ""}`}
                        onChange={(e) => {
                          setremark(e.target.value)
                          setRemarkError(false)
                        }}
                      />
                      {
                        remarkError && (
                          <span className="invalid_message">
                            Additional remarks is required
                          </span>
                        )
                      }
                    </div>
                  </div>
                </div>

                <div className="reserve-btn mt-4">
                  <button
                    type="submit"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <p>Reserve</p>
                  </button>
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
                {submissionStatus === "error" && (
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reserve;
