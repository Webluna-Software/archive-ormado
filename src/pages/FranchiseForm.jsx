import React, { useContext, useEffect, useState } from 'react'
import frenchiseFormimg from '../assets/img/FranchiseForm.png'
import { Link } from 'react-router-dom'
import ApiLinkContext from '../context/ApiLinkContext'
import axios from 'axios'

const FranchiseForm = () => {
  const { ApiLink } = useContext(ApiLinkContext)
  useEffect(() => {
    axios.get(`${ApiLink}/franchiseForm`).then((res) => {
      console.log(res.data, 'FranchiseForm')
    })
  })
  const [fullName, setfullName] = useState()
  const [email, setemail] = useState()
  const [phone, setphone] = useState()
  const [city, setcity] = useState()
  const [country, setcountry] = useState()
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const fromPost = (e) => {
    e.preventDefault()
    if (!fullName.trim()) {
      setNameError('Please enter your full name');
      return;
    } else {
      setNameError('');
    }
    if (!email.trim()) {
      setEmailError('Please enter your email address');
      return;
    } else {
      setEmailError('');
    }
    if (phone.replace(/\D/g, '').length < 9) {
      setPhoneError('Please enter a phone number of at least 10 digits');
      return;
    } else {
      setPhoneError('');
    }
    axios.post(`${ApiLink}/franchiseForm`,
      {
        fullName: fullName,
        email: email,
        phone: phone,
        city: city,
        country: country
      }).then((res) => {
        console.log(res.data, 'FranchiseForm Post')
        setSubmissionStatus('success');
      })
      .catch((err) => {
        console.log(err)
        setSubmissionStatus('error');
      })
  }

  return (
    <>
      <div className="franchiseform">
        <div className="franchiseform-part1">
          <img className='franchiseform-img' src={frenchiseFormimg} alt="error" />
        </div>
        <div className="franchiseform-part2">
          <div className="franchiseform-part2-main">
            <div className="franchiseform-part-header">
              <h1>ORMADO<br /> KAFFEEHAUS <br /> <span>FRANCHISE</span> </h1>
            </div>
            <form onSubmit={fromPost} className="franchiseform-inputs">
              <div className="franchiseform-input-text">
                <label htmlFor="name"><p>Full name<span>*</span></p></label>
              </div>
              <div className="franchiseform-input">
                <input id='name' placeholder='Jon Doe' type="text" onChange={(e) => setfullName(e.target.value)} />
              </div>
              {nameError && <p className="error-message text-danger">{nameError}</p>}

              <div className="franchiseform-input-text">
                <label htmlFor="email"><p>Email address<span>*</span></p></label>
              </div>
              <div className="franchiseform-input">
                <input id='email' placeholder='example@gmail.com' type="text" onChange={(e) => setemail(e.target.value)} />
              </div>
              {emailError && <p className="error-message text-danger">{emailError}</p>}
              <div className="franchiseform-input-text">
                <label htmlFor="phone"><p>Phone<span>*</span></p></label>
              </div>
              <div className="franchiseform-input">
                <input id='phone' placeholder='___-__-__-__' type="tel" onChange={(e) => setphone(e.target.value)} />
              </div>
              {phoneError && <p className="error-message text-danger">{phoneError}</p>}
              <div className="franchiseform-country-city">
                <div className="franchiseform-country">
                  <div className="franchiseform-input-text">
                    <label htmlFor="country"><p>County<span>*</span></p></label>
                  </div>
                  <div className="franchiseform-input">
                    <input id='country' placeholder='Faroe Islands' type="text" onChange={(e) => setcountry(e.target.value)} />
                  </div>

                </div>
                <div className="franchiseform-city">
                  <div className="franchiseform-input-text">
                    <label htmlFor="city"><p>City<span>*</span></p></label>
                  </div>
                  <div className="franchiseform-input">
                    <input id='city' placeholder='Redlands' type="text" onChange={(e) => setcity(e.target.value)} />

                  </div>
                </div>
              </div>
              <div className="franchiseform-text">
                <p>Your personal data will be used to process your enquiry, support your experience throughout this website, and for other purposes described in our <Link className='franchiseform-link'>Privacy policy.</Link></p>
                <p>Yes, please send me franchising opportunitiesBy checking this box you will receive franchising opportunities from Retail Food Group across all of our franchise brands via email. You can unsubscribe at any time.</p>
              </div>
              <div className="franchiseform-btn mb-2">
                <button type='submit' data-bs-toggle="modal" data-bs-target="#exampleModal"><p>Submit</p></button>
              </div>
              {submissionStatus === 'success' && (
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        Your form has been submitted successfully!
                      </div>
                    </div>
                  </div>
                </div>
            )}
            {submissionStatus === 'error' && (
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        Something went wrong. Please try again.
                      </div>
                    </div>
                  </div>
                </div>
       
            )}
            </form>
            



          </div>
        </div>
      </div>
    </>
  )
}

export default FranchiseForm