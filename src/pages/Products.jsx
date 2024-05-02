import  { useCallback, useContext, useEffect, useState } from "react";
import productImg from "../assets/img/products-banner.png"
import ApiLinkContext from "../context/ApiLinkContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import cart from '../assets/img/cart.svg';
import { addToCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";
import { addToWish, removeFromWish } from "../features/wishSlice";

// eslint-disable-next-line react/prop-types
const Products = ({_id}) => {

  const { ApiLink } = useContext(ApiLinkContext)
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [products, setProducts] = useState([])
  const [quantity,setQuantity]=useState(1);

  
  useEffect(() => {
    axios.get(`${ApiLink}/product`)
      .then((res) => {
        setProducts(res.data.products)
        console.log(res.data.products, "Products Data")
      }).catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [ApiLink])

  useEffect(()=>{
    setQuantity(quantity)
  },[quantity])
  const localCart = localStorage.getItem('cartItems');
  const cartData = localCart ? JSON.parse(localCart).find((item) => item._id === _id) : false;

  const [ cartStatus, setCartStatus] = useState(cartData ? 'active' : 'disabled');

  const findCart = (_id) => {
    const localCart = localStorage.getItem('cartItems');
    const cartData = localCart ? JSON.parse(localCart).find((item) => item._id === _id) : false;
    return cartData ? true : false;
  };

  const cartClick = useCallback(
    (_id, title, price, salePrice, coverImage) => {
      if (findCart(_id)) {
        navigate('/basket');
      } else {
        // const priceToAdd = salePrice ? salePrice : price;
        dispatch(addToCart({ _id, coverImage, title, salePrice, quantity, price }));
        setCartStatus('active');
      }
    },
    [navigate, dispatch, quantity, setCartStatus]
  );

  const local = localStorage.getItem("wishItems");
  const wishData = local ? JSON.parse(local).find((item) => item._id === _id) : false;
  const [wishStatus, setWishStatus] = useState(wishData ? "solid" : "regular");

  const findWish = (_id) => {
    const local = localStorage.getItem("wishItems");
    const wishData = local ? JSON.parse(local).find((item) => item._id === _id) : false;
    return wishData ? true : false;
  }

  const wishClick = useCallback(( _id, title, coverImage, price, salePrice,  stock ) => {
    if (findWish(_id)) {
      dispatch(removeFromWish(_id));
      setWishStatus("regular");
    } else {
      // const priceToAdd = salePrice ? salePrice : price;
      dispatch(addToWish({ _id, title,coverImage,salePrice, price,  stock }));
      setWishStatus("solid")
      console.log(wishStatus);
    }
  }, [dispatch, wishStatus])

 

  // const [showCategories, setShowCategories] = useState(true);
  // const toggleCategories = () => {
  //   setShowCategories(!showCategories);
  // };
  // const [showPriceSlider, setPriceSlider] = useState(true);
  // const togglePriceSlider = () => {
  //   setPriceSlider(!showPriceSlider);
  // };
  // const [minPrice, setMinPrice] = useState('0');
  // const [maxPrice, setMaxPrice] = useState('100');
  // const handleMinPriceChange = (event) => {
  //   setMinPrice(event.target.value);
  // };
  // const handleMaxPriceChange = (event) => {
  //   setMaxPrice(event.target.value);
  // };
  return (
    <>
      <section className="container-fluid">
        <div className="products-page row pb-5 my-5 d-flex justify-content-center">
          <div className="col-md-9">
            <div className="img-transparent  d-md-block d-lg-block">
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

            <div className="product-cards  d-md-block d-lg-block p-0 mt-5">
              <div className="yourormado-products row g-3">
                {products.map((fd, i) => (
                  <div className="col-12 col-sm-6 col-md-4" key={i}>
                    <div className="card w-100" >
                      <Link to={`/productsdetails/${fd._id}`}><img src={fd.coverImage} className="card-img-top py-5" alt="..." /></Link>
                      <div className="wishlist-modal">
                        <div className="addtowishlist-box mb-2 d-flex justify-content-center align-items-center"  onClick={() => { wishClick(fd._id,fd.title,fd.coverImage,fd.price,fd.salePrice, fd.stock) }}>
                          <i className={`fa-${findWish(fd._id) ? 'solid' : 'regular'} fa-heart`}></i>
                        </div>
                        <Link to={`/productsdetails/${fd._id}`}>
                          <div className="quick-view">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path opacity="0.5" d="M2 12C2 13.6394 2.42496 14.1915 3.27489 15.2957C4.97196 17.5004 7.81811 20 12 20C16.1819 20 19.028 17.5004 20.7251 15.2957C21.575 14.1915 22 13.6394 22 12C22 10.3606 21.575 9.80853 20.7251 8.70433C19.028 6.49956 16.1819 4 12 4C7.81811 4 4.97196 6.49956 3.27489 8.70433C2.42496 9.80853 2 10.3606 2 12Z" fill="#4A3024" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z" fill="#4A3024" />
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
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="price-addtocart">
                          <div className="price-box">
                            <span><del>${fd.price}</del></span>
                            <p>${fd.salePrice}</p>
                          </div>
                          <div className="price-cart"  onClick={() => cartClick(fd._id, fd.title, fd.price, fd.salePrice, fd.coverImage)}>
                            <i className={`${findCart(fd._id) ? 'active' : 'disabled'} fa-solid fa-bag-shopping`}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Products;