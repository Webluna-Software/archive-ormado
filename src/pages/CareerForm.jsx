import React from 'react'
import card from '../assets/img/Rectangle.png'
import background from '../assets/img/Frame.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import ApiLinkContext from "../context/ApiLinkContext";
import { useEffect } from 'react'
import axios from 'axios'
const CareerForm = () => {

  const {ApiLink} = useContext(ApiLinkContext)

  useEffect(()=>{
    axios.get(`${ApiLink}/career`)
    .then((res)=>{
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <>
      <div className="careerForm">
        <div className="careerForm-title col-12 col-md-12 col-sm-12">
          <div className="first-card-img">
            <img className='img-fluid col-12 col-md-12 col-sm-12' src={card} alt="" />
          </div>
          <img className='background img-fluid' src={background} alt="" />
          <div className='firtst-card-title'>
            <p >Career</p>
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
                <form className="careerForm-inputs">
                  <div className="careerForm-input-part1">
                    <div className="careerForm-part1">
                      <div className="careerForm-input-text">
                        <label htmlFor="branch"><p>Branch</p></label>
                      </div>
                      <div className="careerForm-input">
                        <select name="branch" id="branch">
                          <option value="choose1">Select</option>
                          <option value="choose2">Option1</option>
                          <option value="choose3">Option2</option>
                        </select>
                      </div>
                    </div>
                    <div className="careerForm-part1">
                      <div className="careerForm-input-text">
                        <label htmlFor="city"><p>Position</p></label>
                      </div>
                      <div className="careerForm-input">
                        <input id='city' placeholder='Select' type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="careerForm-input-part1">
                    <div className="careerForm-part1">
                      <div className="careerForm-input-text">
                        <label htmlFor="name"><p>Full name<span>*</span></p></label>
                      </div>
                      <div className="careerForm-input">
                        <input id='name' placeholder='Write yor full name' type="text" />
                      </div>
                    </div>
                    <div className="careerForm-part1">
                      <div className="careerForm-input-text">
                        <label htmlFor="email"><p>Email address<span>*</span> </p></label>
                      </div>
                      <div className="careerForm-input">
                        <input id='email' placeholder='Redlands' type="email" />
                      </div>
                    </div>
                  </div>
                  <div className="careerForm-input-part1">
                    <div className="careerForm-part1">
                      <div className="careerForm-input-text">
                        <label htmlFor="phone"><p>Phone<span>*</span> </p></label>
                      </div>
                      <div className="careerForm-input">
                        <input id='phone' placeholder='___-__-__-__' type="tel" />
                      </div>
                    </div>
                    <div className="careerForm-part1">
                      <div className="careerForm-input-text">
                        <label htmlFor="age"><p>Age<span>*</span> </p></label>
                      </div>
                      <div className="careerForm-input">
                        <input id='age' placeholder='Write your age' type="number" />
                      </div>
                    </div>
                  </div>
                  <div className="careerForm-input-part1">
                    <div className="careerForm-part1">
                      <div className="careerForm-input-text">
                        <label htmlFor="nationality"><p>Nationality<span>*</span> </p></label>
                      </div>
                      <div className="careerForm-input">
                        <input id='nationality' placeholder='Write your nationality' type="text" />
                      </div>
                    </div>
                    <div className="careerForm-part1">
                      <div className="careerForm-input-text">
                        <label htmlFor="gender"><p>Gender</p></label>
                      </div>
                      <div className="careerForm-input">
                        <select name="gender" id="gender">
                          <option value="choose1">Select</option>
                          <option value="choose2">Option1</option>
                          <option value="choose3">Option2</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="careerForm-input-part1">
                    <div className="careerForm-part1">
                      <div className="careerForm-input-text">
                        <label htmlFor="portfolio1"><p>Portfolio<span>*</span> </p></label>

                      </div>
                      <div className="careerForm-input">
                        <input type="file" id="portfolio" name="portfolio" style={{ 'display': 'none' }} />
                        <label id="portfolio-label" for="portfolio" style={{width:'100%'}}>
                          <div className="portfolio-form">
                          <p>Update your portfolio</p>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5" d="M11.9993 2C16.7133 2 19.0704 2 20.5348 3.46447C21.2923 4.22195 21.658 5.21824 21.8345 6.65598V10H2.16406V6.65598C2.3406 5.21824 2.70628 4.22195 3.46377 3.46447C4.92823 2 7.28525 2 11.9993 2Z" fill="#D59729" stroke="#FFE7B2" stroke-width="1.5" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 14C2 11.1997 2 9.79961 2.54497 8.73005C3.02433 7.78924 3.78924 7.02433 4.73005 6.54497C5.79961 6 7.19974 6 10 6H14C16.8003 6 18.2004 6 19.27 6.54497C20.2108 7.02433 20.9757 7.78924 21.455 8.73005C22 9.79961 22 11.1997 22 14C22 16.8003 22 18.2004 21.455 19.27C20.9757 20.2108 20.2108 20.9757 19.27 21.455C18.2004 22 16.8003 22 14 22H10C7.19974 22 5.79961 22 4.73005 21.455C3.78924 20.9757 3.02433 20.2108 2.54497 19.27C2 18.2004 2 16.8003 2 14ZM12.75 11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V15.1893L10.0303 13.9697C9.73744 13.6768 9.26256 13.6768 8.96967 13.9697C8.67678 14.2626 8.67678 14.7374 8.96967 15.0303L11.4697 17.5303C11.6103 17.671 11.8011 17.75 12 17.75C12.1989 17.75 12.3897 17.671 12.5303 17.5303L15.0303 15.0303C15.3232 14.7374 15.3232 14.2626 15.0303 13.9697C14.7374 13.6768 14.2626 13.6768 13.9697 13.9697L12.75 15.1893V11Z" fill="#D59729" />
                          </svg>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div className="careerForm-part1">
                      <div className="careerForm-input-text">
                        <label htmlFor="residence"><p>Place of residence</p></label>
                      </div>
                      <div className="careerForm-input">
                        <input id='residence' placeholder='Enter your address' type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="careerForm-input-text">
                    <label htmlFor="reason"><p>The reason why you left your former workplace?</p></label>
                  </div>
                  <div className="careerForm-input">
                    <input id='reason' placeholder='Enter reasons' type="text" />
                  </div>
                  <div className="careerForm-input-text">
                    <label htmlFor="status"><p>Marital status</p></label>
                  </div>
                  <div className="careerForm-input">
                    <select name="status" id="status">
                      <option value="choose1">Select</option>
                      <option value="choose2">Option1</option>
                      <option value="choose3">Option2</option>
                    </select>
                  </div>
                  <div className="careerForm-input-text">
                    <label htmlFor="level"><p>Please select your highest level of education</p></label>
                  </div>
                  <div className="careerForm-input">
                    <select name="level" id="level">
                      <option value="choose1">Less than high school</option>
                      <option value="choose2">High school diploma or equivalent</option>
                      <option value="choose3">Some college, no degree</option>
                      <option value="choose3">Associate degree</option>
                      <option value="choose3">Bachelor's degree</option>
                      <option value="choose3">Master's degree</option>
                      <option value="choose3">Doctoral degree</option>
                    </select>
                  </div>
                  <div className="careerForm-input-text">
                    <label htmlFor="experience"><p>Do you have any experience in the job you are applying for?</p></label>
                  </div>
                  <div className="careerForm-input">
                    <input id='experience' placeholder='JWrite the company names and the duration of employment at each' type="text" />
                  </div>
                  <div className="careerForm-input-text">
                    <label htmlFor="languages"><p>What languages do you speak?</p></label>
                  </div>
                  <div className="careerForm-input">
                    <input id='languages' placeholder='Enter languages' type="text" />
                  </div>
                  <div className="careerForm-input-text">
                    <label htmlFor="responsibility"><p>Is there any criminal responsibility</p></label>
                  </div>
                  <div className="careerForm-input">
                    <input id='responsibility' placeholder='Enter criminal responsibility' type="text" />
                  </div>
                  <div className="careerForm-input-text">
                    <label htmlFor="about"><p>How did you find out about us?</p></label>
                  </div>
                  <div className="careerForm-input">
                    <input id='about' placeholder='Write your answer' type="text" />
                  </div>
                  <div className="careerForm-input-text">
                    <label htmlFor="branches"><p>Have you worked in any of our branches?</p></label>
                  </div>
                  <div className="careerForm-input">
                    <input id='branches' placeholder='Enter information' type="text" />
                  </div>
                  <div className="careerForm-input-text">
                    <label htmlFor="like"><p>How long would you like to work with us?</p></label>
                  </div>
                  <div className="careerForm-input">
                    <input id='like' placeholder='Enter information' type="text" />
                  </div>
                  <div className="careerForm-input-text">
                    <label htmlFor="salary"><p>Expected minimum salary</p></label>
                  </div>
                  <div className="careerForm-input">
                    <input id='salary' placeholder='Write the amount' type="text" />
                  </div>
                  <div className="careerForm-input-text">
                    <label htmlFor="time"><p>How would you describe your availability?</p></label>
                  </div>
                  <div className="careerForm-input">
                    <input id='time' placeholder='Full time / part time' type="text" />
                  </div>
                  <div className="careerForm-input-text">
                    <label htmlFor="choose"><p>Why should we choose you? <span className='num'>(0/5000)</span></p></label>
                  </div>
                  <div className="careerForm-input">
                    <input id='choose' placeholder='Enter information' type="text" />
                  </div>
                  <div className="careerForm-input-text">
                    <label htmlFor="feedback"><p>Your feedback</p></label>
                  </div>
                  <div className="careerForm-input">
                    <input id='feedback' placeholder='Share your thoughts' type="text" />
                  </div>
                  <div className="careerForm-input-text">
                    <label htmlFor="share"><p>Do you have any chronic diseases, and if so, which ones?</p></label>
                  </div>
                  <div className="careerForm-input">
                    <input id='share' placeholder='Share with us' type="text" />
                  </div>
                  <div className="careerForm-input-text">
                    <label htmlFor="information"><p>Additional Information</p></label>
                  </div>
                  <div className="careerForm-input">
                    <input id='information' placeholder='Write what you think we should know' type="text" />
                  </div>
                </form>
                <div className="careerForm-btn">
                  <button><p>Submit</p></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CareerForm