/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import LazyLoad from "react-lazy-load";
import Modal from "../modal/modal";
import axios from "axios";
import ApiLinkContext from "../../context/ApiLinkContext";

const Carousel1 = ({ images, _id, products }) => {
  // MODAL
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", body: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { ApiLink2 } = useContext(ApiLinkContext);
  const [user, setUser] = useState({});
  const [wishStatus, setWishStatus] = useState({}); // State for wishlist status

  // Fetch user data on mount
  useEffect(() => {
    const token = sessionStorage.getItem("token") || localStorage.getItem("token");
    if (!token) {
      setError(true);
      setLoading(false);
      return;
    }

    axios
      .get(`${ApiLink2}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const userData = res.data.data;
        setUser(userData);
        fetchWishlist(userData._id, token);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
        setError(true);
      });
  }, [ApiLink2]);

  // Fetch wishlist items

  const fetchWishlist = async (userId, token) => {
    try {
      const response = await axios.get(`${ApiLink2}/wishlist/${user._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const wishlist = response.data.data.items; // Array of product IDs
      const updatedWishStatus = {};
      wishlist.forEach((item) => {
        updatedWishStatus[item.productId] = "solid";
      });
      setWishStatus(updatedWishStatus);
    } catch (error) {
      console.error("Wishlist Fetch Error:", error);
    }
  };

  // Check user authentication
  const handleUserCheck = () => {
    const token = sessionStorage.getItem("token") || localStorage.getItem("token");
    if (!token) {
      setModalContent({ title: "Please Login", body: "Please login first!" });
      setShowModal(true);
      return false;
    }
    return true;
  };

  // Handle wishlist toggle
  const handleWishlist = async (productId) => {
    if (!handleUserCheck()) return;
  
    const token = sessionStorage.getItem("token") || localStorage.getItem("token");
    if (!token) return;
  
    const isWished = wishStatus[productId] === "solid"; // Mövcud vəziyyəti yoxla
  
    try {
      if (isWished) {
        // Remove from wishlist
        await axios.delete(`${ApiLink2}/wishlist/${user._id}/${productId}`, {
          headers: { Authorization: `Bearer ${token}` },
          data: { userId: user._id , productId}, // userId lazımdırsa göndər
        });
      } else {
        // Add to wishlist
        await axios.post(
          `${ApiLink2}/wishlist`,
          { productId, userId: user._id },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }
  
      // Toggle edən düzgün məntiq
      setWishStatus((prevState) => ({
        ...prevState,
        [productId]: isWished ? "regular" : "solid",
      }));
    } catch (error) {
      console.error("Wishlist Error:", error);
      setError(`Error: ${error.response?.data?.message || "Something went wrong!"}`);
    }
  };
  
  const galleryImages = images.map((image) => ({
    original: image,
    thumbnail: image,
  }));

  useEffect(() => {
    if (user._id) {
      const token = sessionStorage.getItem("token") || localStorage.getItem("token");
      fetchWishlist(user._id, token); // Refetch wishlist when user changes
    }
  }, [user._id]);

  return (
    <>
      <div className="carousel position-relative">
        <LazyLoad>
          <ImageGallery items={galleryImages} thumbnailPosition={"left"} showNav={false} />
        </LazyLoad>
        <span
          className="position-absolute"
          onClick={() => handleWishlist(products._id)}
        >
          <i
            className={`fa-${wishStatus[products._id] === "solid" ? "solid" : "regular"} fa-heart`}
          ></i>
        </span>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)} title={modalContent.title} body={modalContent.body} />
    </>
  );
};

export default Carousel1;
