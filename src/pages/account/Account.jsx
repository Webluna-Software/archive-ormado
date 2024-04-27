import { useLocation, useNavigate, useParams } from "react-router-dom";
import bgimg from "../../assets/img/bgimg.png";
import { useEffect, useState } from "react";
import { validateUserID } from "../../utils/user";
import { logOutUser, loginApiLink } from "../../utils/login";
import AccountDetails from "./AccountDetails";
import Order from "./Order";
import Password from "./Password";
import axios from "axios";
import Loading from "../../components/Loading";

const Account = () => {
  const { page } = useParams();

  const navigate = useNavigate();


  const [user , setUser] = useState();
  
  const [loading , setLoading] = useState(true);
  const [error , setError ] = useState(false);

  useEffect(()=>{
    axios.get(`${loginApiLink}/user/${validateUserID()}`)
    .then((res)=>{
        console.log(res);
        setUser(res.data.data)
        setLoading(false)
    })
  },[])

  // Page activation
  useLocation(()=>{
      setCurrentPage(page);
  },[])
  console.log("salam");


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
            <img src={bgimg} alt="" className="img-fluid" />
            <div className="image-overlay">
              <h3>My Account</h3>
            </div>
          </div>
        </div>
        {
            loading ? 
            
            <Loading />

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
                        window.scrollTo(0, 0);
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
                        window.scrollTo(0, 0);
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
                        window.scrollTo(0, 0);
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
                        window.scrollTo(0, 0);
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
