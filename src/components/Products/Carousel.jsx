/* eslint-disable react/prop-types */
import { useCallback, useState } from "react";
// import { Carousel } from "react-responsive-carousel";
import { addToWish, removeFromWish } from "../../features/wishSlice";
import { getCookie } from "../../utils/cookie";
import { useDispatch } from "react-redux";
import { validateUserID } from "../../utils/user";

import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';

import Modal from "../modal/modal";


  const Carousel1 = ({ images, _id, products }) => {

    //MODAL
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', body: '' });

  const dispatch = useDispatch();
  const userID = validateUserID();

  // const local = localStorage.getItem("wishItems");
  const local = getCookie("wishItems");
  const wishData = local
    ? JSON.parse(local).find((item) => item._id === _id)
    : false;
  const [wishStatus, setWishStatus] = useState(wishData ? "solid" : "regular");

  const findWish = (_id) => {
    // const local = localStorage.getItem("wishItems");
    const local = getCookie("wishItems");
    const wishData = local
      ? JSON.parse(local).find((item) => item._id === _id)
      : false;
    return wishData ? true : false;
  };

  // const wishClick = useCallback(
  //   (_id, title, coverImage, price, salePrice, stock) => {
  //     if (!userID) {
  //       alert("Please login first!");
  //       return;
  //     }
  //     if (findWish(_id)) {
  //       dispatch(removeFromWish(_id));
  //       setWishStatus("regular");
  //     } else {
  //       // const priceToAdd = salePrice ? salePrice : price;
  //       dispatch(
  //         addToWish({ _id, title, coverImage, salePrice, price, stock })
  //       );
  //       setWishStatus("solid");
  //     }
  //   },
  //   [dispatch, userID]
  // );

  const wishClick = useCallback(
    (_id, title, coverImage, price, salePrice, stock) => {
      if (!userID) {
        setModalContent({
          title: "Login Required",
          body: "Please login first!",
        });
        setShowModal(true);
        return;
      }
      if (findWish(_id)) {
        dispatch(removeFromWish(_id));
        setWishStatus("regular");
        setModalContent({
          title: "Removed from WishList",
          body: "This product has been removed from your WishList.",
        });
      } else {
        dispatch(
          addToWish({ _id, title, coverImage, salePrice, price, stock })
        );
        setWishStatus("solid");
        setModalContent({
          title: "Added to WishList",
          body: "This product has been added to your WishList.",
        });
      }
      setShowModal(true);
    },
    [dispatch, userID]
  );

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const galleryImages = images.map(image => ({
    original: image,
    thumbnail: image
  }));

  return (
    <>
      <div className="carousel position-relative">
      <ImageGallery items={galleryImages} thumbnailPosition={"left"} showNav={false} />
        <span
          className="position-absolute"
          // onClick={() =>
          //   userID
          //     ? wishClick(
          //         products._id,
          //         products.title,
          //         products.coverImage,
          //         products.price,
          //         products.salePrice,
          //         products.stock
          //       )
          //     : alert("Please login first!")
          // }
          onClick={() =>
            wishClick(
              products._id,
              products.title,
              products.coverImage,
              products.price,
              products.salePrice,
              products.stock
            )
          }
        >
          {/* <i
            className={`fa-${
              findWish(products._id) ? "solid" : "regular"
            } fa-heart`}
          ></i> */}
          <i
            className={`fa-${
              findWish(products._id) ? "solid" : "regular"
            } fa-heart`}
          ></i>
        </span>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)} title={modalContent.title} body={modalContent.body} />
    </>
  );
};

export default Carousel1;
