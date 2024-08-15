import { useDispatch, useSelector } from "react-redux";
import bgimg from "../assets/img/bgimg.png";
import { addToCart } from "../features/cartSlice";
import { removeFromWish } from "../features/wishSlice";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlistsItems } = useSelector((state) => state.wish || {});
  const dispatch = useDispatch();

  const handleRemoveFromWish = (_id) => {
    dispatch(removeFromWish(_id));
  };
  
  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    handleRemoveFromWish(product._id);
  };
  console.log(wishlistsItems);

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
            {wishlistsItems.length > 0 ? (
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
                  {wishlistsItems.map((item) => (
                    <tr key={item._id}>
                      <td className="product-title d-flex align-items-center">
                        <div className="product-img">
                          {console.log(item)
                          }
                          <img
                            src={item.title}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        {item.coverImage}
                      </td>
                      <td>
                        <span className="product-salePrice">${item.price}</span>
                        <span className="product-price">${item.salePrice}</span>
                      </td>
                      <td>
                        <button
                          className={`btn stock ${
                            item.stock ? "instock" : "outofstock"
                          }`}
                        >
                          {item.stock ? "Stock" : "Out of stock"}
                        </button>
                      </td>
                      <td>
                        <button
                          className={`btn cart ${
                            item.stock ? "addcart" : "passivcart"
                          }`}
                          onClick={() => {
                            item.stock ? handleAddToCart(item) : "";
                          }}
                        >
                          Add to cart
                        </button>
                      </td>
                      <td
                        onClick={() => {
                          handleRemoveFromWish(item._id);
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
            {wishlistsItems.map((item) => (
              <div className="container mobile-wishlist" key={item._id}>
                <div className="d-flex flex-column align-items-center">
                  <div className="product-img">
                    <img src={item.coverImage} alt="" className="img-fluid" />{" "}
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
                        item.stock ? "instock" : "outofstock"
                      }`}
                    >
                      {item.stock ? "In Stock" : "Out of Stock"}
                    </p>
                  </div>
                </div>
                <div className="d-flex mt-2 align-items-center">
                  <button
                    className={`btn cart me-3 ${
                      item.stock ? "addcart" : "passivcart"
                    }`}
                    onClick={() => {
                      item.stock ? handleAddToCart(item) : "";
                    }}
                  >
                    Add to cart
                  </button>
                  <span
                    onClick={() => {
                      handleRemoveFromWish(item._id);
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
