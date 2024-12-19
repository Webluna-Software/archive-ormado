import { useLocation, useNavigate, useParams } from "react-router-dom";
import bgimg from "../../assets/img/bgimg.png";
import { useContext, useEffect, useState } from "react";
import AccountDetails from "./AccountDetails";
import Order from "./Order";
import Password from "./Password";
import axios from "axios";
import Loading from "../../components/Loading";
import ApiLinkContext from "../../context/ApiLinkContext";

const Account = () => {
  const { page } = useParams();
  const navigate = useNavigate();

  const [user , setUser] = useState();
  const [loading , setLoading] = useState(true);
  const [error , setError ] = useState(false);
  const { ApiLink2 } = useContext(ApiLinkContext); // API link contextdən istifadə

useEffect(() => {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token"); // Tokeni localStorage-dən götür

  if (!token) {
    setError(true);
    setLoading(false);
    return;
  }

  axios.get(`${ApiLink2}/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}` // Tokeni başlığa əlavə et
    }
  })
    .then((res) => {
      console.log(res.data, "data");
      setUser(res.data.data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("API Error:", err);
      setLoading(false);
      setError(true);
    });
}, [ApiLink2]);

  // Page activation
  useLocation(()=>{
      setCurrentPage(page);
  },[])

  const logOutUser = async (redirectUrl) => {
    try {
      await axios.get(`${ApiLink2}/auth/logout`);
      localStorage.removeItem('token');
      sessionStorage.removeItem('token')
      setUser(null);
      navigate(redirectUrl);
      window.location.reload(); 
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Çıxış zamanı problem baş verdi, xahiş olunur yenidən cəhd edin.");
    }
  };
  const [currentPage, setCurrentPage] = useState();

  const pageRender = (name) => {
    switch (name) {
      case "details":
        return <AccountDetails />;
      case "order":
        return <Order />;
      case "password":
        return <Password />;
      default:
        return <AccountDetails />;
    }
  };

    return (
      <section className="account">
        <div className="section-fluid">
          <div className="image-container">
            <img src={bgimg} alt="Account Banner Image" className="img-fluid" />
            <div className="image-overlay">
              <h3>My Account</h3>
            </div>
          </div>
        </div>
        {
            loading ? 
            <Loading />
            :
            error ? <h3>Something went wrong ...</h3>
            :
            <div className="container-fluid">
            <div className="row justify-content-between">
                <h3>
                Hello, <span>{user.name}</span>
                </h3>
                <div className="col-12 col-md-3">
                <div
                    className={`d-flex ${
                    window.location.pathname === "/account" ? "active" : ""
                    }`}
                    onClick={() => {
                    navigate("/account/details");
                    window.scrollTo(0, 600);
                    }}
                >
                    <span>
                    <i className="fa-regular fa-user"></i>
                    </span>
                    <p>My Account</p>
                </div>
                <div
                    className={`d-flex ${
                    window.location.pathname === "/order" ? "active" : ""
                    }`}
                    onClick={() => {
                    navigate("/account/order");
                    window.scrollTo(0,600);
                    }}
                >
                    <span>
                    <i className="fa-regular fa-bell"></i>
                    </span>
                    <p>My orders</p>
                </div>
                <div
                    className={`d-flex ${
                    window.location.pathname === "/address" ? "active" : ""
                    }`}
                    onClick={() => {
                    navigate("/account/address");
                    window.scrollTo(0, 600);
                    }}
                >
                    <span>
                    <i className="fa-solid fa-location-dot"></i>
                    </span>
                    <p>My address</p>
                </div>
                <div
                    className={`d-flex ${
                    window.location.pathname === "/password" ? "active" : ""
                    }`}
                    onClick={() => {
                    navigate("/account/password");
                    window.scrollTo(0, 600);
                    }}
                >
                    <span>
                    <i className="fa-solid fa-key"></i>
                    </span>
                    <p>Password</p>
                </div>
                <div
                    className="d-flex cursor-pointer"
                    onClick={() => logOutUser("/")}
                >
                    <span>
                    <i className="fa-solid fa-right-from-bracket"></i>
                    </span>
                    <p>Logout</p>
                </div>
                </div>
                {pageRender(page)}
            </div>
            </div>      
        }   
      </section>
    );
  }

export default Account;
