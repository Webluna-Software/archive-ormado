import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleClickNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }} className='slider-container'>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column' }} className='index-photo'>
          {images.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Thumbnail ${index}`}
              style={{ marginBottom: '10px', cursor: 'pointer' }}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
      <div style={{ flex: 2 }} className='main-photo'>
        <img
          src={images[currentIndex]}
          alt={`Main Photo`}
        />
      </div>
      <div className='buttons'>
        <button onClick={handleClickPrev}>Prev</button>
        <button onClick={handleClickNext}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
