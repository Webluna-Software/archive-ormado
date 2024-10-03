import { useNavigate } from "react-router-dom";
import bgimg from "../assets/img/bgimg.png";
import orderimg from "../assets/img/orderitem.png";

const OrderDetails = () => {
  const navigate = useNavigate();
  return (
    <section className="orderdetails">
      <div className="section-fluid">
      <div className="image-container">
            <img src={bgimg} alt="" className='img-fluid' />
            <div className="image-overlay">
                <h3>My Order</h3>
            </div>
          </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-between">
          <h3>
            Hello, <span>Hasan</span>
          </h3>
          <div className="col-12 col-md-3">
            <div
              className={`d-flex ${
                window.location.pathname === "/account" ? "active" : ""
              }`}
              onClick={() => {
                navigate("/account");
                window.scrollTo({ top: 0, behavior: 'smooth' }); 
              }}
            >
              <span>
                <i className="fa-regular fa-user"></i>
              </span>
              <p>My Account</p>
            </div>
            <div
              className={`d-flex ${
                (window.location.pathname === "/order" || window.location.pathname==="/orderdetails") ? "active" : ""
              }`}
              onClick={() => {
                navigate("/order");
                window.scrollTo({ top: 0, behavior: 'smooth' }); 
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
                navigate("/address");
                window.scrollTo({ top: 0, behavior: 'smooth' }); 
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
                navigate("/password");
                window.scrollTo({ top: 0, behavior: 'smooth' }); 
              }}
            >
              <span>
                <i className="fa-solid fa-key"></i>
              </span>
              <p>Password</p>
            </div>
            <div className="d-flex">
              <span>
                <i className="fa-solid fa-right-from-bracket"></i>
              </span>
              <p>Logout</p>
            </div>
          </div>
          <div className="col-12 col-md-9 col-lg-7">
            <p>Order Details</p>
            <div className="orderdetails-list w-100">
              <ul className="d-flex">
                <li>Order ID</li>
                <li>8694328</li>
              </ul>
              <ul className="d-flex">
                <li>Order time</li>
                <li>20.06.2023, 10:45 AM</li>
              </ul>
              <ul className="d-flex">
                <li>Cargo tracking number</li>
                <li>8694328</li>
              </ul>
              <ul className="d-flex">
                <li>Status</li>
                <li>Active</li>
              </ul>
              <ul className="d-flex">
                <li>Delivery address</li>
                <li>
                  Anna Ahmadova <br /> Lützowarasse 110, Berlin, Germany <br />{" "}
                  10785
                </li>
              </ul>
              <ul className="d-flex">
                <li>Payment methods</li>
                <li>Direct debit account:***-885</li>
              </ul>
              <ul className="d-flex">
                <li>Order overview</li>
                <li>
                  Subtotal: $5.00 <br />
                  Packing and shipping: $2.00 <br />
                  Total: $1.00 <br />
                  <span>Total:</span> $500
                </li>
              </ul>
            </div>
            <div className="orderdetails-item w-100">
              
              <div className="d-flex w-100 justify-content-between">
              <div className="orderdetails-item__img">
                <img src={orderimg} alt="" className="img-fluid" />
              </div>
                <div className="orderdetail-card-parts">
                  <p className="detail-title">Name</p>
                  <p>Ormado Energy Drink</p>
                </div>
                <div className="orderdetail-card-parts">
                  <p className="detail-title">Price</p>
                  <p>$70.00</p>
                </div>
                <div className="orderdetail-card-parts">
                  <p className="detail-title">Count</p>
                  <p>2</p>
                </div>
                <div className="orderdetail-card-parts">
                  <p className="detail-title">Subtotal</p>
                  <p>$140.00</p>
                </div>
              </div>
            </div>
            <div className="orderdetails-item w-100">
              
              <div className="d-flex w-100 justify-content-between">
              <div className="orderdetails-item__img">
                <img src={orderimg} alt="" className="img-fluid" />
              </div>
                <div className="orderdetail-card-parts">
                  <p className="detail-title">Name</p>
                  <p>Ormado Energy Drink</p>
                </div>
                <div className="orderdetail-card-parts">
                  <p className="detail-title">Price</p>
                  <p>$70.00</p>
                </div>
                <div className="orderdetail-card-parts">
                  <p className="detail-title">Count</p>
                  <p>2</p>
                </div>
                <div className="orderdetail-card-parts">
                  <p className="detail-title">Subtotal</p>
                  <p>$140.00</p>
                </div>
              </div>
            </div>
            <div className="orderdetails-mobile container">
              <div className="row mobile-version">
                <div className="col-sm-12 col-md-12 col-lg-12 p-4 g-0 border rounded-5  flex-md-row mb-4 shadow-sm">
                  <div className="d-flex align-items-center justify-content-between mobile-content">
                    <div className="order-img">
                      <img src={orderimg} alt="err" className="img-fluid" />
                    </div>
                    <div className="mobile-content-header">
                      <div className="d-flex content-title text-end">
                        <p className="mb-0 order-title">Ormado Energy Drink</p>
                      </div>
                      <p className="mt-4 text-end order-price">$70.00</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-2">
                    <td>
                      Count: <span>2</span>
                    </td>
                    <p className="text-end">
                      Subtotal: <span>$140.00</span>{" "}
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 p-4 g-0 border rounded-5  flex-md-row mb-4 shadow-sm">
                  <div className="d-flex align-items-center justify-content-between mobile-content">
                    <div className="order-img">
                      <img src={orderimg} alt="err" className="img-fluid" />
                    </div>
                    <div className="mobile-content-header">
                      <div className="d-flex content-title text-end">
                        <p className="mb-0 order-title">Ormado Energy Drink</p>
                      </div>
                      <p className="mt-4 text-end order-price">$70.00</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-2">
                    <td>
                      Count: <span>2</span>
                    </td>
                    <p className="text-end">
                      Subtotal: <span>$140.00</span>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
