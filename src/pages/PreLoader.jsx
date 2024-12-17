import React, { useEffect } from "react";
import lottie from 'lottie-web';
import animationData from '../components/json/animation.json';
const PreLoader = () => {

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: document.getElementById('animationContainer'), 
      renderer: 'svg', 
      loop: true, 
      autoplay: true, 
      animationData: animationData 
    });

    return () => {
      animation.destroy();
    };
  }, []);
  return (
    <>
     <div className="anime d-flex justify-content-center align-items-center ">
        <div id="animationContainer"></div>
     </div>
     {/* <div className="anime d-flex justify-content-center align-items-center">
        <img src={animationData2} alt="Loading..." className="img-fluid" />
      </div> */}
    </>
  );
};

export default PreLoader;