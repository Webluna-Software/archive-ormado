// import React, { useState } from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';


// const items = [
//     <div className="item" data-value="1">1</div>,
//     <div className="item" data-value="2">2</div>,
//     <div className="item" data-value="3">3</div>,
//     <div className="item" data-value="4">4</div>,
//     <div className="item" data-value="5">5</div>,
// ];

// const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
//     return items.map((item, i) => (
//         <div className="thumb" onClick={() => (setThumbIndex(i), setThumbAnimation(true))}>
//             {item}
//         </div>
//     ));
// };

// const Carousel = () => {
//     const [mainIndex, setMainIndex] = useState(0);
//     const [mainAnimation, setMainAnimation] = useState(false);
//     const [thumbIndex, setThumbIndex] = useState(0);
//     const [thumbAnimation, setThumbAnimation] = useState(false);
//     const [thumbs] = useState(thumbItems(items, [setThumbIndex, setThumbAnimation]));

//     const slideTop = () => {
//         if (!thumbAnimation) {
//             const newIndex = (thumbIndex - 1 + thumbs.length) % thumbs.length;
//             setThumbAnimation(true);
//             setThumbIndex(newIndex);
//             setMainIndex(newIndex);
//         }
//     };

//     const slideBottom = () => {
//         if (!thumbAnimation) {
//             const newIndex = (thumbIndex + 1) % thumbs.length;
//             setThumbAnimation(true);
//             setThumbIndex(newIndex);
//             setMainIndex(newIndex);
//         }
//     };

//     const syncMainBeforeChange = (e) => {
//         setMainAnimation(true);
//     };

//     const syncMainAfterChange = (e) => {
//         setMainAnimation(false);

//         if (e.type === 'action') {
//             setThumbIndex(e.item);
//             setThumbAnimation(false);
//         } else {
//             setMainIndex(thumbIndex);
//         }
//     };

//     const syncThumbs = (e) => {
//         setThumbIndex(e.item);
//         setThumbAnimation(false);

//         if (!mainAnimation) {
//             setMainIndex(e.item);
//         }
//     };

//     return (
//         <div className="carousel-container">
//             <div className="main-photo">
//                 <AliceCarousel
//                     activeIndex={mainIndex}
//                     animationType="fadeout"
//                     animationDuration={800}
//                     disableDotsControls
//                     disableButtonsControls
//                     items={items}
//                     mouseTracking={!thumbAnimation}
//                     onSlideChange={syncMainBeforeChange}
//                     onSlideChanged={syncMainAfterChange}
//                     touchTracking={!thumbAnimation}
//                 />
//             </div>
//             <div className="thumbs">
//                 <AliceCarousel
//                     activeIndex={thumbIndex}
//                     autoWidth
//                     disableDotsControls
//                     disableButtonsControls
//                     items={thumbs}
//                     mouseTracking={false}
//                     onSlideChanged={syncThumbs}
//                     touchTracking={!mainAnimation}
//                 />
//                 <div className="btn-top" onClick={slideTop}>↑</div>
//                 <div className="btn-bottom" onClick={slideBottom}>↓</div>
//             </div>
//         </div>
//     );
// };
// export default Carousel;

