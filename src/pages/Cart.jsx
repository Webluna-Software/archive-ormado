/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import bgimg from "../assets/img/bgimg.png";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ApiLinkContext from "../context/ApiLinkContext";

const Cart = () => {
  const navigate = useNavigate();
  const [modalProductId, setModalProductId] = useState(null);
  const [cartProducts, setCartProducts] = useState([]); 
  const [total, setTotal] = useState([]); 
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [message,setMessage]=useState("")
  const [quantity, setQuantity] = useState(1);
  const { ApiLink2 } = useContext(ApiLinkContext);

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
        const response = await axios.get(`${ApiLink2}/cart/${user._id}`) // API sorğusunu buradan göndəririk
        setCartProducts(response.data.data.items); // Alınan məlumatları state-də saxlayırıq
        setTotal(response.data.data)
        setLoading(false); // Yükləmə tamamlanıb
        console.log(total,"total");
        
      } catch (err) {
        setError('Error fetching cart data'); // Hata mesajını set edirik
        setLoading(false);
      }
    };

    fetchCartData();
  }, [user._id,ApiLink2]); 

  useEffect(()=>{
    setQuantity(quantity)
  },[quantity])

  const handleUserCheck = () => {
    const token = sessionStorage.getItem("token") || localStorage.getItem("token");
    if (!token) {
      setModalContent({ title: "Please Login", body: "Please login first!" });
      setShowModal(true);
      return false;
    }
    return true;
  };

  const handleWishlist = async (productId) => {
    if (!handleUserCheck()) return;
  
    setLoading(true);
    setMessage(null);
    const token = sessionStorage.getItem("token") || localStorage.getItem("token");
    if (!token) {
      setError(true);
      setLoading(false);
      return;
    }
    try {
      await axios.post(`${ApiLink2}/wishlist`, { productId, quantity,userId:user._id },{
        headers: {
          Authorization: `Bearer ${token}` // Include the token in the Authorization header
        }
      });
      setWishStatus((prevState) => ({
        ...prevState,
        [productId]: "solid"
      }));
      setMessage("Success: Item added to wishlist!");
    } catch (error) {
      setMessage(`Error: ${error.response?.data?.message || "Something went wrong!"}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteFromCartAPI = async (productId) => {
    try {
      const token = sessionStorage.getItem("token") || localStorage.getItem("token");
      if (!token) {
        setError(true);
        setLoading(false);
        return;
      }

      const response = await axios.delete(`${ApiLink2}/cart/${user._id}/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.status === 200) {
      setCartProducts(prevProducts => prevProducts.filter(item => item.productId !== productId));
      if (cartProducts.length === 1) {
        setCartProducts([]);
      }
    }
    } catch (err) {
      console.error("Error deleting product:", err);
      setError("Error deleting product from the cart.");
      setLoading(false);
    }
  };
  
  const handleRefuse = () => {
    setModalProductId(null);
  };

  const handleDeleteAndWishlist = (product) => {
    handleWishlist(product.productId)

    handleDeleteFromCartAPI(product.productId)
    setModalProductId(null);
  };


  const handleDecreaseQuantity = (productId) => {
    setCartProducts(prevProducts => {
      const updatedProducts = prevProducts.map(product => {
        if (product.productId === productId) {
          const newQuantity = product.quantity - 1;
          
          if (newQuantity === 0) {
            // If the quantity becomes 0, don't update, but open the modal instead
            setModalProductId(productId);  
            return product; 
          }
          
          return { ...product, quantity: newQuantity };  // Decrease the quantity normally
        }
        return product;  // No change for other products
      });
      return updatedProducts;
    });
  };
