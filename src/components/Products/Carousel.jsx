/* eslint-disable react/prop-types */
import { useCallback, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { addToWish, removeFromWish } from "../../features/wishSlice";
import { getCookie } from "../../utils/cookie";
import { useDispatch } from "react-redux";

const Carousel1 = ({ images, _id, products }) => {
  const dispatch = useDispatch();
  // const local = localStorage.getItem("wishItems");
  const local = getCookie("wishItems");
  const wishData = local
    ? JSON.parse(local).find((item) => item._id === _id)
    : false;
  const [wishStatus, setWishStatus] = useState(wishData ? "solid" : "regular");
console.log(_id);
console.log(products);
  const findWish = (_id) => {
    // const local = localStorage.getItem("wishItems");
    const local = getCookie("wishItems");
    const wishData = local
      ? JSON.parse(local).find((item) => item._id === _id)
      : false;
    return wishData ? true : false;
  };

  const wishClick = useCallback(
    (_id, title, coverImage, price, salePrice, stock) => {
      if (!sessionStorage.getItem("userID")) {
        alert("Please login first!");
        return;
      }
      if (findWish(_id)) {
        dispatch(removeFromWish(_id));
        setWishStatus("regular");
      } else {
        // const priceToAdd = salePrice ? salePrice : price;
        dispatch(
          addToWish({ _id, title, coverImage, salePrice, price, stock })
        );
        setWishStatus("solid");
      }
    },
    [dispatch]
  );

  return (
    <>
      <div className="carousel">
        <Carousel className="carouselContainer ">
          {images.slice(-5).map((image, index) => (
            <div key={index} className="relative">
              <img src={image} alt={`Image ${index}`} className="img-fluid" />
              {/* {products[index] && ( // Check if products[index] is defined */}
                <span
                  className="position-absolute"
                  onClick={() =>
                    getCookie("rememberMe")
                      ? wishClick(
                          products._id,
                          products.title,
                          products.coverImage,
                          products.price,
                          products.salePrice,
                          products.stock
                        )
                      : alert("Please login first!")
                  }
                >
                 <i className={`fa-${findWish(products._id) ? 'solid' : 'regular'} fa-heart`}></i>
                </span>
              {/* )} */}
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Carousel1;
