import React from 'react'
import loginimg from '../assets/img/Login.png'
import logo from '../assets/img/Logo.png'
import { Link, useNavigate } from 'react-router-dom'

const ForgotPass = () => {
    const navigate = useNavigate()
  return (
    <>
    <div className="forgotpass">
                <div className="forgotpass-card">
                    <div className="forgotpass-logo">
                       <Link to={'/home'}> <img src={logo} alt=""/></Link>
                    </div>
                    <div className="forgotpass-card-main">
                        <div className="forgotpass-text">
                            <h3>Welcome back!</h3>
                            <p>Find your account</p>
                        </div>
                        <div className="forgotpass-form">
                            <form>
                                <div className="forgotpass-input-text">
                                    <label htmlFor="email"><p>Email</p></label>
                                </div>
                                <div className="forgotpass-input">
                                    <input id='email' placeholder='Enter your e-mail' type="email" />
                                </div>
                            </form>
                        </div>
                        <div className="forgotpass-btn">
                            <button><p>Next</p></button>
                        </div>
                        <div className="goSignUp">
                            <p>Don’t have an account? </p><button onClick={() => { navigate('/login') }}>Sign in</button>
                        </div>
                    </div>
                </div>
                <div className="forgotpass-img">
                    <div className="image-container">
                        <img src={loginimg} alt="" className='img-fluid' />
                        <div className="image-overlay">
                          <h1>WELCOME TO ORMADO KAFFEEHAUS</h1>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default ForgotPass