// // Plus düyməsinə basıldığında quantity dəyişməsi
  const handleIncreaseQuantity = (productId) => {
    setCartProducts(prevProducts => {
      const updatedProducts = prevProducts.map(product => {
        if (product.productId === productId) {
          return { ...product, quantity: product.quantity + 1 }; // Miqdarı 1 artırırıq
        }
        return product;
      });
      return updatedProducts;
    });
  };

  return (
    <section className="cart">
      <div className="section-fluid">
        <div className="image-container">
          <img src={bgimg} alt="cart banner image" className="img-fluid" />
          <div className="image-overlay">
            <h3>My Cart</h3>
          </div>
        </div>
      </div>
      {cartProducts.length> 0 ? (
        <div className="row">
          <div className="col-12 col-lg-9">
            <table className="table ">
              <thead>
                <tr>
                  <th>
                    <p>Product</p>
                  </th>
                  <th></th>
                  <th>
                    <p>Price</p>
                  </th>
                  <th>
                    <p>Quantity</p>
                  </th>
                  <th>
                    <p>Subtotal</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartProducts.map((product) => (
                  <tr key={product.productId}>
                    <td>
                      <div className="product-img">
                        <img src={product.coverImage} alt="product image" />
                      </div>
                    </td>
                    <td className="product-title">{product.title}</td>
                    <td className="product-price">
                      <span className="product-firstprice">
                        {" "}
                        ${product.price}
                      </span>
                      ${product.salePrice}
                    </td>
                    <td>
                      <div className="quantity-part">
                        <button
                          className="quantity-btn "
                          onClick={() => handleDecreaseQuantity(product.productId)}
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>

                        {modalProductId === product.productId &&  (
                          <div className="d-flex align-items-center justify-content-center">
                            <div className="modal-container">
                              <div className="modal-content">
                                <p>
                                  Are you sure you want to remove the product
                                  from the cart?
                                </p>
                                <button
                                  className="btn btn-brown mb-4"
                                  onClick={() => {
                                    handleDeleteAndWishlist(product);
                                  }}
                                >
                                  Delete and add to wishlist
                                </button>
                                <button
                                  className="btn btn-brown mb-4"
                                  onClick={() => {
                                    handleDeleteFromCartAPI(product.productId);
                                  }}
                                >
                                  Delete
                                </button>
                                <button
                                  className="btn btn-brown mb-4"
                                  onClick={handleRefuse}
                                >
                                  Refuse
                                </button>
                              </div>
                            </div>
                          </div>
                        )}

                        <span>{product.quantity}</span>
                        <button
                          className="quantity-btn "
                          onClick={() => {
                            handleIncreaseQuantity(product.productId)
                         }
                          }
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </td>
                    <td>
                      <div className="subtotal-sec d-flex align-items-center justify-content-center justify-content-xl-start">
                        <p className="product-price me-3">
                          $
                          {product.quantity *
                            (product.salePrice
                              ? product.salePrice
                              : product.price)}
                        </p>
                        <span
                         onClick={() => {
                          handleDeleteFromCartAPI(product.productId);
                        }}
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {cartProducts.map((product) => (
              <div className="cart-mobile container" key={product.productId}>
                <div className="row mobile-version">
                  <div className="col-sm-12 col-md-12 col-lg-12 p-4 g-0 rounded-5  flex-md-row mb-4 shadow-sm">
                    <div className="d-flex align-items-center justify-content-between mobile-content">
                      <div className="cart-img">
                        <img
                          src={product.coverImage}
                          alt="product image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="mobile-content-header">
                        <div className="d-flex content-title text-end">
                          <p className="mb-0 cart-title">{product.title}</p>
                        </div>
                        <p className="mt-4 text-end cart-price">
                          <span className="product-firstprice">
                            ${product.price}
                          </span>
                          ${product.salePrice}
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-2">
                      <div className="quantity-part">
                        <button
                          className="quantity-btn me-2"
                            onClick={() => handleDecreaseQuantity(product.productId)}
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        {modalProductId === product.productId &&  (
                          <div className="d-flex align-items-center justify-content-center">
                            <div className="modal-container">
                              <div className="modal-content">
                                <p>
                                  Are you sure you want to remove the product
                                  from the cart?
                                </p>
                                <button
                                  className="btn btn-brown mb-4"
                                  onClick={() => {
                                    handleDeleteAndWishlist(product);
                                  }}
                                >
                                  Delete and add to wishlist
                                </button>
                                <button
                                  className="btn btn-brown mb-4"
                                  onClick={() => {
                                    handleDeleteFromCartAPI(product.productId);
                                  }}
                                >
                                  Delete
                                </button>
                                <button
                                  className="btn btn-brown mb-4"
                                  onClick={handleRefuse}
                                >
                                  Refuse
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                        <span>{product.quantity}</span>
                        <button
                          className="quantity-btn ms-2"
                          onClick={() => handleIncreaseQuantity(product.productId)}
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                      <p className="text-end d-flex">
                        <span>Subtotal:</span>{" "}
                        <span className="me-2 color-text">
                          $
                          {product.quantity *
                            (product.salePrice
                              ? product.salePrice
                              : product.price)}
                        </span>
                        <span
                          className="delete-btn"
                          onClick={() => {
                            handleDeleteFromCartAPI(product.productId);
                          }}
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Link
              to="/products"
              className="d-flex justify-content-center text-decoration-none  mb-4 mb-lg-0"
            >
              <button className="btn btn-brown">Return to shop</button>
            </Link>
          </div>
          <div className="col-12 col-lg-3">
            <div className="card">
              <p className="cart-total">Cart Total</p>
              <div className="pays my-3">
                <div className="price-sec d-flex justify-content-between">
                  <p>Subtotal:</p>
                  <p className="coffs">${total.totalPrice}</p>
                </div>
                <hr />
                <div className="price-sec d-flex justify-content-between">
                  <p>Shipping:</p>
                  <p className="coffs">Free</p>
                </div>
                <hr />
                <div className="price-sec d-flex justify-content-between">
                  <p>Total:</p>
                  <p className="color-text">${total.totalPrice}</p>
                </div>
              </div>
              <button
                className="btn-brown btn"
                onClick={() => {
                  navigate("/checkout");
                }}
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-cart-message text-center my-5">
          <div className="d-flex align-items-center justify-content-center">
            <svg
              className="shopBag ninetheme-cart-empty-icon"
              width="150"
              height="150"
              fill="currentColor"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m26 8.9a1 1 0 0 0 -1-.9h-3a6 6 0 0 0 -12 0h-3a1 1 0 0 0 -1 .9l-1.78 17.8a3 3 0 0 0 .78 2.3 3 3 0 0 0 2.22 1h17.57a3 3 0 0 0 2.21-1 3 3 0 0 0 .77-2.31zm-10-4.9a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4zm9.53 23.67a1 1 0 0 1 -.74.33h-17.58a1 1 0 0 1 -.74-.33 1 1 0 0 1 -.26-.77l1.7-16.9h2.09v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h2.09l1.7 16.9a1 1 0 0 1 -.26.77z"></path>
            </svg>
          </div>
          <p className="my-2">Your cart is empty</p>
          <Link to="/products">
            <button className="btn btn-brown">
              <span>Return to Shop</span>
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Cart;

