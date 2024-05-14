import React from "react";
import logo from "../assets/img/Logo.png";
const PreLoader = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <img src={logo} alt="" className="img-fluid  rotate-animation" />
      </div>
    </>
  );
};

export default PreLoader;
