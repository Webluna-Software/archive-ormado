import React, { useContext, useEffect, useState } from 'react'
import Carousel from './Carousel';
import productImg from "../../assets/img/product-img.png"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ApiLinkContext from '../../context/ApiLinkContext';
import slugify from 'slugify';
const ProductDetails = () => {

  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeBackground = (size) => {
    setSelectedSize(prevSize => prevSize === size ? null : size);
  };

  const {ApiLink}=useContext(ApiLinkContext)
  const {id}=useParams()
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    axios.get(`${ApiLink}/product/${id}`)
      .then((res) => {
        console.log(res.data, "ProductDetailsData");
        setProductDetails(res.data.product); 
      })
  }, []);
  console.log(productDetails);

  // const a = productDetails.products

  // console.log(a);
  // const productdetailsdata = [productDetails].find(p => p.id === slug);

  // console.log(productdetailsdata,'yoxlama',);

  return (
    <section className='productdetails-page'>
      <div className="img-transparent">
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

      <div className="row my-5">
        <div className="col-sm-12 col-md-12 col-lg-6">
          <Carousel />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 details-content">
          <div className='headline'>
            <h3>{productDetails.title}</h3>
            <span >{productDetails.stock===true ? "In Stock" : "Not In Stock"}</span>
          </div>

          <div className="review">
            <div className="icons-div">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <p>4 Reviews</p>
            <a href="">Write a review</a>
          </div>

          <div className="price-div">
            <p className='preprice'><del>${productDetails.firstPrice}</del></p>
            <p className="lastprice">${productDetails.lastPrice}</p>
            <div className='discount'><p>%64 Off</p></div>
          </div>

          <div className="size-div">
            <p>Size:</p>
            <span className={selectedSize === '150ml' ? 'selected' : ''}
              onClick={() => handleSizeBackground('150ml')}>150ml</span>
            <span className={selectedSize === '250ml' ? 'selected' : ''}
              onClick={() => handleSizeBackground('250ml')}>250ml</span>
            <span className={selectedSize === '350ml' ? 'selected' : ''}
              onClick={() => handleSizeBackground('350ml')}>350ml</span>
          </div>

          <div className="information-div">
            <p>{productDetails.description}
            </p>
          </div>

          <div className="details-information-box">
            <h6>All of our products can contain small traces of allergens.</h6>
            <p>All our products are handled with care, despite that there is a risk that different
              products can come into contact with each other and contamination of allergens can occur.
            </p>
            <a href="/productinformation">Read more in our allergen guide.</a>
          </div>

          <div className="category">
            <p>Category: <span>Coffee</span></p>
          </div>

          <div className="addtocart">
            <div className="counts">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#6B4A3C" />
                <path d="M12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z" fill="#6B4A3C" />
              </svg>
              <span>5</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#6B4A3C" />
                <path d="M15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H15C15.4142 11.25 15.75 11.5858 15.75 12Z" fill="#6B4A3C" />
              </svg>
            </div>
            <button>Add to cart</button>
          </div>

          <div className="share">
            <p>Share:</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M23.0306 7.28105L20.2275 10.0842C19.6612 16.6485 14.1253 21.7504 7.49999 21.7504C6.13874 21.7504 5.01655 21.5348 4.16436 21.1092C3.47717 20.7651 3.19592 20.3967 3.12561 20.2917C3.06291 20.1976 3.02228 20.0907 3.00674 19.9787C2.99119 19.8668 3.00115 19.7528 3.03586 19.6452C3.07056 19.5377 3.12913 19.4394 3.20717 19.3577C3.28521 19.2759 3.38072 19.2129 3.48655 19.1732C3.51092 19.1639 5.75905 18.3004 7.18686 16.657C6.39503 16.006 5.70381 15.2414 5.13561 14.3882C3.97311 12.6623 2.67186 9.66417 3.07311 5.18386C3.08583 5.0415 3.13896 4.90573 3.22625 4.79256C3.31354 4.67938 3.43136 4.5935 3.56582 4.54503C3.70028 4.49657 3.8458 4.48753 3.98522 4.51899C4.12465 4.55045 4.25218 4.6211 4.3528 4.72261C4.38561 4.75542 7.4728 7.82574 11.2472 8.82136V8.25042C11.2457 7.65173 11.3641 7.0588 11.5953 6.50655C11.8265 5.9543 12.1659 5.4539 12.5934 5.0348C13.0086 4.62017 13.5027 4.2929 14.0464 4.07231C14.5902 3.85172 15.1726 3.74227 15.7594 3.75042C16.5464 3.75819 17.3181 3.96947 17.9994 4.36374C18.6807 4.75801 19.2483 5.32184 19.6472 6.00042H22.5C22.6484 6.00031 22.7935 6.04423 22.917 6.12663C23.0404 6.20904 23.1366 6.32621 23.1935 6.46333C23.2503 6.60045 23.2651 6.75134 23.2361 6.8969C23.2071 7.04247 23.1356 7.17616 23.0306 7.28105Z" fill="#D59729" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M16.5 2.25H7.5C6.10807 2.25149 4.77358 2.80509 3.78933 3.78933C2.80509 4.77358 2.25149 6.10807 2.25 7.5V16.5C2.25149 17.8919 2.80509 19.2264 3.78933 20.2107C4.77358 21.1949 6.10807 21.7485 7.5 21.75H16.5C17.8919 21.7485 19.2264 21.1949 20.2107 20.2107C21.1949 19.2264 21.7485 17.8919 21.75 16.5V7.5C21.7485 6.10807 21.1949 4.77358 20.2107 3.78933C19.2264 2.80509 17.8919 2.25149 16.5 2.25ZM12 16.5C11.11 16.5 10.24 16.2361 9.49993 15.7416C8.75991 15.2471 8.18314 14.5443 7.84254 13.7221C7.50195 12.8998 7.41283 11.995 7.58647 11.1221C7.7601 10.2492 8.18868 9.44736 8.81802 8.81802C9.44736 8.18868 10.2492 7.7601 11.1221 7.58647C11.995 7.41283 12.8998 7.50195 13.7221 7.84254C14.5443 8.18314 15.2471 8.75991 15.7416 9.49993C16.2361 10.24 16.5 11.11 16.5 12C16.4988 13.1931 16.0243 14.337 15.1806 15.1806C14.337 16.0243 13.1931 16.4988 12 16.5ZM17.625 7.5C17.4025 7.5 17.185 7.43402 17 7.3104C16.815 7.18679 16.6708 7.01109 16.5856 6.80552C16.5005 6.59995 16.4782 6.37375 16.5216 6.15552C16.565 5.93729 16.6722 5.73684 16.8295 5.5795C16.9868 5.42217 17.1873 5.31502 17.4055 5.27162C17.6238 5.22821 17.85 5.25049 18.0555 5.33564C18.2611 5.42078 18.4368 5.56498 18.5604 5.74998C18.684 5.93499 18.75 6.1525 18.75 6.375C18.75 6.67337 18.6315 6.95952 18.4205 7.1705C18.2095 7.38147 17.9234 7.5 17.625 7.5ZM15 12C15 12.5933 14.8241 13.1734 14.4944 13.6667C14.1648 14.1601 13.6962 14.5446 13.1481 14.7716C12.5999 14.9987 11.9967 15.0581 11.4147 14.9424C10.8328 14.8266 10.2982 14.5409 9.87868 14.1213C9.45912 13.7018 9.1734 13.1672 9.05764 12.5853C8.94189 12.0033 9.0013 11.4001 9.22836 10.8519C9.45542 10.3038 9.83994 9.83524 10.3333 9.50559C10.8266 9.17595 11.4067 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12Z" fill="#D59729" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21.75 11.9989C21.747 14.3818 20.8727 16.6814 19.2918 18.4645C17.7109 20.2475 15.5326 21.391 13.1672 21.6795C13.1145 21.6855 13.0612 21.6802 13.0107 21.664C12.9602 21.6479 12.9137 21.6212 12.8743 21.5858C12.8349 21.5503 12.8034 21.5069 12.782 21.4585C12.7606 21.41 12.7497 21.3575 12.75 21.3045V14.2489H15C15.1028 14.2491 15.2046 14.2282 15.299 14.1874C15.3934 14.1467 15.4784 14.0869 15.5487 14.0119C15.6191 13.9369 15.6732 13.8483 15.7078 13.7515C15.7425 13.6547 15.7568 13.5518 15.75 13.4492C15.7335 13.2563 15.6445 13.0769 15.501 12.947C15.3575 12.817 15.1701 12.7463 14.9766 12.7489H12.75V10.4989C12.75 10.1011 12.9081 9.71952 13.1894 9.43822C13.4707 9.15691 13.8522 8.99888 14.25 8.99888H15.75C15.8528 8.9991 15.9546 8.97819 16.049 8.93743C16.1434 8.89667 16.2284 8.83694 16.2987 8.76194C16.3691 8.68695 16.4232 8.59829 16.4578 8.50148C16.4925 8.40468 16.5068 8.30178 16.5 8.19919C16.4834 8.006 16.3942 7.8263 16.2503 7.69632C16.1064 7.56635 15.9186 7.49579 15.7247 7.49888H14.25C13.4544 7.49888 12.6913 7.81495 12.1287 8.37756C11.5661 8.94017 11.25 9.70323 11.25 10.4989V12.7489H9.00002C8.8972 12.7487 8.79544 12.7696 8.70105 12.8103C8.60666 12.8511 8.52165 12.9108 8.45132 12.9858C8.38098 13.0608 8.32682 13.1495 8.29219 13.2463C8.25756 13.3431 8.24321 13.446 8.25002 13.5486C8.26661 13.7418 8.35585 13.9215 8.49974 14.0514C8.64363 14.1814 8.83146 14.252 9.02533 14.2489H11.25V21.3064C11.2503 21.3593 11.2395 21.4117 11.2181 21.4601C11.1967 21.5085 11.1653 21.5518 11.126 21.5873C11.0867 21.6227 11.0403 21.6494 10.99 21.6656C10.9396 21.6818 10.8864 21.6872 10.8338 21.6814C8.40504 21.3856 6.17586 20.1888 4.58746 18.3278C2.99907 16.4668 2.16722 14.0774 2.25658 11.6323C2.44408 6.56981 6.54471 2.45419 11.611 2.25732C12.9226 2.20651 14.231 2.42077 15.458 2.88728C16.6849 3.35379 17.8051 4.06298 18.7517 4.97241C19.6982 5.88183 20.4516 6.97283 20.9668 8.18013C21.482 9.38744 21.7484 10.6862 21.75 11.9989Z" fill="#D59729" />
            </svg>
          </div>
        </div>
      </div>
      

      <div className="review-rates">
        <h5 className='my-3'>Review and Rates</h5>
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Wilson Kirlin</h5>
            <div className="rating-stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <p className="card-text">Consequatur sit sint est asperiores temporibus dolores.
              Soluta voluptas culpa nesciunt consequuntur iusto et omnis voluptatem. Accusamus
              qui officiis non. Saepe qui occaecati. Rerum voluptas commodi sit cupiditate eius
              eligendi. Cum laborum facere aut quam consequatur.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails