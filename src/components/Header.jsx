import { useContext, useEffect, useRef, useState } from "react";
import Logo from "../assets/img/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ApiLinkContext from "../context/ApiLinkContext";
import cart from "../../src/assets/img/cart.svg";


const Header = () => {
  const { ApiLink } = useContext(ApiLinkContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const searchInputRef = useRef(null);
  const searchFormRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchFormRef.current &&
        !searchFormRef.current.contains(event.target)
      ) {
        setIsSearchActive(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);

    axios
      .get(`${ApiLink}/product`)
      .then((res) => {
        const filteredProducts = res.data.products.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(filteredProducts);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [ApiLink, searchQuery]);


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setIsSearchActive(true);
  };

  const renderSearchResults = () => {
    if (isLoading) {
      return <li>Loading...</li>;
    }

    if (!isSearchActive || searchQuery.trim() === "") {
      return null;
    }

    if (searchResults.length === 0) {
      return <li>No products found</li>;
    }

    return searchResults.map((product) => (
      <>
        <Link to={`/productsdetails/${product._id}`}>
          <li style={{ color: "black" }} key={product.id}>
            <img
              width={30}
              height={40}
              src={product.coverImage}
              className="me-3"
            ></img>
            {product.title}
          </li>
        </Link>
      </>
    ));
  };

  // const getWishlistItemCount =()=>{
  //   const wishItems = getCookie("wishItems");
  //   if (wishItems) {
  //     const parsedItems=JSON.parse(wishItems);
  //     return parsedItems.length;
  //   }
  // return 0;
  // }
  // const getCartItemCount =()=>{
  //   const cartItems = getCookie("cartItems");
  //   if (cartItems) {
  //     const parsedItems=JSON.parse(cartItems);
  //     return parsedItems.length;
  //   }
  // return 0;
  // }

  const [active, setActive] = useState();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const { ApiLink2 } = useContext(ApiLinkContext);
  const [error, setError] = useState(false);


 
  useEffect(() => {
    const token = sessionStorage.getItem("token") || localStorage.getItem("token");
    if (!token) {
      setError(true);
      setLoading(false);
      return;
    }

    axios.get(`${ApiLink2}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      const userData = res.data.data;
      setUser(userData);
      setName(userData.name || '');
      setSurname(userData.surname || '');
      setLoading(false);
    })
    .catch((err) => {
      console.error("API Error:", err);
      setLoading(false);
      setError(true);
    });
  }, [ApiLink2]);

  return (
    <>
      <header className="desktop-header">
        <div className="header_container">
          <div>
            <Link to="/">
              <img src={Logo} alt="logo image" />
            </Link>
          </div>
          <div className="header_search" ref={searchFormRef}>
            <form>
              <input
                type="text"
                placeholder="Search"
                onChange={handleSearchChange}
                ref={searchInputRef}
              />
              <div className="searchproduct">{renderSearchResults()}</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="11.5"
                    r="9.5"
                    stroke="#6B4A3C"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M20.5 20L22.5 22"
                    stroke="#D59729"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </form>
          </div>

          <div className="d-flex align-items-center" style={{ gap: "20px" }}>
            <div className="cart">
              <img
                src={cart}
                alt="cart icon image"
                className="img-fluid"
                onClick={() => {
                  navigate("/basket");
                }}
              />
              {/* <span className="badge text-black">{getCartItemCount()}</span> */}
            </div>
            <div className="wishlist">
              <i
                className="fa-solid fa-heart"
                onClick={() => {
                  navigate("/wishlist");
                }}
              ></i>
              {/* <span className="badge text-black">{getWishlistItemCount()}</span> */}
            </div>
            <Link to="/branches">
              <div className="header_location">
                <div className="location_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6 8.10747C6 4.73441 8.68629 2 12 2C15.3137 2 18 4.73441 18 8.10747C18 11.4541 16.085 15.3593 13.0972 16.7558C12.4007 17.0814 11.5993 17.0814 10.9028 16.7558C7.91499 15.3593 6 11.4541 6 8.10747ZM12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10Z"
                      fill="#4A3024"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.62731 14.5343C3.88455 14.8589 3.82989 15.3306 3.50523 15.5879C2.93157 16.0424 2.75 16.443 2.75 16.75C2.75 16.993 2.86028 17.2881 3.19064 17.6296C3.52438 17.9747 4.04582 18.3252 4.75556 18.6471C6.00981 19.2159 7.74351 19.6466 9.75 19.8343V19.375C9.75 19.0807 9.9221 18.8137 10.1901 18.6921C10.4581 18.5705 10.7724 18.6168 10.9939 18.8106L12.4939 20.1231C12.6566 20.2655 12.75 20.4713 12.75 20.6875C12.75 20.9038 12.6566 21.1095 12.4939 21.252L10.9939 22.5645C10.7724 22.7582 10.4581 22.8046 10.1901 22.683C9.9221 22.5614 9.75 22.2943 9.75 22V21.3404C7.56512 21.1487 5.60927 20.6814 4.13599 20.0132C3.32214 19.644 2.62069 19.198 2.11244 18.6725C1.60081 18.1435 1.25 17.494 1.25 16.75C1.25 15.7998 1.81667 15.012 2.5737 14.4122C2.89836 14.1549 3.37008 14.2096 3.62731 14.5343ZM20.3727 14.5343C20.6299 14.2096 21.1016 14.1549 21.4263 14.4122C22.1833 15.012 22.75 15.7998 22.75 16.75C22.75 18.1281 21.5819 19.1606 20.2034 19.8514C18.7617 20.5738 16.791 21.0851 14.5756 21.3097C14.1635 21.3514 13.7956 21.0512 13.7538 20.6391C13.7121 20.227 14.0123 19.8591 14.4244 19.8173C16.522 19.6047 18.3014 19.1267 19.5314 18.5103C20.8246 17.8623 21.25 17.2067 21.25 16.75C21.25 16.443 21.0684 16.0424 20.4948 15.5879C20.1701 15.3306 20.1155 14.8589 20.3727 14.5343Z"
                      fill="#F7F2E8"
                    />
                  </svg>
                </div>
                <span>Search a branch</span>
              </div>
              
            </Link>

            <Link to={user ? "/account/details" : "/login"}>
              <div
                className="header_location"
                style={{ backgroundColor: "#502D1E" }}
              >
                <div className="location_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      opacity="0.5"
                      d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      fill="#F9EFD9"
                    />
                    <path
                      d="M16.807 19.0112C15.4398 19.9504 13.7841 20.5 12 20.5C10.2159 20.5 8.56023 19.9503 7.193 19.0111C6.58915 18.5963 6.33109 17.8062 6.68219 17.1632C7.41001 15.8302 8.90973 15 12 15C15.0903 15 16.59 15.8303 17.3178 17.1632C17.6689 17.8062 17.4108 18.5964 16.807 19.0112Z"
                      fill="#F7F2E8"
                    />
                    <path
                      d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3432 6 9.00004 7.34315 9.00004 9C9.00004 10.6569 10.3432 12 12 12Z"
                      fill="#F7F2E8"
                    />
                  </svg>
                </div>
                <span style={{ color: "#fff" }}>
                  {/* {user ? `${user.name} ${user.surname}` : "Log in"} */}
                  {user && user.name && user.surname ? `${user.name} ${user.surname}` : "Log in"}
                </span>
              </div>
            </Link>
          </div>
        </div>
        <nav>
          <ul className="ps-0">
            <Link
              to="/"
              className={` navA ${active == 1 ? "active" : ""}`}
              onClick={() => setActive(1)}
            >
              <li>HOME</li>
            </Link>
          </ul>
          <ul>
            <Link
              to="/products"
              className={` navA ${active == 2 ? "active" : ""}`}
              onClick={() => setActive(2)}
            >
              <li>PRODUCTS</li>
            </Link>
          </ul>
          <ul>
            <Link
              to="/about"
              className={` navA ${active == 3 ? "active" : ""}`}
              onClick={() => setActive(3)}
            >
              <li>OUR STORY</li>
            </Link>
          </ul>
          <ul>
            <Link
              to="/franchise"
              className={` navA ${active == 4 ? "active" : ""}`}
              onClick={() => setActive(4)}
            >
              <li>FRANCHISE</li>
            </Link>
          </ul>
          <ul>
            <Link
              to="/career"
              className={` navA ${active == 5 ? "active" : ""}`}
              onClick={() => setActive(5)}
            >
              <li>CAREER</li>
            </Link>
          </ul>
          <ul>
            <Link
              to="/reserve"
              className={` navA ${active == 6 ? "active" : ""}`}
              onClick={() => setActive(6)}
            >
              <li>RESERVATION</li>
            </Link>
          </ul>
          <ul>
            <Link
              to="/blogs/all"
              className={` navA ${active == 7 ? "active" : ""}`}
              onClick={() => setActive(7)}
            >
              <li>BLOGS</li>
            </Link>
          </ul>
          <ul>
            <Link
              to="/events"
              className={` navA ${active == 8 ? "active" : ""}`}
              onClick={() => setActive(8)}
            >
              <li>EVENTS</li>
            </Link>
          </ul>
          <ul>
            <Link
              to="/contact"
              className={` navA ${active == 9 ? "active" : ""}`}
              onClick={() => setActive(9)}
            >
              <li>CONTACT</li>
            </Link>
          </ul>
          <ul>
            <Link
              to="/gallery"
              className={` navA ${active == 10 ? "active" : ""}`}
              onClick={() => setActive(10)}
            >
              <li>GALLERY</li>
            </Link>
          </ul>
        </nav>
      </header>

      <header className="mobile-header">
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/">
            <img src={Logo} alt="logo image" className="mobile-logo" />
          </Link>
          <div className="mobile-icons d-flex align-items-center">
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                opacity="0.5"
                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                fill="#4A3024"
              />
              <path
                d="M16.807 19.0112C15.4398 19.9504 13.7841 20.5 12 20.5C10.2159 20.5 8.56023 19.9503 7.193 19.0111C6.58915 18.5963 6.33109 17.8062 6.68219 17.1632C7.41001 15.8302 8.90973 15 12 15C15.0903 15 16.59 15.8303 17.3178 17.1632C17.6689 17.8062 17.4108 18.5964 16.807 19.0112Z"
                fill="#F7F2E8"
              />
              <path
                d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3432 6 9.00004 7.34315 9.00004 9C9.00004 10.6569 10.3432 12 12 12Z"
                fill="#F7F2E8"
              />
            </svg>
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              style={{ margin: "0 24px" }}
            >
              <path
                opacity="0.5"
                d="M4.0828 11.8943C4.52171 9.55339 4.74117 8.38295 5.57434 7.69147C6.40752 7 7.59835 7 9.98003 7H14.0209C16.4026 7 17.5934 7 18.4266 7.69147C19.2598 8.38295 19.4792 9.55339 19.9181 11.8943L20.6681 15.8943C21.2853 19.186 21.5939 20.8318 20.6942 21.9159C19.7945 23 18.12 23 14.7709 23H9.23003C5.88097 23 4.20644 23 3.30672 21.9159C2.40701 20.8318 2.7156 19.186 3.3328 15.8943L4.0828 11.8943Z"
                fill="#4A3024"
              />
              <path
                d="M9.75 5.98509C9.75 4.74245 10.7574 3.73509 12 3.73509C13.2426 3.73509 14.25 4.74245 14.25 5.98509V6.98509C14.816 6.98527 15.3119 6.98683 15.7499 6.99997C15.75 6.99502 15.75 6.99006 15.75 6.98509V5.98509C15.75 3.91402 14.0711 2.23509 12 2.23509C9.92893 2.23509 8.25 3.91402 8.25 5.98509V6.98509C8.25 6.99007 8.25005 6.99504 8.25015 7C8.68814 6.98684 9.18397 6.9853 9.75 6.98512V5.98509Z"
                fill="#4A3024"
              />
              <path
                d="M9.87823 15.75C10.1875 16.6249 11.0219 17.25 12.0004 17.25C12.9789 17.25 13.8133 16.6249 14.1226 15.75C14.2606 15.3595 14.6891 15.1548 15.0796 15.2928C15.4702 15.4309 15.6749 15.8594 15.5368 16.2499C15.0224 17.7054 13.6343 18.75 12.0004 18.75C10.3665 18.75 8.97841 17.7054 8.46397 16.2499C8.32594 15.8594 8.53063 15.4309 8.92117 15.2928C9.31171 15.1548 9.7402 15.3595 9.87823 15.75Z"
                fill="#4A3024"
              />
            </svg>
            <div className="wishlist">
              <i
                className="fa-solid fa-heart"
                onClick={() => {
                  navigate("/wishlist");
                }}
              ></i>
              {/* <span className="badge text-black">{getWishlistItemCount()}</span> */}
            </div>
            <div className="cart">
              <img
                src={cart}
                alt="cartLogoImage"
                className="img-fluid"
                onClick={() => {
                  navigate("/basket");
                }}
              />
              {/* <span className="badge text-black">{getCartItemCount()}</span> */}
            </div>
            <button
              className="btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#staticBackdrop"
              aria-controls="staticBackdrop"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20 7L4 7"
                  stroke="#4A3024"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  opacity="0.5"
                  d="M20 12L4 12"
                  stroke="#4A3024"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M20 17L4 17"
                  stroke="#4A3024"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <div className="hamburgerMenu">
                <div
                  className="offcanvas offcanvas-start"
                  data-bs-backdrop="static"
                  tabIndex="-1"
                  id="staticBackdrop"
                  aria-labelledby="staticBackdropLabel"
                  style={{ width: "100%" }}
                >
                  <div className="offcanvas-header">
                    <h5
                      className="offcanvas-title"
                      id="staticBackdropLabel"
                      style={{ color: "#E3B142", fontWeight: "500" }}
                    >
                      Menu
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body">
                    <div className="row justify-content-start mt-3">
                      <Link className="mobile-title" to={"/"}>
                        <div className="col-11 ">
                          <div className="d-flex justify-content-between">
                            <div>HOME</div>
                            <div></div>
                          </div>
                          <hr />
                        </div>
                      </Link>
                      <Link to={"/products"} className="mobile-title">
                        <div className="col-11 ">
                          <div className="d-flex justify-content-between">
                            <div>PRODUCTS</div>
                            <div></div>
                          </div>
                          <hr />
                        </div>
                      </Link>
                      <Link to={"/about"} className="mobile-title">
                        <div className="col-11 ">
                          <div className="d-flex justify-content-between">
                            <div>OUR STORY</div>
                            <div></div>
                          </div>
                          <hr />
                        </div>
                      </Link>
                      <Link to={"/franchise"} className="mobile-title">
                        <div className="col-11 ">
                          <div className="d-flex justify-content-between">
                            <div>FRANCHISE</div>
                            <div></div>
                          </div>
                          <hr />
                        </div>
                      </Link>
                      <Link to="/career" className="mobile-title">
                        <div className="col-11 ">
                          <div className="d-flex justify-content-between">
                            <div>CAREER</div>
                            <div></div>
                          </div>
                          <hr />
                        </div>
                      </Link>
                      <Link to={"/reserve"} className="mobile-title">
                        <div className="col-11 ">
                          <div className="d-flex justify-content-between">
                            <div>RESERVATION</div>
                            <div></div>
                          </div>
                          <hr />
                        </div>
                      </Link>
                      <Link to={"/blogs/all"} className="mobile-title">
                        <div className="col-11 ">
                          <div className="d-flex justify-content-between">
                            <div>BLOGS</div>
                            <div></div>
                          </div>
                          <hr />
                        </div>
                      </Link>
                      <Link to={"/events"} className="mobile-title">
                        <div className="col-11 ">
                          <div className="d-flex justify-content-between">
                            <div>EVENTS</div>
                            <div></div>
                          </div>
                          <hr />
                        </div>
                      </Link>
                      <Link to={"/contact"} className="mobile-title">
                        <div className="col-11 ">
                          <div className="d-flex justify-content-between">
                            <div>CONTACT</div>
                            <div></div>
                          </div>
                        </div>
                      </Link>
                      <Link to={"/gallery"} className="mobile-title">
                        <div className="col-11 ">
                          <hr />
                          <div className="d-flex justify-content-between">
                            <div>GALLERY</div>
                            <div></div>
                          </div>
                        </div>
                      </Link>
                      <Link to="/branches">
                        <div className="header_location mt-4">
                          <div className="location_icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6 8.10747C6 4.73441 8.68629 2 12 2C15.3137 2 18 4.73441 18 8.10747C18 11.4541 16.085 15.3593 13.0972 16.7558C12.4007 17.0814 11.5993 17.0814 10.9028 16.7558C7.91499 15.3593 6 11.4541 6 8.10747ZM12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10Z"
                                fill="#4A3024"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.62731 14.5343C3.88455 14.8589 3.82989 15.3306 3.50523 15.5879C2.93157 16.0424 2.75 16.443 2.75 16.75C2.75 16.993 2.86028 17.2881 3.19064 17.6296C3.52438 17.9747 4.04582 18.3252 4.75556 18.6471C6.00981 19.2159 7.74351 19.6466 9.75 19.8343V19.375C9.75 19.0807 9.9221 18.8137 10.1901 18.6921C10.4581 18.5705 10.7724 18.6168 10.9939 18.8106L12.4939 20.1231C12.6566 20.2655 12.75 20.4713 12.75 20.6875C12.75 20.9038 12.6566 21.1095 12.4939 21.252L10.9939 22.5645C10.7724 22.7582 10.4581 22.8046 10.1901 22.683C9.9221 22.5614 9.75 22.2943 9.75 22V21.3404C7.56512 21.1487 5.60927 20.6814 4.13599 20.0132C3.32214 19.644 2.62069 19.198 2.11244 18.6725C1.60081 18.1435 1.25 17.494 1.25 16.75C1.25 15.7998 1.81667 15.012 2.5737 14.4122C2.89836 14.1549 3.37008 14.2096 3.62731 14.5343ZM20.3727 14.5343C20.6299 14.2096 21.1016 14.1549 21.4263 14.4122C22.1833 15.012 22.75 15.7998 22.75 16.75C22.75 18.1281 21.5819 19.1606 20.2034 19.8514C18.7617 20.5738 16.791 21.0851 14.5756 21.3097C14.1635 21.3514 13.7956 21.0512 13.7538 20.6391C13.7121 20.227 14.0123 19.8591 14.4244 19.8173C16.522 19.6047 18.3014 19.1267 19.5314 18.5103C20.8246 17.8623 21.25 17.2067 21.25 16.75C21.25 16.443 21.0684 16.0424 20.4948 15.5879C20.1701 15.3306 20.1155 14.8589 20.3727 14.5343Z"
                                fill="#F7F2E8"
                              />
                            </svg>
                          </div>
                          <span>Search a branch</span>
                        </div>
                      </Link>
                      <div
                        className="header_location mt-4 "
                        style={{ backgroundColor: "#502D1E" }}
                      >
                        <div className="location_icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              opacity="0.5"
                              d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              fill="#F9EFD9"
                            />
                            <path
                              d="M16.807 19.0112C15.4398 19.9504 13.7841 20.5 12 20.5C10.2159 20.5 8.56023 19.9503 7.193 19.0111C6.58915 18.5963 6.33109 17.8062 6.68219 17.1632C7.41001 15.8302 8.90973 15 12 15C15.0903 15 16.59 15.8303 17.3178 17.1632C17.6689 17.8062 17.4108 18.5964 16.807 19.0112Z"
                              fill="#F7F2E8"
                            />
                            <path
                              d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3432 6 9.00004 7.34315 9.00004 9C9.00004 10.6569 10.3432 12 12 12Z"
                              fill="#F7F2E8"
                            />
                          </svg>
                        </div>
                        <Link to={user ? "/account/details" : "/login"}>
                          <span style={{ color: "#fff" }}>
                            {user && user.name && user.surname ? `${user.name} ${user.surname}` : "Log in"}
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
