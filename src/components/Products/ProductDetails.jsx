import React, { useContext, useEffect, useState } from 'react'
import productImg from "../../assets/img/product-img.png"
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import ApiLinkContext from '../../context/ApiLinkContext';
import Carousel from './Carousel';

const ProductDetails = () => {

  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeBackground = (size) => {
    setSelectedSize(prevSize => prevSize === size ? null : size);
  };

  const { ApiLink } = useContext(ApiLinkContext)
  const { id } = useParams()
  const [productDetails, setProductDetails] = useState([]);
  const path = window.location.pathname;
  useEffect(() => {
    axios.get(`${ApiLink}/product/${id}`)
      .then((res) => {
        console.log(res.data, "ProductDetailsData");
        setProductDetails(res.data.product);
      })
  }, [path]);


  return (
      <>
      
      {productDetails.length === 0 ?<h1>Loading...</h1>:
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
            <Link to="/products">
              <button>
                Shop now
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-sm-12 col-md-12 col-lg-6">
          <Carousel images={productDetails.images} />

        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 details-content">
          <div className='headline'>
            <h3>{productDetails.title}</h3>
            <span >{productDetails.stock === true ? "In Stock" : "Not In Stock"}</span>
          </div>


          <div className="price-div mt-5">
            <p className='preprice'><del>${productDetails.price}</del></p>
            <p className="lastprice">${productDetails.salePrice}</p>
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
            <p>{productDetails.miniDescription}
            </p>
          </div>

          <div className="details-information-box">
            <p>{productDetails.description}
            </p>
            {/* <a href="/productinformation">Read more in our allergen guide.</a> */}
          </div>

          <div className="category">
            <p>Category: <span>{productDetails.category}</span></p>
          </div>



        
        </div>
      </div>



    </section>
}
      </>
  )
}

export default ProductDetails