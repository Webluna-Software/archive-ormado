/* eslint-disable react/prop-types */
import { Carousel } from "react-responsive-carousel";
const Carousel1 = ({ images }) => {


  return (
    <>
      <div className="carousel">
        <Carousel  className="carouselContainer ">
        {images.slice(-5).map((image, index) => (
          <div key={index} className="relative">
          <img  src={image} alt={`Image ${index}`} className="img-fluid" />
          <span className="position-absolute" ><i className="fa-solid fa-heart"></i></span>
          </div>
        ))}
        </Carousel>
      </div>
    </>
  );
};

export default Carousel1;
