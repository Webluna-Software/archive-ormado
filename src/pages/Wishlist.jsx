import bgimg from "../assets/img/bgimg.png";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ApiLinkContext from "../context/ApiLinkContext";
import axios from "axios";

const Wishlist = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const { ApiLink2 } = useContext(ApiLinkContext);
  const [wishProducts, setWishProducts] = useState([]); 
  const [cartStatus, setCartStatus] = useState({});

  const handleRemoveFromWish = async (productId) => {
    try {
      const token = sessionStorage.getItem("token") || localStorage.getItem("token");
      if (!token) {
        setError(true);
        setLoading(false);
        return;
      }
  
      const response = await axios.delete(`${ApiLink2}/wishlist/${user._id}/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.status === 200) {
        setWishProducts(prevProducts => prevProducts.filter(item => item.productId !== productId));
        if (wishProducts.length === 1) {
          setWishProducts([]);
        }
      }
    } catch (err) {
      console.error("Error deleting product:", err);
      setError("Error deleting product from the wishlist.");
      setLoading(false);
    }
  };
  
  const handleAddToCart = async(productId) => {
    setLoading(true);
    const token = sessionStorage.getItem("token") || localStorage.getItem("token");
    if (!token) {
      setError(true);
      setLoading(false);
      return;
    }
    try {
      await axios.post(`${ApiLink2}/cart`, { productId, quantity:1 ,userId:user._id}, {
              headers: {
                Authorization: `Bearer ${token}` // Include the token in the Authorization header
              }
            });
      setCartStatus((prevState) => ({
        ...prevState,
        [productId]: "active"
      }));
    } catch (error) {
      setError(`Error: ${error.response?.data?.message || "Something went wrong!"}`);
    } finally {
      setLoading(false);
    }
    handleRemoveFromWish(productId);
  };
  
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
      setLoading(false);
      
    })
    .catch((err) => {
      console.error("API Error:", err);
      setLoading(false);
      setError(true);
    });
  }, [ApiLink2]);
  
  useEffect(() => {
    if (!user._id) return;
    const fetchCartData = async () => {
      try {
        const response = await axios.get(`${ApiLink2}/wishlist/${user._id}`) 
        setWishProducts(response.data.data.items); 
        setLoading(false); 
        
      } catch (err) {
        setError('Error fetching cart data'); 
        setLoading(false);
      }
    };

    fetchCartData();
  }, [user._id,ApiLink2]); 
console.log(wishProducts,"wish");

  return (
    <section className="wishlist">
      <div className="section-fluid">
        <div className="image-container">
          <img src={bgimg} alt="Wishlist Banner Image" className="img-fluid" />
          <div className="image-overlay">
            <h3>My Wishlist</h3>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            {wishProducts.length > 0 ? (
              <table className="table border-0">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Stock Status</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {wishProducts.map((item) => (
                    <tr key={item.productId}>
                      <td className="product-title d-flex align-items-center">
                        <div className="product-img">
                          <img
                            src={item.coverImage}
                            alt="Product Image"
                            className="img-fluid"
                          />
                        </div>
                        {item.title}
                      </td>
                      <td>
                        <span className="product-salePrice">${item.price}</span>
                        <span className="product-price">${item.salePrice}</span>
                      </td>
                      <td>
                        <button
                          className={`btn stock ${
                            item.active ? "instock" : "outofstock"
                          }`}
                        >
                          {item.active ? "Stock" : "Out of stock"}
                        </button>
                      </td>
                      <td>
                        <button
                          className={`btn cart ${
                            item.active ? "addcart" : "passivcart"
                          }`}
                          onClick={() => {
                            item.active ? handleAddToCart(item.productId) : "";
                          }}
                        >
                          Add to cart
                        </button>
                      </td>
                      <td
                        onClick={() => {
                          handleRemoveFromWish(item.productId);
                        }}
                      >
                        <i className="fa-solid fa-circle-xmark"></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="empty-cart-message text-center mt-5">
                <p className="my-2">Your favorites are currently empty</p>
                <Link to="/products">
                  <button className="btn btn-brown">
                    <span>Return to shop</span>
                  </button>
                </Link>
              </div>
            )}
            {wishProducts.map((item) => (
              <div className="container mobile-wishlist" key={item.productId}>
                <div className="d-flex flex-column align-items-center">
                  <div className="product-img">
                    <img src={item.coverImage} alt="Product Image" className="img-fluid" />{" "}
                  </div>
                  <div className="title">{item.title}</div>
                </div>
                <div className="table-container ">
                  <div className="d-flex justify-content-between">
                    <p>Price</p>
                    <p>
                      <span className="product-salePrice">${item.price}</span>
                      <span className="product-price">${item.salePrice}</span>
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Stock Status</p>
                    <p
                      className={`btn stock ${
                        item.active ? "instock" : "outofstock"
                      }`}
                    >
                      {item.active ? "In Stock" : "Out of Stock"}
                    </p>
                  </div>
                </div>
                <div className="d-flex mt-2 align-items-center">
                  <button
                    className={`btn cart me-3 ${
                      item.active ? "addcart" : "passivcart"
                    }`}
                    onClick={() => {
                      item.active ? handleAddToCart(item.productId) : "";
                    }}
                  >
                    Add to cart
                  </button>
                  <span
                    onClick={() => {
                      handleRemoveFromWish(item.productId);
                    }}
                  >
                    <i className="fa-solid fa-circle-xmark"></i>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wishlist;