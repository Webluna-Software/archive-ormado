import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ApiLinkContext from '../context/ApiLinkContext';
import loginimg from '../assets/img/Login.webp';
import logo from '../assets/img/Logo.png';

const ForgotPass = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { ApiLink2 } = useContext(ApiLinkContext); 

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(''); // Clear any previous error messages

    try {
      const response = await fetch(`${ApiLink2}/auth/forgotpassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        alert('Please check your inbox to reset your password.');
        navigate('/login');
      } else {
        const data = await response.json();
        setErrorMessage(data.message || 'An error occurred, please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred, please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="forgotpass">
      <div className="forgotpass-card">
        <div className="forgotpass-logo">
          <Link to={'/'}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="forgotpass-card-main">
          <div className="forgotpass-text">
            <h3>Welcome back!</h3>
            <p>Find your account</p>
          </div>
          <div className="forgotpass-form">
            <form onSubmit={handleForgotPassword}>
              <div className="forgotpass-input-text">
                <label htmlFor="email"><p>Email</p></label>
              </div>
              <div className="forgotpass-input mb-3">
                <input
                  id="email"
                  placeholder="Enter your e-mail"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="forgotpass-btn">
                <button type="submit" disabled={isLoading}>
                  <p>{isLoading ? 'Checking...' : 'Next'}</p>
                </button>
              </div>
            </form>
          </div>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <div className="goSignUp">
            <p>Don’t have an account? </p>
            <button onClick={() => { navigate('/signup') }}>Sign up</button>
          </div>
        </div>
      </div>
      <div className="forgotpass-img">
        <div className="image-container">
          <img src={loginimg} alt="Login Image" className="img-fluid" />
          <div className="image-overlay">
            <h1>WELCOME TO ORMADO KAFFEEHAUS</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;

