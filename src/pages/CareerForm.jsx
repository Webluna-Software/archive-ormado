import card from "../assets/img/Rectangle.png";
import background from "../assets/img/Frame.png";
import { useContext } from "react";
import ApiLinkContext from "../context/ApiLinkContext";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const CareerForm = () => {
  const { ApiLink } = useContext(ApiLinkContext);

  const [branch, setBranch] = useState();
  const [position, setPosition] = useState();
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [age, setAge] = useState();
  const [nationality, setNationality] = useState();
  const [gender, setGender] = useState();
  const [portfolio, setPortfolio] = useState(null);
  const [workplace, setWorkplace] = useState();
  const [marital, setMarital] = useState();
  const [education, setEducation] = useState();
  const [applying, setApplying] = useState();
  const [languages, setLanguages] = useState();
  const [responsibility, setResponsibility] = useState();
  const [about, setAbout] = useState();
  const [worked, setWorked] = useState();
  const [longWork, setLongWork] = useState();
  const [salary, setSalary] = useState();
  const [availability, setAvailability] = useState();
  const [choose, setChoose] = useState();
  const [feedback, setFeedBack] = useState();
  const [chronic,setChronic] = useState()
  const [information,setInformation] = useState()
  const [lastWork,setLastWork] = useState()
  const [aboutUs,setAboutUs] = useState()
  
  
  // VALIDATION
  
  
  const [branchError,setBranchError] = useState(false)
  const [positionError,setPositionError] = useState(false)
  const [fullNameError,setFullNameError] = useState(false)
  const [emailError,setEmailError] = useState(false)
  const [phoneError,setPhoneError] = useState(false)
  const [ageError,setAgeError] = useState(false)
  const [nationalityError,setNationalityError] = useState(false)
  const [genderError,setGenderError] = useState(false)
  const [portfolioError,setPortfolioError] = useState(false)
  const [workplaceError,setWorkplaceError] = useState(false)
  const [maritalError,setMaritalError] = useState(false)
  const [educationError,setEducationError] = useState(false)
  const [applyingError,setApplyingError] = useState(false)
  const [languagesError,setLanguagesError] = useState(false)
  const [responsibilityError,setResponsibilityError] = useState(false)
  const [aboutError,setAboutError] = useState(false)
  const [workedError,setWorkedError] = useState(false)
  const [longWorkError,setLongWorkError] = useState(false)
  const [salaryError,setSalaryError] = useState(false)
  const [availabilityError,setAvailabilityError] = useState(false)
  const [chooseError,setChooseError] = useState(false)
  const [feedbackError,setFeedBackError] = useState(false)
  const [chronicError,setChronicError] = useState(false)
  const [aboutUsError,setAboutUsError] = useState(false)
  const [informationError,setInformationError] = useState(false)
  const [lastError,setLastWorkError] = useState(false)
  

  useEffect(() => {
    axios
      .get(`${ApiLink}/career`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const formPost =(e)=>{
    e.preventDefault()
    let isValid = true

    const fieldCheck = [
      {value:branch,error:setBranchError},
      {value:position,error:setPositionError},
      {value:fullName,error:setFullNameError},
      {value:email,error:setEmailError},
      {value:phone,error:setPhoneError},
      {value:age,error:setAgeError},
      {value:nationality,error:setNationalityError},
      {value:gender,error:setGenderError},
      {value:portfolio,error:setPortfolioError},
      {value:workplace,error:setWorkplaceError},
      {value:marital,error:setMaritalError},
      {value:education,error:setEducationError},
      {value:applying,error:setApplyingError},
      {value:languages,error:setLanguagesError},
      {value:responsibility,error:setResponsibilityError},
      {value:about,error:setAboutError},
      {value:worked,error:setWorkedError},
      {value:longWork,error:setLongWorkError},
      {value:salary,error:setSalaryError},
      {value:availability,error:setAvailabilityError},
      {value:choose,error:setChooseError},
      {value:chronic,error:setChronicError},
      {value:aboutUs,error:setAboutUsError},
      {value:information,error:setInformationError},
      {value:lastWork,error:setLastWorkError},
      {value:feedback,error:setFeedBackError},
    ]

    fieldCheck.map((item)=>{
      if (!item.value || item.value.trim() === "") {
        item.error(true)
          isValid = false
        } else {
        isValid = true
      }
    })


    const formData = new FormData();
    
    formData.append("branch", branch);
    formData.append("position", position);
    formData.append("fullname", fullName);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("age", age);
    formData.append("nationality", nationality);
    formData.append("gender", gender); 
    if (portfolio) {
      formData.append("file", portfolio);
    }
    formData.append("reason", workplace);
    formData.append("status", marital);
    formData.append("education", education);
    formData.append("experience", applying);
    formData.append("language", languages);
    formData.append("criminal", responsibility);
    formData.append("aboutUs", about);
    formData.append("ourBranches", worked);
    formData.append("longTime", longWork);
    formData.append("minSalary", salary);
    formData.append("availability", availability);
    formData.append("whyYou", choose);
    formData.append("yourFeedback", feedback);
    formData.append("diseases", chronic);
    formData.append("lastWork", lastWork);
    formData.append("howKnowAboutUs", aboutUs);
    formData.append("additionalInfo", information);
    console.log(formData.get("lastWork"))

    if (isValid) {
      axios.post(`https://ormadoapi.webluna.org/api/client/career`, formData)
    .then((res)=>{
      console.log(res,"POSTED")
      alert("Thank you !")
    })
    .catch((err)=>{
      console.log("APIDE PROBLEM",err)
    })
    }
  }

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setPhone(value);
    setPhoneError(false);
  };

  return (
    <>
      <div className="careerForm">
        <div className="careerForm-title col-12 col-md-12 col-sm-12">
          <div className="first-card-img">
            <img
              className="img-fluid col-12 col-md-12 col-sm-12"
              src={card}
              alt=""
            />
          </div>
          <img className="background img-fluid" src={background} alt="" />
          <div className="firtst-card-title">
            <p>Career</p>
          </div>
        </div>
        <div className="careerForm-pad">
          <div className="careerForm-main">
            <div className="careerForm-text">
              <h1>Ormado</h1>
              <h3>Working in Ormado Kaffeehaus </h3>
            </div>
            <div className="careerForm-part2">
              <div className="careerForm-part2-main">
                <div className="careerForm-part-header">
                  <h3>CV Form</h3>
                </div>
                <form className="careerForm-inputs" onSubmit={formPost}>
                  <div className="careerForm-input-part1">
                    <div className="careerForm-part1">
                      <div className="careerForm-input-text">
                        <label htmlFor="branch">
                          <p>Branch</p>
                        </label>
                      </div>
                      <div className="careerForm-input">
                        <select
                          name="branch"
                          id="branch"
                          defaultValue=""
                          onChange={(e) => {
                            setBranch(e.target.value)
                            setBranchError(false)
                          }}
                        >
                          <option value="" disabled hidden>
                            Select :
                          </option>
                          <option value="Einbecker Str. 18, 10317 Berlin, Germany">
                            Einbecker Str. 18, 10317 Berlin, Germany
                          </option>
                          <option value="Leipziger Pl. 12, 10117 Berlin, Germany">
                            Leipziger Pl. 12, 10117 Berlin, Germany
                          </option>
                          <option
                            value=" Ibn Battuta Mall 120، Premises Number IBS-GF - Dubai -
                          United Arab Emirates"
                          >
                            Ibn Battuta Mall 120، Premises Number IBS-GF - Dubai
                            - United Arab Emirates
                          </option>

                          <option value="23B Yusif Mammadaliyev St, Baku 1005">
                            23B Yusif Mammadaliyev St, Baku 1005
                          </option>

                          <option value="Zefir Mall, Baku">
                            Zefir Mall, Baku
                          </option>
                          <option value="Spyrydonivs'ka St, 2, Odessa, Odes'ka oblast, Ukraine, 65000">
                            Spyrydonivs&apos;ka St, 2, Odessa, Odes&apos;ka oblast,
                            Ukraine, 65000
                          </option>
                        </select>
                        {
                          branchError && (
                            <span className="invalid_message">Branch is required</span>
                          )
                        }
                      </div>
                    </div>
                    <div className="careerForm-part1">
                      <div className="careerForm-input-text">
                        <label htmlFor="city">
                          <p>Position</p>
                        </label>
                      </div>
                      <div className="careerForm-input">
                        <input
                          id="city"
                          placeholder="Select"
                          type="text"
                          onChange={(e) => {
                            setPosition(e.target.value)
                            setPositionError(false)
                          }}
                        />
                        {
                          positionError && (
                            <span className="invalid_message">Position is required</span>
                          )
                        }
                      </div>
                    </div>
                  </div>
                  <div className="careerForm-input-part1">
                    <div className="careerForm-part1">
                      <div className="careerForm-input-text">
                        <label htmlFor="name">
                          <p>
                            Full name<span>*</span>
                          </p>
                        </label>
                      </div>
                      <div className="careerForm-input">
                        <input
                          id="name"
                          placeholder="Write yor full name"
                          type="text"
                          onChange={(e) => {
                            setFullName(e.target.value)
                            setFullNameError(false)
                          }}
                        />
                        {
                          fullNameError && (
                            <span className="invalid_message">Full name is required</span>
                          )
                        }
                      </div>
                    </div>
                    <div className="careerForm-part1">
                      <div className="careerForm-input-text">
                        <label htmlFor="email">
                          <p>
                            Email address<span>*</span>
                          </p>
                        </label>
                      </div>
                      <div className="careerForm-input">
                        <input
                          id="email"
                          placeholder="example@gmail.com"
                          type="email"
                          onChange={(e) => {
                            setEmail(e.target.value)
                            setEmailError(false)
                          }}
                        />
                        {
                          emailError && (
                            <span className="invalid_message">Email is required</span>
                          )
                        }
                      </div>
                    </div>
                  </div>
                  <div className="careerForm-input-part1">
                    <div className="careerForm-part1">
                      <div className="careerForm-input-text">
                        <label htmlFor="phone">
                          <p>
                            Phone<span>*</span>
                          </p>
                        </label>
                      </div>
                      <div className="careerForm-input">
                        <input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={handlePhoneChange}
                          placeholder="+994"
                        />
                        {
                          phoneError && (
                            <span className="invalid_message">Phone is required</span>
                          )
                        }
                      </div>
                    </div>
                    <div className="careerForm-part1">
                      <div className="careerForm-input-text">
                        <label htmlFor="age">
                          <p>
                            Age<span>*</span>
                          </p>
                        </label>
                      </div>
                      <div className="careerForm-input">
                        <input
                          id="age"
                          placeholder="Write your age"
                          type="number"
                          onChange={(e) => {
                            setAge(e.target.value)
                            setAgeError(false)
                          }}
                        />
                        {
                          ageError && (
                            <span className="invalid_message">Age is required</span>
                          )
                        }
                      </div>
                    </div>
                  </div>
                  <div className="careerForm-input-part1">
                    <div className="careerForm-part1">
                      <div className="careerForm-input-text">
                        <label htmlFor="nationality">
                          <p>
                            Nationality<span>*</span>
                          </p>
                        </label>
                      </div>
                      <div className="careerForm-input">
                        <input
                          id="nationality"
                          placeholder="Write your nationality"
                          type="text"
                          onChange={(e) => {
                            setNationality(e.target.value)
                            setNationalityError(false)
                          }}
                        />
                        {
                          nationalityError && (
                            <span className="invalid_message">Nationality is required</span>
                          )
                        }
                      </div>
                    </div>
                    <div className="careerForm-part1">
                      <div className="careerForm-input-text">
                        <label htmlFor="gender">
                          <p>Gender</p>
                        </label>
                      </div>
                      <div className="careerForm-input">
                        <select
                          name="gender"
                          id="gender"
                          defaultValue=""
                          onChange={(e) => {
                            setGender(e.target.value)
                            setGenderError(false)
                          }}
                        >
                          <option value="" disabled hidden>
                           Select :
                          </option>
                          <option value="man">Man</option>
                          <option value="woman">Woman</option>
                        </select>
                        {
                          genderError && (
                            <span className="invalid_message">Gender is required</span>
                          )
                        }
                      </div>
                    </div>
                  </div>
                  <div className="careerForm-input-part1">
                    <div className="careerForm-part1">
                      <div className="careerForm-input-text">
                        <label htmlFor="portfolio1">
                          <p>
                            Portfolio<span>*</span>
                          </p>
                        </label>
                      </div>
                      <div className="careerForm-input">
                        <input
                          type="file"
                          id="portfolio"
                          name="portfolio"
                          accept=".pdf"
                          style={{ display: "none" }}
                          onChange={(e) => {
                            const uploadImage = e.target.files[0];
                            setPortfolio(uploadImage)
                            setPortfolioError(false)
                          }}
                        />
                        <label
                          id="portfolio-label"
                          htmlFor="portfolio"
                          style={{ width: "100%" }}
                        >
                          <div className="portfolio-form">
                            <p>Add your portfolio</p>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.5"
                                d="M11.9993 2C16.7133 2 19.0704 2 20.5348 3.46447C21.2923 4.22195 21.658 5.21824 21.8345 6.65598V10H2.16406V6.65598C2.3406 5.21824 2.70628 4.22195 3.46377 3.46447C4.92823 2 7.28525 2 11.9993 2Z"
                                fill="#D59729"
                                stroke="#FFE7B2"
                                strokeWidth="1.5"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2 14C2 11.1997 2 9.79961 2.54497 8.73005C3.02433 7.78924 3.78924 7.02433 4.73005 6.54497C5.79961 6 7.19974 6 10 6H14C16.8003 6 18.2004 6 19.27 6.54497C20.2108 7.02433 20.9757 7.78924 21.455 8.73005C22 9.79961 22 11.1997 22 14C22 16.8003 22 18.2004 21.455 19.27C20.9757 20.2108 20.2108 20.9757 19.27 21.455C18.2004 22 16.8003 22 14 22H10C7.19974 22 5.79961 22 4.73005 21.455C3.78924 20.9757 3.02433 20.2108 2.54497 19.27C2 18.2004 2 16.8003 2 14ZM12.75 11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V15.1893L10.0303 13.9697C9.73744 13.6768 9.26256 13.6768 8.96967 13.9697C8.67678 14.2626 8.67678 14.7374 8.96967 15.0303L11.4697 17.5303C11.6103 17.671 11.8011 17.75 12 17.75C12.1989 17.75 12.3897 17.671 12.5303 17.5303L15.0303 15.0303C15.3232 14.7374 15.3232 14.2626 15.0303 13.9697C14.7374 13.6768 14.2626 13.6768 13.9697 13.9697L12.75 15.1893V11Z"
                                fill="#D59729"
                              />
                            </svg>
                          </div>
                        </label>
                        {
                          portfolioError && (
                            <span className="invalid_message">Portfolio is required</span>
                          )
                        }
                      </div>
                    </div>
                    <div className="careerForm-part1">
                    <div className="careerForm-input-text">
                    <label htmlFor="information">
                      <p>Last Work</p>
                    </label>
                  </div>
                  <div className="careerForm-input">
                    <input
                      id="information"
                      placeholder="Last Work"
                      type="text"
                      onChange={(e)=>{
                        setLastWork(e.target.value)
                        setLastWorkError(false)

                      }}
                    />
                     {
                      lastError && (
                        <span className="invalid_message">Last work is required</span>
                      )
                     }
                  </div>
                    </div>
                  </div>
                  <div className="careerForm-input-text">
                    <label htmlFor="reason">
                      <p>The reason why you left your former workplace?</p>
                    </label>
                  </div>
                  <div className="careerForm-input">
                    <input
                      id="reason"
                      placeholder="Enter reasons"
                      type="text"
                      onChange={(e) => {
                        setWorkplace(e.target.value)
                        setWorkplaceError(false)
                      }}
                    />
                                        {
                      workplaceError && (
                        <span className="invalid_message">Workplace is required</span>
                      )
                    }
                  </div>
                  <div className="careerForm-input-text">
                    <label htmlFor="status">
                      <p>Marital status</p>
                    </label>
                  </div>
                  <div className="careerForm-input">
                    <select
                      name="status"
                      id="status"
                      defaultValue=""
                      onChange={(e) => {
                        setMarital(e.target.value)
                        setMaritalError(false)
                      }}
                    >
                      <option value="" disabled hidden>
                        Select :
                      </option>
                      <option value="married">Married</option>
                      <option value="unmarried">Unmarried</option>
                    </select>
                    {
                      maritalError && (
                        <span className="invalid_message">Marital is required</span>
                      )
                    }
                  </div>
                  <div className="careerForm-input-text">
                    <label htmlFor="level">
                      <p>Please select your highest level of education</p>
                    </label>
                  </div>
                  <div className="careerForm-input">
                    <select
                      name="level"
                      id="level"
                      defaultValue=""
                      onChange={(e) => {
                        setEducation(e.target.value)
                        setEducationError(false)
                      }}
                    >
                      <option value="" disabled hidden>
                        Select :
                      </option>
                      <option value="Less than high school">
                        Less than high school
                      </option>
                      <option value=" High school diploma or equivalent">
                        High school diploma or equivalent
                      </option>
                      <option value="Some college, no degree">
                        Some college, no degree
                      </option>
                      <option value="Associate degree">Associate degree</option>
                      <option value="Bachelor's degree">
                        Bachelor&apos;s degree
                      </option>
                      <option value="Master's degree">Master&apos;s degree</option>
                      <option value="Doctoral degree">Doctoral degree</option>
                    </select>
                    {
                      educationError && (
                        <span className="invalid_message">Education is required</span>
                      )
                    }
                  </div>
                  <div className="careerForm-input-text">
                    <label htmlFor="experience">
                      <p>
                        Do you have any experience in the job you are applying
                        for?
                      </p>
                    </label>
                  </div>
                  <div className="careerForm-input">
                    <input
                      id="experience"
                      placeholder="Write the company names and the duration of employment at each"
                      type="text"
                      onChange={(e) => {
                        setApplying(e.target.value)
                        setApplyingError(false)
                      }}
                    />
                    {
                      applyingError && (
                        <span className="invalid_message">Applying is required</span>
                      )
                    }
                  </div>
                  <div className="careerForm-input-text">
                    <label htmlFor="languages">
                      <p>What languages do you speak?</p>
                    </label>
                  </div>
                  <div className="careerForm-input">
                    <input
                      id="languages"
                      placeholder="Enter languages"
                      type="text"
                      onChange={(e) => {
                        setLanguages(e.target.value)
                        setLanguagesError(false)
                      }}
                    />
                    {
                      languagesError && (
                        <span className="invalid_message">Languages is required</span>
                      )
                    }
                  </div>
                  <div className="careerForm-input-text">
                    <label htmlFor="responsibility">
                      <p>Is there any criminal responsibility</p>
                    </label>
                  </div>
                  <div className="careerForm-input">
                    <input
                      id="responsibility"
                      placeholder="Enter criminal responsibility"
                      type="text"
                      onChange={(e) => {
                        setResponsibility(e.target.value)
                        setResponsibilityError(false)
                      }}
                    />
                    {
                      responsibilityError && (
                        <span className="invalid_message">Responsibility is required</span>
                      )
                    }
                  </div>
                  <div className="careerForm-input-text">
                    <label htmlFor="about">
                      <p>How did you find out about us?</p>
                    </label>
                  </div>
                  <div className="careerForm-input">
                    <input
                      id="about"
                      placeholder="Write your answer"
                      type="text"
                      onChange={(e) => {
                        setAbout(e.target.value)
                        setAboutError(false)
                      }}
                    />
                    {
                      aboutError && (
                        <span className="invalid_message">About us is required</span>
                      )
                    }
                  </div>
                  <div className="careerForm-input-text">
                    <label htmlFor="branches">
                      <p>Have you worked in any of our branches?</p>
                    </label>
                  </div>
                  <div className="careerForm-input">
                    <input
                      id="branches"
                      placeholder="Enter information"
                      type="text"
                      onChange={(e) => {
                        setWorked(e.target.value)
                        setWorkedError(false)
                      }}
                    />
                    {
                      workedError && (
                        <span className="invalid_message">Branches is required</span>
                      )
                    }
                  </div>
                  <div className="careerForm-input-text">
                    <label htmlFor="like">
                      <p>How long would you like to work with us?</p>
                    </label>
                  </div>
                  <div className="careerForm-input">
                    <input
                      id="like"
                      placeholder="Enter information"
                      type="text"
                      onChange={(e) => {
                        setLongWork(e.target.value)
                        setLongWorkError(false)
                      }}
                    />
                    {
                      longWorkError && (
                        <span className="invalid_message">How long would you like to work with us ? - is required</span>
                      )
                    }
                  </div>
                  <div className="careerForm-input-text">
                    <label htmlFor="salary">
                      <p>Expected minimum salary</p>
                    </label>
                  </div>
                  <div className="careerForm-input">
                    <input
                      id="salary"
                      placeholder="Write the amount"
                      type="text"
                      onChange={(e) => {
                        setSalary(e.target.value)
                        setSalaryError(false)
                      }}
                    />
                    {
                      salaryError && (
                        <span className="invalid_message">Salary is required</span>
                      )
                    }
                  </div>
                  <div className="careerForm-input-text">
                    <label htmlFor="time">
                      <p>How would you describe your availability?</p>
                    </label>
                  </div>
                  <div className="careerForm-input">
                    <input
                      id="time"
                      placeholder="Full time / part time"
                      type="text"
                      onChange={(e) => {
                        setAvailability(e.target.value)
                        setAvailabilityError(false)
                      }}
                    />
                    {
                      availabilityError && (
                        <span className="invalid_message">Availability is required</span>
                      )
                    }
                  </div>
                  <div className="careerForm-input-text">
                    <label htmlFor="choose">
                      <p>
                        Why should we choose you?
                        <span className="num">(0/5000)</span>
                      </p>
                    </label>
                  </div>
                  <div className="careerForm-input">
                    <textarea
                      id="choose"
                      placeholder="Enter information" className="form-control"
                      type="text"
                      onChange={(e) => {
                        setChoose(e.target.value)
                        setChooseError(false)
                      }}
                      maxLength={5000}
                    />
                    {
                      chooseError && (
                        <span className="invalid_message">Choose is required</span>
                      )
                    }
                  </div>
                  <div className="careerForm-input-text">
                    <label htmlFor="feedback">
                      <p>Your feedback</p>
                    </label>
                  </div>
                  <div className="careerForm-input">
                    <input
                      id="feedback"
                      placeholder="Share your thoughts"
                      type="text"
                      onChange={(e) => {
                        setFeedBack(e.target.value)
                        setFeedBackError(false)
                      }}
                    />
                    {
                      feedbackError && (
                        <span className="invalid_message">Feedback is required</span>
                      )
                    }
                  </div>
                  <div className="careerForm-input-text">
                    <label htmlFor="share">
                      <p>
                        Do you have any chronic diseases, and if so, which ones?
                      </p>
                    </label>
                  </div>
                  <div className="careerForm-input">
                    <input
                      id="share"
                      placeholder="Share with us"
                      type="text"
                      onChange={(e) => {
                        setChronic(e.target.value)
                        setChronicError(false)
                      }}
                    />
                    {
                      chronicError && (
                        <span className="invalid_message">Chronis is required</span>
                      )
                    }
                  </div>


              
                  {/* <div className="careerForm-input-text">
                    <label htmlFor="information">
                      <p>How Know About Us</p>
                    </label>
                  </div> */}
                  {/* <div className="careerForm-input">
                    <input
                      id="information"
                      placeholder="How Know About Us"
                      type="text"
                      onChange={(e)=>{
                        setAboutUs(e.target.value)
                        setAboutUsError(false)
                      }}
                    />
                    {
                      aboutUsError && (
                        <span className="invalid_message">About us is required</span>
                      )
                    }
                  </div> */}

                  <div className="careerForm-input-text">
                    <label htmlFor="information">
                      <p>Additional Information</p>
                    </label>
                  </div>
                  <div className="careerForm-input">
                    <input
                      id="information"
                      placeholder="Write what you think we should know"
                      type="text"
                      onChange={(e)=>{
                        setInformation(e.target.value)
                        setInformationError(false)
                      }}
                    />
                    {
                      informationError && (
                        <span className="invalid_message">Information is required</span>
                      )
                    }
                  </div>
                  <div className="careerForm-btn">
                  <button className="mt-4" type="submit">
                    <p>Submit</p>
                  </button>
                </div>
                </form>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerForm;