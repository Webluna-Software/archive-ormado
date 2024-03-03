import React, { useContext, useEffect, useState } from "react";
import productImg from "../assets/img/products-banner.png"
import ApiLinkContext from "../context/ApiLinkContext";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const {ApiLink} = useContext(ApiLinkContext)
  const [products,setProducts] = useState([])

  useEffect(()=>{
   axios.get(`${ApiLink}/product`)
   .then((res)=>{
     setProducts(res.data.products)
     console.log(res.data.products ,"Products Data")
   })
  },[])
  const [showCategories, setShowCategories] = useState(true);
  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };
  const [showPriceSlider, setPriceSlider] = useState(true);
  const togglePriceSlider = () => {
    setPriceSlider(!showPriceSlider);
  };
  const [minPrice, setMinPrice] = useState('0');
  const [maxPrice, setMaxPrice] = useState('100');
  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };
  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };
  return (
    <>
      <section className="container-fluid">
        <div className="products-page row pb-5 my-5 d-flex justify-content-center">
          {/* <div className="col-md-3">
            <div className="categories-headline d-flex align-items-center justify-content-between"
              onClick={toggleCategories}
            >
              <h5>All Categories</h5>
              <i
                className={`fa-solid ${showCategories ? "fa-chevron-up" : "fa-chevron-down"
                  }`}
              ></i>
            </div>

            <div className={`categories ${showCategories ? "" : "closed"}`}>
              <div className="hot-drinks d-flex">
                <input type="radio" name="" id="radio" />
                <label>Hot Drinks (25)</label>
              </div>
              <div className="hot-drinks d-flex">
                <input type="radio" name="" id="radio" />
                <label>Cold Drinks (125)</label>
              </div>
              <div className="hot-drinks d-flex">
                <input type="radio" name="" id="radio" />
                <label>Hot Drinks (25)</label>
              </div>
              <div className="hot-drinks d-flex">
                <input type="radio" name="" id="radio" />
                <label>Sweets (54)</label>
              </div>
              <div className="hot-drinks d-flex">
                <input type="radio" name="" id="radio" />
                <label>Merchandise (47)</label>
              </div>
            </div>

            <div className="price-slider my-lg-5">
              <div
                className="price-slider-headline d-flex align-items-center justify-content-between"
                onClick={togglePriceSlider}
              >
                <h5>Price</h5>
                <i
                  className={`fa-solid ${showPriceSlider ? "fa-chevron-up" : "fa-chevron-down"
                    }`}
                ></i>
              </div>
              <div
                className={`price-slider-content ${showPriceSlider ? "" : "closed"
                  }`}
              >
                <div className="price-inputs">
                  <label>
                    <input
                      type="text"
                      value={minPrice}
                      onChange={handleMinPriceChange}
                    />
                  </label>
                  <span></span>
                  <label>
                    <input
                      type="text"
                      value={maxPrice}
                      onChange={handleMaxPriceChange}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="feature-product d-none d-md-block d-lg-block">
              <h5>Feature Product</h5>
              <div className="card mb-3 d-flex align-items-center justify-content-center">
                <div className="row g-0">
                  <div className="col-md-3">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/cb7e/d978/40b66118512d427e3234eca4c9b083ae?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TiiEXjzPxHx5Go7Q~wZOBV6cxKtFUzV7zaZKUiP~jKBcaU1uRkvpiC7hJtGkeitSPRVcD6mDShrptqZnh5sJPJb6g2SxhWOK~6Ypsp7pnjy0oHjNQDiQc8SXK0SHkhcQ8YUl2z3-2oDN-WelYJyf8C4LCvJFDh9IbTok-y4irdnEcESFe74Ka1GLNE5C0TLuY1VKXhf-z86x8CgmjFtU9VJniK7EaSkr1S2TfX5ghcjwvpQLj73y-TMaMJcdeR7M6yBMX8fOjksAte665720jeCU7hMo37WWAJ9~vjAgZ8GNBf07ePpG~qCFtE6rVXa7f0zwooCVGZNgH-BNEevqNQ__"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <h5 className="card-title">Ormado Iced Coffee</h5>
                      <div className="card-text">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </div>
                      <p className="card-price"><del>$20.99</del> <span>$32.00</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3 d-flex align-items-center justify-content-center">
                <div className="row g-0">
                  <div className="col-md-3">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/cb7e/d978/40b66118512d427e3234eca4c9b083ae?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TiiEXjzPxHx5Go7Q~wZOBV6cxKtFUzV7zaZKUiP~jKBcaU1uRkvpiC7hJtGkeitSPRVcD6mDShrptqZnh5sJPJb6g2SxhWOK~6Ypsp7pnjy0oHjNQDiQc8SXK0SHkhcQ8YUl2z3-2oDN-WelYJyf8C4LCvJFDh9IbTok-y4irdnEcESFe74Ka1GLNE5C0TLuY1VKXhf-z86x8CgmjFtU9VJniK7EaSkr1S2TfX5ghcjwvpQLj73y-TMaMJcdeR7M6yBMX8fOjksAte665720jeCU7hMo37WWAJ9~vjAgZ8GNBf07ePpG~qCFtE6rVXa7f0zwooCVGZNgH-BNEevqNQ__"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <h5 className="card-title">Ormado Iced Coffee</h5>
                      <div className="card-text">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </div>
                      <p className="card-price"><del>$20.99</del> <span>$32.00</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3 d-flex align-items-center justify-content-center">
                <div className="row g-0">
                  <div className="col-md-3">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/cb7e/d978/40b66118512d427e3234eca4c9b083ae?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TiiEXjzPxHx5Go7Q~wZOBV6cxKtFUzV7zaZKUiP~jKBcaU1uRkvpiC7hJtGkeitSPRVcD6mDShrptqZnh5sJPJb6g2SxhWOK~6Ypsp7pnjy0oHjNQDiQc8SXK0SHkhcQ8YUl2z3-2oDN-WelYJyf8C4LCvJFDh9IbTok-y4irdnEcESFe74Ka1GLNE5C0TLuY1VKXhf-z86x8CgmjFtU9VJniK7EaSkr1S2TfX5ghcjwvpQLj73y-TMaMJcdeR7M6yBMX8fOjksAte665720jeCU7hMo37WWAJ9~vjAgZ8GNBf07ePpG~qCFtE6rVXa7f0zwooCVGZNgH-BNEevqNQ__"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <h5 className="card-title">Ormado Iced Coffee</h5>
                      <div className="card-text">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </div>
                      <p className="card-price"><del>$20.99</del> <span>$32.00</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="col-md-9">
            <div className="img-transparent d-none d-md-block d-lg-block">
              <div className="image-container">
                <img
                  src={productImg}
                  className="img-fluid rounded-start"
                  alt="..."
                />
                <div className="img-text-context">
                  <h4>Best Deals</h4>
                  <h2>Sale of the Month</h2>
                  <button>
                    Shop now
                  </button>
                </div>
              </div>
            </div>

            {/* <div className="sort-divs d-lg-flex d-md-flex mt-lg-5 mt-md-5 mb-3">
              <div className="sort-by-featured ">
                <label for="">Sort by:</label>
                <select name="" id="">
                  <option value="">Featured</option>
                  <option value="">Featured</option>
                </select>
              </div>
              <p>Showing 1-8 of 20 result</p>
              <p>Show: 8</p>
            </div> */}
            <div className="product-cards d-none d-md-block d-lg-block p-0 mt-5">
              <div className="yourormado-products row g-3">
                {products.map((fd,i)=>(
                  <div className="col-12 col-sm-6 col-md-4">
                  <div className="card w-100" key={i}>
                  <Link to={`/productsdetails/${fd._id}`}><img src={fd.coverImage} className="card-img-top py-5" alt="..." /></Link>
                    <div className="wishlist-modal">
                      {/* <div className="addtowishlist-box mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.62436 4.42508C3.96537 5.18341 2.75 6.98712 2.75 9.13799C2.75 11.3354 3.64922 13.0291 4.93829 14.4807C6.00072 15.677 7.28684 16.6685 8.54113 17.6355C8.83904 17.8652 9.13515 18.0935 9.42605 18.3228C9.95208 18.7375 10.4213 19.1014 10.8736 19.3657C11.3261 19.6301 11.6904 19.7509 12 19.7509C12.3096 19.7509 12.6739 19.6301 13.1264 19.3657C13.5787 19.1014 14.0479 18.7375 14.574 18.3228C14.8649 18.0935 15.161 17.8652 15.4589 17.6355C16.7132 16.6685 17.9993 15.677 19.0617 14.4807C20.3508 13.0291 21.25 11.3354 21.25 9.13799C21.25 6.98712 20.0346 5.18341 18.3756 4.42508C16.7639 3.68836 14.5983 3.88346 12.5404 6.02162C12.399 6.16852 12.2039 6.25152 12 6.25152C11.7961 6.25152 11.601 6.16852 11.4596 6.02162C9.40166 3.88346 7.23607 3.68836 5.62436 4.42508ZM12 4.4597C9.68795 2.39113 7.09896 2.10176 5.00076 3.06085C2.78471 4.07381 1.25 6.42592 1.25 9.13799C1.25 11.8035 2.3605 13.8369 3.81672 15.4767C4.98287 16.7898 6.41022 17.8888 7.67083 18.8595C7.95659 19.0795 8.23378 19.2929 8.49742 19.5008C9.00965 19.9046 9.55954 20.3352 10.1168 20.6608C10.6739 20.9863 11.3096 21.2509 12 21.2509C12.6904 21.2509 13.3261 20.9863 13.8832 20.6608C14.4405 20.3352 14.9903 19.9046 15.5026 19.5008C15.7662 19.2929 16.0434 19.0795 16.3292 18.8595C17.5898 17.8888 19.0171 16.7898 20.1833 15.4767C21.6395 13.8369 22.75 11.8035 22.75 9.13799C22.75 6.42592 21.2153 4.07381 18.9992 3.06085C16.901 2.10176 14.3121 2.39113 12 4.4597Z" fill="#4A3024" />
                        </svg>
                      </div> */}
                      <Link to={`/productsdetails/${fd._id}`}>
                      <div className="quick-view">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path opacity="0.5" d="M2 12C2 13.6394 2.42496 14.1915 3.27489 15.2957C4.97196 17.5004 7.81811 20 12 20C16.1819 20 19.028 17.5004 20.7251 15.2957C21.575 14.1915 22 13.6394 22 12C22 10.3606 21.575 9.80853 20.7251 8.70433C19.028 6.49956 16.1819 4 12 4C7.81811 4 4.97196 6.49956 3.27489 8.70433C2.42496 9.80853 2 10.3606 2 12Z" fill="#4A3024" />
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z" fill="#4A3024" />
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
                        <i className="fa-regular fa-star"></i>
                      </div>
                      <div className="price-addtocart">
                        <div className="price-box">
                          <span><del>${fd.firstPrice}</del></span>
                          <p>${fd.lastPrice}</p>
                        </div>
                        {/* <div className="addtocart-box">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path opacity="0.5" d="M4.0828 11.8943C4.52171 9.55339 4.74117 8.38295 5.57434 7.69147C6.40752 7 7.59835 7 9.98003 7H14.0209C16.4026 7 17.5934 7 18.4266 7.69147C19.2598 8.38295 19.4792 9.55339 19.9181 11.8943L20.6681 15.8943C21.2853 19.186 21.5939 20.8318 20.6942 21.9159C19.7945 23 18.12 23 14.7709 23H9.23003C5.88097 23 4.20644 23 3.30672 21.9159C2.40701 20.8318 2.7156 19.186 3.3328 15.8943L4.0828 11.8943Z" fill="#4A3024" />
                            <path d="M9.75 5.98436C9.75 4.74172 10.7574 3.73436 12 3.73436C13.2426 3.73436 14.25 4.74172 14.25 5.98436V6.98436C14.816 6.98454 15.3119 6.9861 15.7499 6.99924C15.75 6.99429 15.75 6.98933 15.75 6.98436V5.98436C15.75 3.91329 14.0711 2.23436 12 2.23436C9.92893 2.23436 8.25 3.91329 8.25 5.98436V6.98436C8.25 6.98934 8.25005 6.99431 8.25015 6.99927C8.68814 6.98611 9.18397 6.98456 9.75 6.98438V5.98436Z" fill="#4A3024" />
                            <path d="M9.87823 15.7503C10.1875 16.6252 11.0219 17.2502 12.0004 17.2502C12.9789 17.2502 13.8133 16.6252 14.1226 15.7503C14.2606 15.3597 14.6891 15.155 15.0796 15.2931C15.4702 15.4311 15.6749 15.8596 15.5368 16.2501C15.0224 17.7056 13.6343 18.7502 12.0004 18.7502C10.3665 18.7502 8.97841 17.7056 8.46397 16.2501C8.32594 15.8596 8.53063 15.4311 8.92117 15.2931C9.31171 15.155 9.7402 15.3597 9.87823 15.7503Z" fill="#4A3024" />
                          </svg>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </div>
            {/* <div className="img-transparent my-lg-5 mt-md-3">
              <div className="image-container">
                <img
                  src={productImg}
                  className="img-fluid rounded-start"
                  alt="..."
                />
                <div className="img-text-context">
                  <h4>Best Deals</h4>
                  <h2>Sale of the Month</h2>
                  <button>
                    Shop now
                  </button>
                </div>
              </div>
            </div>
            <div className="product-cards p-0">
              <div className="yourormado-products row g-3 ">
                {products.map((fd,i)=>(
                  <div className="col-12 col-sm-6 col-md-4">
                  <div className="card w-100" key={i}>
                    <img src={fd.coverImage} className="card-img-top py-5" alt="..." />
                    <div className="wishlist-modal">
                      <div className="addtowishlist-box mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.62436 4.42508C3.96537 5.18341 2.75 6.98712 2.75 9.13799C2.75 11.3354 3.64922 13.0291 4.93829 14.4807C6.00072 15.677 7.28684 16.6685 8.54113 17.6355C8.83904 17.8652 9.13515 18.0935 9.42605 18.3228C9.95208 18.7375 10.4213 19.1014 10.8736 19.3657C11.3261 19.6301 11.6904 19.7509 12 19.7509C12.3096 19.7509 12.6739 19.6301 13.1264 19.3657C13.5787 19.1014 14.0479 18.7375 14.574 18.3228C14.8649 18.0935 15.161 17.8652 15.4589 17.6355C16.7132 16.6685 17.9993 15.677 19.0617 14.4807C20.3508 13.0291 21.25 11.3354 21.25 9.13799C21.25 6.98712 20.0346 5.18341 18.3756 4.42508C16.7639 3.68836 14.5983 3.88346 12.5404 6.02162C12.399 6.16852 12.2039 6.25152 12 6.25152C11.7961 6.25152 11.601 6.16852 11.4596 6.02162C9.40166 3.88346 7.23607 3.68836 5.62436 4.42508ZM12 4.4597C9.68795 2.39113 7.09896 2.10176 5.00076 3.06085C2.78471 4.07381 1.25 6.42592 1.25 9.13799C1.25 11.8035 2.3605 13.8369 3.81672 15.4767C4.98287 16.7898 6.41022 17.8888 7.67083 18.8595C7.95659 19.0795 8.23378 19.2929 8.49742 19.5008C9.00965 19.9046 9.55954 20.3352 10.1168 20.6608C10.6739 20.9863 11.3096 21.2509 12 21.2509C12.6904 21.2509 13.3261 20.9863 13.8832 20.6608C14.4405 20.3352 14.9903 19.9046 15.5026 19.5008C15.7662 19.2929 16.0434 19.0795 16.3292 18.8595C17.5898 17.8888 19.0171 16.7898 20.1833 15.4767C21.6395 13.8369 22.75 11.8035 22.75 9.13799C22.75 6.42592 21.2153 4.07381 18.9992 3.06085C16.901 2.10176 14.3121 2.39113 12 4.4597Z" fill="#4A3024" />
                        </svg>
                      </div>
                      <div className="quick-view">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path opacity="0.5" d="M2 12C2 13.6394 2.42496 14.1915 3.27489 15.2957C4.97196 17.5004 7.81811 20 12 20C16.1819 20 19.028 17.5004 20.7251 15.2957C21.575 14.1915 22 13.6394 22 12C22 10.3606 21.575 9.80853 20.7251 8.70433C19.028 6.49956 16.1819 4 12 4C7.81811 4 4.97196 6.49956 3.27489 8.70433C2.42496 9.80853 2 10.3606 2 12Z" fill="#4A3024" />
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z" fill="#4A3024" />
                        </svg>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Ormado Energy Drink</h5>
                      <div className="rating-stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </div>
                      <div className="price-addtocart">
                        <div className="price-box">
                          <span><del>$18.00</del></span>
                          <p>$20.00</p>
                        </div>
                        <div className="addtocart-box">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path opacity="0.5" d="M4.0828 11.8943C4.52171 9.55339 4.74117 8.38295 5.57434 7.69147C6.40752 7 7.59835 7 9.98003 7H14.0209C16.4026 7 17.5934 7 18.4266 7.69147C19.2598 8.38295 19.4792 9.55339 19.9181 11.8943L20.6681 15.8943C21.2853 19.186 21.5939 20.8318 20.6942 21.9159C19.7945 23 18.12 23 14.7709 23H9.23003C5.88097 23 4.20644 23 3.30672 21.9159C2.40701 20.8318 2.7156 19.186 3.3328 15.8943L4.0828 11.8943Z" fill="#4A3024" />
                            <path d="M9.75 5.98436C9.75 4.74172 10.7574 3.73436 12 3.73436C13.2426 3.73436 14.25 4.74172 14.25 5.98436V6.98436C14.816 6.98454 15.3119 6.9861 15.7499 6.99924C15.75 6.99429 15.75 6.98933 15.75 6.98436V5.98436C15.75 3.91329 14.0711 2.23436 12 2.23436C9.92893 2.23436 8.25 3.91329 8.25 5.98436V6.98436C8.25 6.98934 8.25005 6.99431 8.25015 6.99927C8.68814 6.98611 9.18397 6.98456 9.75 6.98438V5.98436Z" fill="#4A3024" />
                            <path d="M9.87823 15.7503C10.1875 16.6252 11.0219 17.2502 12.0004 17.2502C12.9789 17.2502 13.8133 16.6252 14.1226 15.7503C14.2606 15.3597 14.6891 15.155 15.0796 15.2931C15.4702 15.4311 15.6749 15.8596 15.5368 16.2501C15.0224 17.7056 13.6343 18.7502 12.0004 18.7502C10.3665 18.7502 8.97841 17.7056 8.46397 16.2501C8.32594 15.8596 8.53063 15.4311 8.92117 15.2931C9.31171 15.155 9.7402 15.3597 9.87823 15.7503Z" fill="#4A3024" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )).slice(0,3)}
              </div>
            </div> */}

            {/* <div className="feature-product d-block d-md-none d-lg-none">
              <h5 className="my-lg-5">Feature Product</h5>
              <div className="feature-card d-flex mb-3">
                <div className="img-div-first">
                  <img
                    src="https://ormado.webluna.org/cdn/img/drink2.png"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="text-div-second">
                  <div className="card-body-test">
                    <h5 className="card-title">Ormado Energy Drink</h5>
                    <div className="card-text">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                    <p className="card-price"><del>$20.99</del> <span>$32.00</span></p>
                  </div>
                </div>
              </div>

              <div className="feature-card d-flex mb-3">
                <div className="img-div-first">
                  <img
                    src="https://ormado.webluna.org/cdn/img/drink2.png"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="text-div-second">
                  <div className="card-body-test">
                    <h5 className="card-title">Ormado Energy Drink</h5>
                    <div className="card-text">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                    <p className="card-price"><del>$20.99</del> <span>$32.00</span></p>
                  </div>
                </div>
              </div>

              <div className="feature-card d-flex mb-3">
                <div className="img-div-first">
                  <img
                    src="https://ormado.webluna.org/cdn/img/drink2.png"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="text-div-second">
                  <div className="card-body-test">
                    <h5 className="card-title">Ormado Energy Drink</h5>
                    <div className="card-text">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                    <p className="card-price"><del>$20.99</del> <span>$32.00</span></p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;