import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
  <div className="item" data-value="1">
    <img src="https://images.bolt.eu/store/2022/2022-01-05/b84dcd88-4dc9-472c-9a88-6f49acfc793a.jpeg" alt="" />
  </div>,
  <div className="item" data-value="2">
    <img src="https://images.bolt.eu/store/2022/2022-01-05/b84dcd88-4dc9-472c-9a88-6f49acfc793a.jpeg" alt="" />
  </div>,
  <div className="item" data-value="3">
    <img src="https://images.pexels.com/photos/7362647/pexels-photo-7362647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
  </div>,
  <div className="item" data-value="4">
    <img src="https://s3-alpha-sig.figma.com/img/e3ee/94e6/7954dadb4be2faa26d1003d079be902b?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PL-Ox5UMwpKTGrENmQY2gI0iHKfbWei-NN5ut~QMNGFgD-SGDvH9WftZn8comRXm9XQbD-ctK9UAu7Sx9~CsgF0xb6oB5DPIZPtQGRvin4TNeRNhTtKFxzg1NIt3iYW5Vtt9NUiOs7LoTzTSYhM7fFK5zIDLyooGuuk2S1EhOhwY24kbVCbNsFAbUrlMv2tuA9GrIUj9Tr9JLuI6xUZGtAUQH0ydc7AGP3TsHkGHlFTRRmjDh5BiN3kqtj0KlmsCsoJ2fBz~UhKbinO0nN3kUWuuyTqBtOELhsKND4L3ZcAV0BmkR-PsHMGoGOfh5RYNeePEBVpLNRIrqsU1gzIITQ__" alt="" />
  </div>,
  <div className="item" data-value="5">
    <img src="https://s3-alpha-sig.figma.com/img/e3ee/94e6/7954dadb4be2faa26d1003d079be902b?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PL-Ox5UMwpKTGrENmQY2gI0iHKfbWei-NN5ut~QMNGFgD-SGDvH9WftZn8comRXm9XQbD-ctK9UAu7Sx9~CsgF0xb6oB5DPIZPtQGRvin4TNeRNhTtKFxzg1NIt3iYW5Vtt9NUiOs7LoTzTSYhM7fFK5zIDLyooGuuk2S1EhOhwY24kbVCbNsFAbUrlMv2tuA9GrIUj9Tr9JLuI6xUZGtAUQH0ydc7AGP3TsHkGHlFTRRmjDh5BiN3kqtj0KlmsCsoJ2fBz~UhKbinO0nN3kUWuuyTqBtOELhsKND4L3ZcAV0BmkR-PsHMGoGOfh5RYNeePEBVpLNRIrqsU1gzIITQ__" alt="" />
  </div>,
];

const thumbItems = (items, thumbIndex) => {
  const reorderedItems = [...items.slice(thumbIndex), ...items.slice(0, thumbIndex)];
  return reorderedItems.slice(0, 3).map((item, i) => (
    <div className="thumb" key={i}>
      {item}
    </div>
  ));
};

const Carousel = () => {
  const [mainIndex, setMainIndex] = useState(0);
  const [thumbIndex, setThumbIndex] = useState(0);
  const slideTop = () => {
    const newThumbIndex = (thumbIndex - 1 + items.length) % items.length;
    setThumbIndex(newThumbIndex);
    setMainIndex(newThumbIndex);
  };

  const slideBottom = () => {
    const newThumbIndex = (thumbIndex + 1) % items.length;
    setThumbIndex(newThumbIndex);
    setMainIndex(newThumbIndex);
  };

  const thumbs = thumbItems(items, thumbIndex);

  const syncThumbs = (e) => {
    setThumbIndex(e.item);
    setMainIndex(e.item);
  };

  return (
    <div className="carousel-container">
      <div className="main-photo">
        <AliceCarousel
          activeIndex={mainIndex}
          animationType="fadeout"
          animationDuration={800}
          disableDotsControls
          disableButtonsControls
          items={items}
          mouseTracking={false}
        />
      </div>
      <div className="thumbs">
        <AliceCarousel
          activeIndex={thumbIndex}
          autoWidth
          disableDotsControls
          disableButtonsControls
          items={thumbs}
          mouseTracking={false}
          onSlideChanged={syncThumbs}
        />
        <div className="btn-top" onClick={slideTop}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle opacity="0.5" cx="12" cy="12" r="10" transform="rotate(90 12 12)" stroke="#DDBBAC" stroke-width="1.5" />
            <path d="M15 13.5L12 10.5L9 13.5" stroke="#DDBBAC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div className="btn-bottom" onClick={slideBottom}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle opacity="0.5" cx="10" cy="10" r="10" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 22 22)" stroke="#DDBBAC" stroke-width="1.5" />
            <path d="M15 10.5L12 13.5L9 10.5" stroke="#DDBBAC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
