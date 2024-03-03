import bgimg from "../assets/img/bgimg.png";
import productitem from "../assets/img/orderitem.png";
const Wishlist = () => {
  return (
    <section className="wishlist">
      <div className="section-fluid">
        <div className="image-container">
          <img src={bgimg} alt="" className="img-fluid" />
          <div className="image-overlay">
            <h3>My Wishlist</h3>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
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
                <tr>
                  <td className="product-title d-flex align-items-center">
                    <div className="product-img">
                      <img src={productitem} alt="" className="img-fluid" />{" "}
                    </div>
                    Ormado Energy Drink 10ml
                  </td>
                  <td className="product-price">$45</td>
                  <td>
                    <button className="btn stock instock">In Stock</button>{" "}
                  </td>
                  <td>
                    <button className="btn cart">Add to cart</button>{" "}
                  </td>
                  <td>
                    <i className="fa-solid fa-circle-xmark"></i>
                  </td>
                </tr>
                <tr>
                  <td className="product-title d-flex align-items-center">
                    <div className="product-img">
                      <img src={productitem} alt="" className="img-fluid" />{" "}
                    </div>
                    Ormado Energy Drink 10ml
                  </td>

                  <td className="product-price">$45</td>
                  <td>
                    <button className="btn stock outofstock">
                      Out off Stock
                    </button>{" "}
                  </td>
                  <td>
                    <button className="btn cart">Add to cart</button>{" "}
                  </td>
                  <td>
                    <i className="fa-solid fa-circle-xmark"></i>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="container mobile-wishlist">
              <div className="d-flex flex-column align-items-center">
                <div className="product-img">
                  <img src={productitem} alt="" className="img-fluid" />{" "}
                </div>
                <div className="title">Ormado Energy Drink 10ml</div>
              </div>
              <div className="table-container ">
                <div className="d-flex justify-content-between">
                  <p>Price</p>
                  <p className="product-price">$200</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Stock Status</p>
                  <p className="stock instock">In Stock</p>
                </div>
              </div>
              <div className="d-flex mt-2 align-items-center">
                <button className="btn cart me-2">Add to cart</button>{" "}
                <span>
                  <i className="fa-solid fa-circle-xmark"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
