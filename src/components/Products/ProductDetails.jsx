import { useCallback, useContext, useEffect, useState } from 'react'
import productImg from "../../assets/img/products-banner.png"
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ApiLinkContext from '../../context/ApiLinkContext';
import Carousel from './Carousel';
import Preloader from "../../pages/PreLoader"
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';
import { validateUserID } from '../../utils/user';
import { getCookie } from '../../utils/cookie';

import Modal from '../modal/modal';

// eslint-disable-next-line react/prop-types
const ProductDetails = ({_id}) => {

  // const shareUrl = "https://ormado.de/";

  // const [selectedSize, setSelectedSize] = useState(null);

  // const handleSizeBackground = (size) => {
  //   setSelectedSize(prevSize => prevSize === size ? null : size);
  // };

  const { ApiLink } = useContext(ApiLinkContext)
  const { id } = useParams()
  const [productDetails, setProductDetails] = useState([]);
  const path = window.location.pathname;


  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', body: '' });

  const handleUserCheck = () => {
    if (!userID) {
      setModalContent({ title: "Please Login", body: "Please login first!" });
      setShowModal(true);
      // window.location.reload();
      return false;
    }
    return true;
  };

  useEffect(() => {
    axios.get(`${ApiLink}/product/${id}`)
      .then((res) => {
        // console.log(res.data, "ProductDetailsData");
        setProductDetails(res.data.product);
      })
  }, [ApiLink, id]);

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

const userID = validateUserID();


  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const navigate=useNavigate()
  const localCart=getCookie("cartItems")
  const cartData = localCart ? JSON.parse(localCart).find((item) => item._id === _id) : false;
  const [ cartStatus, setCartStatus] = useState(cartData ? 'active' : 'disabled');

  const findCart = (_id) => {
    // const localCart = localStorage.getItem('cartItems');
    // const localCart=getCookie("cartItems")
    const cartData = localCart ? JSON.parse(localCart).find((item) => item._id === _id) : false;
    return cartData ? true : false;
  };

  const cartClick = useCallback((_id, title, price, salePrice, coverImage, stock) => {
    if (handleUserCheck()) {
      if (findCart(_id)) {
        navigate('/basket');
      } else {
        dispatch(addToCart({ _id, coverImage, title, salePrice, quantity, price, stock }));
        setCartStatus('active');
      }
    }
  }, [userID, navigate, dispatch, quantity]);

  // const cartClick = useCallback(
  //   (_id, title, price, salePrice, coverImage,stock) => {
  //     if (!userID) {
  //       alert("Please login first!");
  //       return;
  //     }
  //     if (findCart(_id)) {
  //       navigate('/basket');
  //     } else {
  //       dispatch(addToCart({ _id, coverImage, title, salePrice, quantity, price ,stock}));
  //       setCartStatus('active');
  //     }
  //   },
  //   [userID, navigate, dispatch, quantity]
  // );


  return (
    <>
      {productDetails.length === 0 ? <Preloader/> :
        <section className='productdetails-page'>
          <div className="img-transparent">
            <div className="image-container">
              <img
                src={productImg}
                className="img-fluid rounded"
                alt="..."
              />
              <div className="img-text-context">
                <h4>New Product</h4>
                <h2>Ormado Espresso Barista Edition</h2>
              </div>
            </div>
          </div>

          <div className="row my-5 pt-5">
            <div className="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center">
              <Carousel images={productDetails.images} products={productDetails} _id={productDetails._id} />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 details-content">
              <div className='headline'>
                <h3>{productDetails.title}</h3>
                <span className={`text-white ${productDetails.stock === true ? "bg-success" : "bg-danger"}`}>{productDetails.stock === true ? "In Stock" : "Not In Stock"}</span>
              </div>

              <div className="review">
                <div className="icons-div">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p>4 Reviews</p>
                <a href="#">Write a review</a>
              </div>

              <div className="price-div">
                <p className='preprice'><del>${productDetails.price}</del></p>
                <p className="lastprice">${productDetails.salePrice}</p>
                {/* <div className='discount'><p>%64 Off</p></div> */}
              </div>
            {/*     
              <div className="size-div">
                <p>Size:</p>
                <span className={selectedSize === '150ml' ? 'selected' : ''}
                  onClick={() => handleSizeBackground('150ml')}>150ml</span>
                <span className={selectedSize === '250ml' ? 'selected' : ''}
                  onClick={() => handleSizeBackground('250ml')}>250ml</span>
                <span className={selectedSize === '350ml' ? 'selected' : ''}
                  onClick={() => handleSizeBackground('350ml')}>350ml</span>
              </div> */}

              <div className="information-div">
                <p>
                <div dangerouslySetInnerHTML={{ __html:  productDetails.miniDescription }} />
                </p>
              </div>

              <div className="details-information-box">
                <div dangerouslySetInnerHTML={{ __html: productDetails.description }} />
                <a href="/productinformation">Read more in our allergen guide.</a>
              </div>

              <div className="category">
                <p>Category: <span>{productDetails.category}</span></p>
              </div>
              
              <div className="addtocart">
                <div className="counts">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={handleIncrement}>
                    <path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#6B4A3C" />
                    <path d="M12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z" fill="#6B4A3C" />
                  </svg>
                  <span>{quantity}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={handleDecrement}>
                    <path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#6B4A3C" />
                    <path d="M15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H15C15.4142 11.25 15.75 11.5858 15.75 12Z" fill="#6B4A3C" />
                  </svg>
                </div>
                <button
                //  onClick={() => { handleAddToCart({ coverImage, title, price,salePrice, _id }); }}
                onClick={() => cartClick(
                        productDetails._id,
                        productDetails.title,
                        productDetails.price,
                        productDetails.salePrice,
                        productDetails.coverImage,
                        productDetails.stock,
                        quantity,
                
                      )}
                // onClick={()=>{userID ? handleAddToCart(productDetails) : alert("please login first")}}
                 >Add to cart</button>
              </div>
           

              <div className="share">
                <p className='pt-3'>Share:</p>
                <FacebookShareButton
                    url={`https://ormado.de/${path}`}
                    quote={"Bizi Seçtiyiniz üçün təşəkkür edirik"}
                    hashtag={"I found a great product. You should definitely try it 🤩!"}
                    className="FacebookShareButton"
                  >
                    <FacebookIcon size={30} round={true} className="sharefb" />
                  </FacebookShareButton>
                  
                  <WhatsappShareButton
                     url={`https://ormado.de${path}`}
                    quote={"Bizi Seçtiyiniz üçün təşəkkür edirik"}
                    hashtag={"I found a great product. You should definitely try it 🤩!"}
                  >
                    <WhatsappIcon size={30} round={true} />
                  </WhatsappShareButton>

                  <LinkedinShareButton
                     url={`https://ormado.de${path}`}
                    quote={"Bizi Seçtiyiniz üçün təşəkkür edirik"}
                    hashtag={"I found a great product. You should definitely try it 🤩!"}
                  >
                    <LinkedinIcon size={30} round={true} />
                  </LinkedinShareButton>

                  <TwitterShareButton
                     url={`https://ormado.de${path}`}
                    quote={"Bizi Seçtiyiniz üçün təşəkkür edirik"}
                    hashtag={"I found a great product. You should definitely try it 🤩!"}
                  >
                    <TwitterIcon size={30} round={true} />
                  </TwitterShareButton>
              </div>
            </div>
          </div>
        </section>
      }

<Modal show={showModal} onClose={() => setShowModal(false)} title={modalContent.title} body={modalContent.body} />
    </>
  )
}

export default ProductDetails