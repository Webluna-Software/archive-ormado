import { useContext, useEffect, useState } from "react";
import productImg from "../assets/img/products-banner.webp";
import ApiLinkContext from "../context/ApiLinkContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import PreLoader from "../pages/PreLoader";
import Modal from '../components/modal/modal';
import LazyLoad from "react-lazy-load";
import { Helmet } from "react-helmet";
import Faq from "../components/home/Faq";


const Products = ({ _id }) => {
  const [loading, setLoading] = useState(true);
  const { ApiLink2 } = useContext(ApiLinkContext);
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(false);
  const [cartStatus, setCartStatus] = useState({});
  //MODAL
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', body: '' });
  //FAQ
  const [faqProducts, setFaqProducts] = useState([]);
  const [user, setUser] = useState({});
  const [wishStatus, setWishStatus] = useState({}); 

  const navigate= useNavigate()

  useEffect(() => {
    Promise.all([
      axios.get(`${ApiLink2}/product`),
      axios.get(`${ApiLink2}/faqProduct`)
    ])
      .then(([productRes, faqRes]) => {
        setProducts(productRes.data.products);
        setFaqProducts(faqRes.data.data); 
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
        setLoading(false);
      });
  }, [ApiLink2]);

  useEffect(()=>{
    setQuantity(quantity)
  },[quantity])

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
      fetchWishlist(userData._id, token);
      fetchCartStatus(userData._id, token); 
      setLoading(false);
    })
    .catch((err) => {
      console.error("API Error:", err);
      setLoading(false);
      setError(true);
    });
  }, [ApiLink2]);

  const fetchWishlist = async (userId, token) => {
    try {
      const response = await axios.get(`${ApiLink2}/wishlist/${user._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const wishlist = response.data.data.items; // Array of product IDs
      const updatedWishStatus = {};
      wishlist.forEach((item) => {
        updatedWishStatus[item.productId] = "solid";
      });
      setWishStatus(updatedWishStatus);
    } catch (error) {
      console.error("Wishlist Fetch Error:", error);
    }
  };

  const fetchCartStatus = async (userId, token) => {
    try {
      const response = await axios.get(`${ApiLink2}/cart/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const cartItems = response.data.data.items; // Assuming backend returns cart items
      const status = {};
      cartItems.forEach((item) => {
        status[item.productId] = true; // Mark products in the cart
      });
      setCartStatus(status);
    } catch (error) {
      console.error("Fetch Cart Error:", error);
    }
  };
  
  const handleUserCheck = () => {
    const token = sessionStorage.getItem("token") || localStorage.getItem("token");
    if (!token) {
      setModalContent({ title: "Please Login", body: "Please login first!" });
      setShowModal(true);
      return false;
    }
    return true;
  };

  const handlePost=async(productId)=>{
    if (!handleUserCheck()) return;

    const token = sessionStorage.getItem("token") || localStorage.getItem("token");
    if (!cartStatus[productId]) {
      // Add to cart
      try {
        await axios.post(
          `${ApiLink2}/cart`,
          { productId, quantity: 1, userId: user._id },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setCartStatus((prevState) => ({ ...prevState, [productId]: true }));
      } catch (error) {
        console.error("Add to Cart Error:", error);
      }
    } else {
      // Redirect to cart page
      navigate("/basket");
    }
  }
    const handleWishlist = async (productId) => {
      if (!handleUserCheck()) return;
    
      const token = sessionStorage.getItem("token") || localStorage.getItem("token");
      if (!token) return;
    
      const isWished = wishStatus[productId] === "solid";
    
      try {
        if (isWished) {
          // Remove from wishlist
          await axios.delete(`${ApiLink2}/wishlist/${user._id}/${productId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
        } else {
          // Add to wishlist
          await axios.post(
            `${ApiLink2}/wishlist`,
            { productId, userId: user._id },
            { headers: { Authorization: `Bearer ${token}` } }
          );
        }
    
        // Update wishlist state
        setWishStatus((prevState) => ({
          ...prevState,
          [productId]: isWished ? "regular" : "solid",
        }));
      } catch (error) {
        console.error("Wishlist Error:", error);
      }
    };

    useEffect(() => {
      if (user._id) {
        const token = sessionStorage.getItem("token") || localStorage.getItem("token");
        fetchWishlist(user._id, token); 
        fetchCartStatus(user._id, token); 
      }
    }, [user._id]);

return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
       <>
       <Helmet>
        <title>Products</title>
       </Helmet>
        <section className="container-fluid">
          <div className="products-page row pb-5 my-5 d-flex justify-content-center">
            <div className="col-md-10">
              <div className="img-transparent d-md-block d-lg-block">
                <div className="image-container">
                  <img
                    src={productImg}
                    className="img-fluid rounded"
                    alt="bannerImage"
                  />
                  <div className="img-text-context">
                    <h4>New Product</h4>
                    <h2>Ormado Espresso Barista Edition</h2>
                      <button className="shopBtn">
                    Shop now
                      </button>
                  </div>
                </div>
              </div>
              <div className="product-cards d-md-block d-lg-block p-0 mt-5">
                <div className="yourormado-products row g-3">
                  {products.map((fd, i) => (
                    <div className="col-12 col-sm-6 col-md-4" key={i}>
                      <div className="card w-100">
                        <LazyLoad>
                        <Link to={`/productsdetails/${fd._id}`}><img src={fd.coverImage} className="card-img-top py-5" alt={fd.title} /></Link>
                        </LazyLoad>
                        <div className="wishlist-modal">
                          <div className="addtowishlist-box mb-2 d-flex justify-content-center align-items-center"
                            onClick={()=>{handleWishlist(fd._id)}}
                            >
                            <i  className={`fa-${wishStatus[fd._id] === "solid" ? "solid" : "regular"} fa-heart`}></i>
                          </div>
                          <Link to={`/productsdetails/${fd._id}`}>
                            <div className="quick-view">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.5" d="M2 12C2 13.6394 2.42496 14.1915 3.27489 15.2957C4.97196 17.5004 7.81811 20 12 20C16.1819 20 19.028 17.5004 20.7251 15.2957C21.575 14.1915 22 13.6394 22 12C22 10.3606 21.575 9.80853 20.7251 8.70433C19.028 6.49956 16.1819 4 12 4C7.81811 4 4.97196 6.49956 3.27489 8.70433C2.42496 9.80853 2 10.3606 2 12Z" fill="#4A3024" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z" fill="#4A3024" />
                              </svg>
                            </div>
                          </Link>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">{fd.title}</h5>
                          <div className="rating-stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                          <div className="price-addtocart">
                            <div className="price-box">
                              <span><del>${fd.price}</del></span>
                              <p>${fd.salePrice}</p>
                            </div>
                            <div className="price-cart"
                              onClick={() => handlePost(fd._id)}
                              >
                                <i  className={`fa-solid fa-bag-shopping ${
                                cartStatus[fd._id] ? "active" : ""
                              }`}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="img-transparent d-md-block d-lg-block mt-5">
                <div className="image-container">
                  <img
                    src={ productImg}
                    className="img-fluid rounded"
                    alt="bannerImage"
                  />
                  <div className="img-text-context">
                  <h2>Special Campaign</h2>
                  <h4 className="mt-2">Get the best deals for a limited time!</h4>
                      <Link  to="/campaignpage" onClick={() => {    window.scrollTo({ top: 0, behavior: "smooth" });  }}>
                      <button className="shopBtn">
                             Shop now
                      </button>
                      </Link>
                  </div>
                </div>
              </div>
              <div className="product-cards d-md-block d-lg-block p-0 mt-5">
                <div className="yourormado-products row g-3">
                  {products.slice(0,-3) .map((fd, i) => (
                    <div className="col-12 col-sm-6 col-md-4" key={i}>
                      <div className="card w-100">
                        <LazyLoad>
                        <Link to={`/productsdetails/${fd._id}`}><img src={fd.coverImage} className="card-img-top py-5" alt={fd.title} /></Link>
                        </LazyLoad>
                        <div className="wishlist-modal">
                          <div className="addtowishlist-box mb-2 d-flex justify-content-center align-items-center"
                            onClick={()=>{handleWishlist(fd._id)}}
                            >
                            <i  className={`fa-${wishStatus[fd._id] === "solid" ? "solid" : "regular"} fa-heart`}></i>
                          </div>
                          <Link to={`/productsdetails/${fd._id}`}>
                            <div className="quick-view">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.5" d="M2 12C2 13.6394 2.42496 14.1915 3.27489 15.2957C4.97196 17.5004 7.81811 20 12 20C16.1819 20 19.028 17.5004 20.7251 15.2957C21.575 14.1915 22 13.6394 22 12C22 10.3606 21.575 9.80853 20.7251 8.70433C19.028 6.49956 16.1819 4 12 4C7.81811 4 4.97196 6.49956 3.27489 8.70433C2.42496 9.80853 2 10.3606 2 12Z" fill="#4A3024" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z" fill="#4A3024" />
                              </svg>
                            </div>
                          </Link>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">{fd.title}</h5>
                          <div className="rating-stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                          <div className="price-addtocart">
                            <div className="price-box">
                              <span><del>${fd.price}</del></span>
                              <p>${fd.salePrice}</p>
                            </div>
                            <div className="price-cart"
                              onClick={() => handlePost(fd._id)}
                              >
                                <i  className={`fa-solid fa-bag-shopping ${
                                cartStatus[fd._id] ? "active" : ""
                              }`}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Faq faqs={faqProducts} />
       </>
      )}

      <Modal show={showModal} onClose={() => setShowModal(false)} title={modalContent.title} body={modalContent.body} showLoginButton={true} />
    </>
  );
};

export default Products;