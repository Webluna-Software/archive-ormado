import { useState, useContext, useEffect } from "react";
import logo from "../assets/img/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { ApiLinkContext } from "../context/ApiLinkContext";
import axios from "axios";
import Preloader from "../pages/PreLoader";
import { Helmet } from "react-helmet";

const LogIn = () => {
  const { ApiLink2 } = useContext(ApiLinkContext); 
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate(); 

  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [icon, setIcon] = useState("fa-eye");
  const [type, setType] = useState("password");

  const togglePasswordVisibility = () => {
    if (icon === "fa-eye") {
      setIcon("fa-eye-slash");
      setType("text");
    } else {
      setIcon("fa-eye");
      setType("password");
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${ApiLink2}/auth/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        console.log("Giriş Başarılı:", response.data);
        const token = response.data.token;
        const user = response.data.user; 
        console.log(user,"user");

        if (rememberMe) {
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
        } else {
          sessionStorage.setItem("token", token);
          sessionStorage.setItem("user", JSON.stringify(user));
        }
        alert("You have logged in successfully!")
        navigate("/");
      } else {
        alert("Either the email or password is incorrect!");
      }
    } catch (error) {
      console.error("Giriş Hatası:", error);

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(`Giriş Hatası: ${error.response.data.message}`);
      } else {
        alert("Bir hata oluştu. Lütfen tekrar deneyin.");
      }
    }
  };

  useEffect(() => {
    axios
      .get(`${ApiLink2}/loginBanner`)
      .then((res) => {
        setData(res.data.loginBanner[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Banner yükleme hatası:", err);
        setLoading(false);
      });
  }, [ApiLink2]);

  return (
    <>
      {loading ? (
        <Preloader /> 
      ) : (
        <>
          <Helmet>
            <title>Login</title>
          </Helmet>
          <div className="login">
            <div className="login-card">
              <div className="login-logo">
                <Link to={"/"}>
                  <img src={logo} alt="Logo" />
                </Link>
              </div>
              <div className="login-card-main">
                <div className="login-text">
                  <h3>Welcome back!</h3>
                  <p>Meet the good taste today</p>
                </div>
                <div className="login-form">
                  <form onSubmit={handleLoginSubmit}>
                    {/* Email Alanı */}
                    <div className="login-input-text">
                      <label htmlFor="email">
                        <p>Email</p>
                      </label>
                    </div>
                    <div className="login-input">
                      <input
                        id="email"
                        placeholder="Enter your e-mail"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    {/* Password Alanı */}
                    <div className="login-input-text">
                      <label htmlFor="password">
                        <p>Password</p>
                      </label>
                    </div>
                    <div className="login-input position-relative">
                      <input
                        id="password"
                        placeholder="Enter your password"
                        type={type}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <span
                        onClick={togglePasswordVisibility}
                        style={{ cursor: "pointer" }}
                      >
                        <i className={`fa-solid ${icon}`}></i>
                      </span>
                    </div>

                    {/* Remember Me ve Forgot Password */}
                    <div className="remember-me">
                      <div className="inputDiv">
                        <input
                          type="checkbox"
                          id="login-checkbox"
                          name="login-checkbox"
                          className="pt-2"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label htmlFor="login-checkbox">
                          <p className="ms-2">Remember me</p>
                        </label>
                      </div>
                      <Link to={"/forgotpass"} className="forgot-pass">
                        Forgot password?
                      </Link>
                    </div>

                    {/* Giriş Butonu */}
                    <div className="login-btn">
                      <button type="submit">
                        <p>Sign in</p>
                      </button>
                    </div>
                  </form>
                </div>

                {/* Kayıt Olma Yönlendirmesi */}
                <div className="goSignUp">
                  <p>Don’t have an account? </p>
                  <button
                    type="button"
                    onClick={() => {
                      navigate("/signup");
                    }}
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>

            {/* Login Image */}
            <div className="login-img">
              <div className="image-container">
                <img
                  src={data.image}
                  alt="Login Banner"
                  className="img-fluid"
                />
                <div className="image-overlay">
                  <h1>{data.title}</h1>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default LogIn;
