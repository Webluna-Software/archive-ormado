/* eslint-disable react/prop-types */
import { useState } from 'react';

const Carousel = ({ images }) => {
  const [startIndex, setStartIndex] = useState(0);
  
  const handleClickPrev = () => {
    setStartIndex((prevStartIndex) => {
      const newIndex = prevStartIndex === 0 ? images.length - 1 : prevStartIndex - 1;
      return newIndex < 0 ? 0 : newIndex;
    });
  };
  

  const handleClickNext = () => {
    setStartIndex((prevStartIndex) => {
      const newIndex = prevStartIndex === images.length - 1 ? 0 : prevStartIndex + 1;
      return newIndex;
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }} className='slider-container'>
      <div style={{ flex: 1 }} className='index-outside-div'>
        <div style={{ display: 'flex', flexDirection: 'column' }} className='index-photo'>
        {images.slice(startIndex, startIndex + 3).map((photo, index) => (
            <img
              key={startIndex + index}
              className='img-fluid'
              src={photo}
              alt={`Thumbnail ${startIndex + index}`}
              style={{ marginBottom: '10px', cursor: 'pointer' }}
              onClick={() => setStartIndex(startIndex + index)}
            />
          ))}
        </div>
      </div>
      <div style={{ flex: 2 }} className='main-photo'>
      <img
          src={images[startIndex]}
          alt={`Main Photo`}
          className='img-fluid'
        />
      </div>
      <div className='buttons'>
        <button onClick={handleClickPrev} className='prev-btn'><i className="fa-solid fa-chevron-up"></i></button>
        <button onClick={handleClickNext} className='next-btn'><i className="fa-solid fa-chevron-down"></i></button>
      </div>
    </div>
  );
};

export default Carousel;
