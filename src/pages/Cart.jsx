import { Link } from "react-router-dom";
import bgimg from "../assets/img/bgimg.png";
import product1 from "../assets/img/product1.png";

const Cart = () => {
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
              <tr>
                <td className="">
                  <div className="product-img">
                    <img src={product1} alt="" />
                  </div>
                </td>
                <td className="product-title">Ormado Energy Drink 10ml</td>
                <td className="product-price">$45</td>
                <td>
                  <div className="quantity-part">
                    <button className="quantity-btn ">
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <span>1</span>
                    <button className="quantity-btn ">
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                </td>
                <td>
                  <div className="subtotal-sec d-flex align-items-center justify-content-center justify-content-xl-start">
                    <p className="product-price me-3">$400</p>
                    <span>
                      <i className="fa-solid fa-xmark"></i>
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="cart-mobile container">
            <div className="row mobile-version">
              <div className="col-sm-12 col-md-12 col-lg-12 p-4 g-0 rounded-5  flex-md-row mb-4 shadow-sm">
                <div className="d-flex align-items-center justify-content-between mobile-content">
                  <div className="cart-img">
                    <img src={product1} alt="err" className="img-fluid" />
                  </div>
                  <div className="mobile-content-header">
                    <div className="d-flex content-title text-end">
                      <p className="mb-0 cart-title">Ormado Energy Drink</p>
                    </div>
                    <p className="mt-4 text-end cart-price">$70.00</p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-2">
                  <div className="quantity-part">
                    <button className="quantity-btn me-2">
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <span>1</span>
                    <button className="quantity-btn ms-2">
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                  <p className="text-end d-flex">
                    <span>Subtotal:</span> <span className="me-2 color-text">$140.00</span>
                    <span className="delete-btn"><i className="fa-solid fa-xmark"></i></span>
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 p-4 g-0 rounded-5  flex-md-row mb-4 shadow-sm">
                <div className="d-flex align-items-center justify-content-between mobile-content">
                  <div className="cart-img">
                    <img src={product1} alt="err" className="img-fluid" />
                  </div>
                  <div className="mobile-content-header">
                    <div className="d-flex content-title text-end">
                      <p className="mb-0 cart-title">Ormado Energy Drink</p>
                    </div>
                    <p className="mt-4 text-end cart-price">$70.00</p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-2">
                  <div className="quantity-part">
                    <button className="quantity-btn me-2">
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <span>1</span>
                    <button className="quantity-btn ms-2">
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                  <p className="text-end d-flex">
                    <span>Subtotal:</span> <span className="me-2 color-text">$140.00</span>
                    <span className="delete-btn"><i className="fa-solid fa-xmark"></i></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Link
            to="/product"
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
                <p className="coffs">84.00$</p>
              </div>
              <hr />
              <div className="price-sec d-flex justify-content-between">
                <p>Shipping:</p>
                <p className="coffs">Free</p>
              </div>
              <hr />
              <div className="price-sec d-flex justify-content-between">
                <p>Total:</p>
                <p className="color-text">$84.00</p>
              </div>
            </div>
            <button className="btn-brown btn">Proceed to checkout</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
