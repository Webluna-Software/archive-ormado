/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Carousel } from "react-responsive-carousel";
const Carousel1 = ({ images }) => {


  return (
    <>
      <div className="carousel">
        <Carousel  className="carouselContainer ">
        {images.slice(-5).map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} className="img-fluid" />
        ))}
        </Carousel>
      </div>
    </>
  );
};

export default Carousel1;
