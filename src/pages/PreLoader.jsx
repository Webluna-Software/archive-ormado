import React, { useEffect } from "react";
// import logo from "../assets/img/Logo.png";
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
      {/* <div className="d-flex justify-content-center align-items-center ">
        <img src={logo} alt="" className="img-fluid  rotate-animation" />
      </div> */}
     <div className="anime d-flex justify-content-center align-items-center ">
        <div id="animationContainer"></div>
     </div>
    </>
  );
};

export default PreLoader;