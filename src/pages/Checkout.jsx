import bgimg from "../assets/img/bgimg.png";
import product1 from '../assets/img/product1.png';

const Checkout = () => {
  return (
    <section className="checkout">
      <div className="section-fluid">
        <div className="image-container">
          <img src={bgimg} alt="" className="img-fluid" />
          <div className="image-overlay">
            <h3>My Checkout</h3>
          </div>
        </div>
      </div>
      <div className="row justify-content-center justify-content-lg-between g-5">
        <div className="col-12 col-lg-7 mt-0">
          <div className="shopping-information">
            <h5 className="information-title">Shipping information</h5>
            <form>
              <p>Full name*</p>
              <input
                type="text"
                placeholder="Jon Doe"
                required
                className="form-control"
              />
              <div className="d-flex justify-content-between flex-sm-row flex-column">
                <div>
                  <p>Company name (optional)</p>
                  <input
                    type="text"
                    placeholder="Enter company name"
                    className="form-control"
                  />
                </div>
                <div>
                  <p>Phone*</p>
                  <input
                    type="text"
                    placeholder="+1(555)251-52-21"
                    required
                    className="form-control"
                  />
                </div>
              </div>
              <p>Street address*</p>
              <input
                type="text"
                placeholder="50098 Cordia Key"
                required
                className="form-control"
              />
              <div className="d-flex justify-content-between flex-sm-row flex-column">
                <div>
                  <p>Country/Region*</p>
                  <select name="" id="" className="form-select">
                    <option value="">Select</option>
                    <option value="">Azerbaijan</option>
                    <option value="">Germany</option>
                  </select>
                </div>
                <div>
                  <p>State*</p>
                  <select name="" id="" className="form-select">
                    <option value="">Select</option>
                    <option value="">Azerbaijan</option>
                    <option value="">Germany</option>
                  </select>
                </div>
                <div>
                  <p>Zip code*</p>
                  <select name="" id="" className="form-control">
                    <option value="">Select</option>
                    <option value="">Azerbaijan</option>
                    <option value="">Germany</option>
                  </select>
                </div>
              </div>
              <input type="checkbox" name="" id="" className="mt-3 me-2"/>
              <span className="mt-3">Save shipping address</span>
              <h5 className="mt-5">Additional information</h5>
              <p>Order notes <span>(Optional)</span> </p>
              <textarea
                name=""
                id=""
                rows={10} 
                className="form-control"
                placeholder="Notes about your order, e.g. special notes for delivery"
              ></textarea>
            </form>
          </div>
        </div>
        <div className="col-12 col-lg-5">
          <div className="order-summary">
            <h6>Order Summery</h6>
            <div className="checkout-item d-flex justify-content-between align-items-center">
              <div className="checkout-img">
                <img src={product1} className="img-fluid" alt="" />
              </div>
              <p className="checkout-title">
              Ormado Energy Drink 10ml <span>x5</span>
              </p>
              <p className="checkout-price">$14.99</p>
            </div>
            <div className="checkout-item d-flex justify-content-between align-items-center">
              <div className="checkout-img">
                <img src={product1} className="img-fluid" alt="" />
              </div>
              <p className="checkout-title">
              Ormado Energy Drink 10ml <span>x5</span>
              </p>
              <p className="checkout-price">$14.99</p>
            </div>
            
            <div className="pays my-3">
              <div className="price-sec d-flex justify-content-between">
                <p>Subtotal:</p>
                <p className="coffs">84.00$</p>
              </div>
              <div className="price-sec d-flex justify-content-between">
                <p>Shipping:</p>
                <p className="coffs">Free</p>
              </div>
              <div className="price-sec d-flex justify-content-between">
                <p>Total:</p>
                <p className="color-text">$84.00</p>
              </div>
            </div>
            <h6>Payment method</h6>
            <input type="radio" name="metod" id="Cash" className="me-2" />
            <label htmlFor="Cash">Cash on Delivery</label> <br />
            <input type="radio" name="metod" id="PayPal" className="me-2" />
            <label htmlFor="PayPal">PayPal</label> <br />
            <div className="d-flex justify-content-center"><button className="btn order-btn ">Place Order</button></div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
