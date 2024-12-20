import axios from "axios";
import { useRef, useState } from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import loginimg from '../assets/img/Login.webp';
import logo from '../assets/img/Logo.png';

const ResetPassword = () => {
  const firstPassRef = useRef(null);
  const secondPassRef = useRef(null);
  const { resetToken } = useParams();
  const [check, setCheck] = useState(false);
  const [inputtype, setInputtype] = useState("password");
  const navigate = useNavigate();

  const loginSubmit = (e) => {
    e.preventDefault();

    if (!resetToken) {
      alert("Invalid reset link. Please try requesting a new one.");
      return;
    }

    const newPassword = firstPassRef.current?.value;
    const confirmPassword = secondPassRef.current?.value;

    if (!newPassword || !confirmPassword) {
      alert("Please fill in both password fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    
    // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    // if (!passwordRegex.test(newPassword)) {
    //   alert("Password must be at least 8 characters long and include both letters and numbers.");
    //   return;
    // }

    setCheck(true);

    axios
      .put(
        `https://ormadoapi.webluna.org/api/auth/resetpassword/${resetToken}`,
        {
         password: newPassword
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Your password has been successfully changed.");
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch((err) => {
        if (err.response) {
          console.error("Error response data:", err.response.data);
          alert(`Error: ${err.response.data.message || "An error occurred."}`);
        } else {
          console.error("Error:", err.message);
          alert("An error occurred. Please try again later.");
        }
      })
      .finally(() => {
        setCheck(false);
      });
  };

  return (
    
      <section className="mt-5">
            <div  className="login">
              <div className="login-card">
                <div className="login-logo">
                  <Link to={'/'}>
                    <img src={logo} alt="Logo Image" />
                  </Link>
                </div>
                <div className="login-card-main">
                  <div className="login-text">
                    <h3>Reset Password</h3>
                    <p className="my-3">Create new password</p>
                  </div>
                  <div className="login-form">
                  <Form onSubmit={loginSubmit}>
                    <Row>
                      <Col sm={12} md={12}>
                        <Form.Group controlId="formNewPassword" className="login-input">
                          <Form.Label className="login-input-text"><p>New Password</p></Form.Label>
                          <Form.Control
                            type={inputtype}
                            placeholder="Enter new password"
                            ref={firstPassRef}
                            required
                          />
                          
                        </Form.Group>
                      </Col>
                      <Col sm={12} md={12}>
                        <Form.Group controlId="formConfirmPassword" className="login-input">
                          <Form.Label className="login-input-text"><p>Confirm Password</p></Form.Label>
                          <InputGroup className="mb-1">
                            <Form.Control
                              placeholder="Enter confirm password"
                              type={inputtype}
                              ref={secondPassRef}
                              required
                            />
                            <span
                              onClick={() => setInputtype(inputtype === "password" ? "text" : "password")}
                              className="vbtn"
                              type="button"
                              id="button-addon2"
                            >
                              <i
                                className={`fa-solid ${inputtype === "password" ? "fa-eye" : "fa-eye-slash"}`}
                              ></i>
                            </span>
                          </InputGroup>
                        </Form.Group>
                      </Col>
                    </Row>
                    <center>
                      <div className="d-flex flex-column">
                        <Button
                          className={`vbtn mt-4 rounded-5 ${check ? "disabled" : ""}`}
                          type="submit"
                          disabled={check}
                        >
                          {check ? "Checking..." : "Reset"}
                        </Button>
                      </div>
                    </center>
                  </Form>
                  </div>
                </div>
              </div>
              <div className="login-img">
                <div className="image-container">
                  <img src={loginimg} alt="Login Image" className="img-fluid" />
                  <div className="image-overlay">
                    <h1>WELCOME TO ORMADO KAFFEEHAUS</h1>
                  </div>
                </div>
            </div>
            </div>
      </section>
  );
};

export default ResetPassword;
