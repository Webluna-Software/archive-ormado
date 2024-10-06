import { useState } from 'react'
import logo from '../assets/img/Logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { loginAction } from '../utils/login'
import { useContext } from 'react'
import {ApiLinkContext} from "../context/ApiLinkContext"
import { useEffect } from 'react'
import axios from 'axios'
import Preloader from "../pages/PreLoader";
import { Helmet } from 'react-helmet'


const LogIn = () => {
    const {ApiLink2} = useContext(ApiLinkContext)
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const navigate = useNavigate();

    const [rememberMe , setRememberMe] = useState(false);

    const [email , setEmail] = useState();
    const [password , setPassword] = useState();

    const [icon, setIcon] = useState("fa-eye");
    const [type, setType] = useState("password");

    const eye = () => {
        if (icon === "fa-eye") {
          setIcon("fa-eye-slash");
          setType("text");
        } else {
          setIcon("fa-eye");
          setType("password");
        }
      };


    const handleLoginSubmit=(e)=>{
        e.preventDefault();
        loginAction( email, password , "account/details" , rememberMe);                                                            
    }
    useEffect(()=>{
        axios.get(`${ApiLink2}/loginBanner`)
        .then((res)=>{
            setData(res.data.loginBanner[0])
            setLoading(false)
        })
        .catch(()=>{
            setLoading(false)
        })
    },[])
    return (
        <>
           {
            loading ? (<Preloader />)
            :
            (
               <>
               <Helmet>
                <title>Login</title>
               </Helmet>
                <div className="login">
                <div className="login-card">
                    <div className="login-logo">
                       <Link to={'/home'}> <img src={logo} alt=""/></Link>
                    </div>
                    <div className="login-card-main">
                        <div className="login-text">
                            <h3>Welcome back!</h3>
                            <p>Meet the good taste today</p>
                        </div>
                        <div className="login-form">
                            <form onSubmit={handleLoginSubmit}>
                                <div className="login-input-text">
                                    <label htmlFor="email"><p>Email</p></label>
                                </div>
                                <div className="login-input">
                                    <input id='email' placeholder='Enter your e-mail' type="email" onChange={(e)=> setEmail(e.target.value)}/>
                                </div>
                                <div className="login-input-text">
                                    <label htmlFor="password"><p>Password</p></label>
                                </div>
                                <div className="login-input position-relative">
                                    <input id='password' placeholder='Enter your password' type={type}  onChange={(e)=> setPassword(e.target.value)}/>
                                    <span  onClick={eye}><i className={`fa-solid ${icon}`}></i></span>
                                </div>
                                <div className="remember-me">
                                    <div className='inputDiv'>
                                        <input type="checkbox" id='login-checkbox' name='login-checkbox' className='pt-2'defaultValue={rememberMe} onClick={(e)=> setRememberMe(e.target.checked)}/>
                                        <label htmlFor="login-checkbox"> <p className='ms-2'>Remember me</p> </label>
                                    </div>
                                    <Link to={'/forgotpass'} className='forgot-pass'>Forgot password?</Link>
                                </div>
                                
                                <div className="login-btn">
                                    <button type='submit'><p>Sign in</p></button>
                                </div>
                            </form>
                        </div>
                        <div className="goSignUp">
                            <p>Don’t have an account? </p><button onClick={() => { navigate('/signup') }}>Sign up</button>
                        </div>
                    </div>
                </div>
                <div className="login-img">
                    <div className="image-container">
                        <img src={data.image} alt="" className='img-fluid' />
                        <div className="image-overlay">
                          <h1>{data.title}</h1>
                        </div>
                    </div>
                </div>
            </div>
               </>
            )
           }
        </>
    )
}

export default LogIn