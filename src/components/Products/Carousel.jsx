/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';
import LazyLoad from "react-lazy-load";
import Modal from "../modal/modal";
import axios from "axios";
import ApiLinkContext from "../../context/ApiLinkContext";


  const Carousel1 = ({ images, _id, products }) => {

    //MODAL
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', body: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { ApiLink2 } = useContext(ApiLinkContext);
    const [user, setUser] = useState({});


    useEffect(() => {
      const token = sessionStorage.getItem("token") || localStorage.getItem("token");
      if (!token) {
        setError(true);
        setLoading(false);
        return;
      }
  
      axios.get(`${ApiLink2}/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        const userData = res.data.data;
        setUser(userData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
        setError(true);
      });
    }, [ApiLink2]);

    const handleUserCheck = () => {
      const token = sessionStorage.getItem("token") || localStorage.getItem("token");
      if (!token) {
        setModalContent({ title: "Please Login", body: "Please login first!" });
        setShowModal(true);
        return false;
      }
      return true;
    };

    const handleWishlist = async (productId) => {
      if (!handleUserCheck()) return;
    console.log("klik");
    
      setLoading(true);
      const token = sessionStorage.getItem("token") || localStorage.getItem("token");
      if (!token) {
        setError(true);
        setLoading(false);
        return;
      }
    
      try {
        await axios.post(`${ApiLink2}/wishlist`, { productId,userId:user._id },{
          headers: {
            Authorization: `Bearer ${token}` // Include the token in the Authorization header
          }
        });
        setWishStatus((prevState) => ({
          ...prevState,
          [productId]: "solid"
        }));
      } catch (error) {
        console.log(error,"err");
        
        setError(`Error: ${error.response?.data?.message || "Something went wrong!"}`);
      } finally {
        setLoading(false);
      }
    };

    const galleryImages = images.map(image => ({
      original: image,
      thumbnail: image
    }));

  return (
    <>
      <div className="carousel position-relative">
        <LazyLoad>
      <ImageGallery items={galleryImages} thumbnailPosition={"left"} showNav={false} />
        </LazyLoad>
        <span
          className="position-absolute"
      
          onClick={()=>{handleWishlist(products._id)}}
         
        >
          {/* <i
            className={`fa-${
              findWish(products._id) ? "solid" : "regular"
            } fa-heart`}
          ></i> */}
          <i
            className={`fa-regular
             fa-heart`}
          ></i>
        </span>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)} title={modalContent.title} body={modalContent.body} />
    </>
  );
};

export default Carousel1;
