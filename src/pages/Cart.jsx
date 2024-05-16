/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import bgimg from "../assets/img/bgimg.png";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/cartSlice";
import { useState } from "react";
import { addToWish } from "../features/wishSlice";

const Cart = () => {
  const navigate = useNavigate();
  const cartProducts = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };
  // const handleDeleteAll = () => {
  //   dispatch(deleteAll());
  // };
  const handleQuantityChange = (productId, quantity) => {
    if (quantity <= 0) {
      dispatch(removeFromCart(productId));
    } else {
      dispatch(updateQuantity({ id: productId, quantity }));
    }
  };
    const totalPrice = cartProducts.reduce((total, product) => {
    const price = product.salePrice ? product.salePrice : product.price;
    const quantity = parseInt(product.quantity);

    if (!isNaN(price) && !isNaN(quantity)) {
      return total + price * quantity;
    } else {
      return total;
    }
  }, 0);

  const [showModal, setShowModal] = useState(false);

  const handleDeleteProduct = (productId) => {
    setShowModal(false);
    handleRemoveFromCart(productId);
  };

  const handleRefuse = () => {
    setShowModal(false);
  };

  const handleDeleteAndWishlist = (product) => {
    dispatch(addToWish({ ...product }));
    dispatch(removeFromCart(product._id));
    setShowModal(false);
  };

  return (
    <section className="cart">
      <div className="section-fluid">
        <div className="image-container">
          <img src={bgimg} alt="" className="img-fluid" />
          <div className="image-overlay">
            <h3>My Cart</h3>
          </div>
        </div>
      </div>
      {cartProducts.length > 0 ? (
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
                  <tr key={product._id}>
                    <td>
                      <div className="product-img">
                        <img src={product.coverImage} alt="" />
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
                          onClick={() => {
                            if (product.quantity === 1) {
                              setShowModal(true);
                            } else {
                              handleQuantityChange(
                                product._id,
                                product.quantity - 1
                              );
                            }
                          }}
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>

                        {showModal && (
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
                                    handleDeleteProduct(product._id);
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
                            handleQuantityChange(
                              product._id,
                              product.quantity + 1
                            );
                          }}
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
                            handleRemoveFromCart(product._id);
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
              <div className="cart-mobile container" key={product._id}>
                <div className="row mobile-version">
                  <div className="col-sm-12 col-md-12 col-lg-12 p-4 g-0 rounded-5  flex-md-row mb-4 shadow-sm">
                    <div className="d-flex align-items-center justify-content-between mobile-content">
                      <div className="cart-img">
                        <img
                          src={product.coverImage}
                          alt="err"
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
                          onClick={() => {
                            handleQuantityChange(
                              product._id,
                              product.quantity - 1
                            );
                          }}
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>

                        <span>{product.quantity}</span>
                        <button
                          className="quantity-btn ms-2"
                          onClick={() => {
                            handleQuantityChange(
                              product._id,
                              product.quantity + 1
                            );
                          }}
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
                            handleRemoveFromCart(product._id);
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
              className="d-flex justify-content-center text-decoration-none mb-4 mb-lg-0"
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
                  <p className="coffs">${totalPrice}</p>
                </div>
                <hr />
                <div className="price-sec d-flex justify-content-between">
                  <p>Shipping:</p>
                  <p className="coffs">Free</p>
                </div>
                <hr />
                <div className="price-sec d-flex justify-content-between">
                  <p>Total:</p>
                  <p className="color-text">${totalPrice}</p>
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
        <div className="empty-cart-message text-center mt-5">
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
