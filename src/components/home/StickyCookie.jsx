import React, { useEffect, useState } from "react";
import logo from "../../assets/img/Logo.png";

const StickyCookie = () => {
  const [isAccepted, setIsAccepted] = useState(false);
 const [reject,setReject] = useState(false)
 
  useEffect(() => {
    const cookieAccepted = getCookie("cookieAccepted");
    if (cookieAccepted === "true") {
      setIsAccepted(true); 
    }
  }, []);

  const handleAccept = () => {
    setCookie("cookieAccepted", "true", 365); 
    setIsAccepted(true); 
  };


  const handleReject = () => {
    deleteCookie("cookieAccepted");
    setIsAccepted(false); 
    setReject(true)
  };

  const setCookie = (name, value, days) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000); // Cookie'nin bitmə vaxtını təyin edirik
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  };


  const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1, c.length); 
      }
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  };

  
  const deleteCookie = (name) => {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
  };


  if (isAccepted) {
    return null;
  }

  return (
    <section className={`stickyCookie ${reject ? "d-none" : ""}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-1 col-md-1 col-sm-12 col-12">
            <div className="d-flex justify-content-center align-items-center">
            <img src={logo} alt="Logo Image" className="img-fluid" />
            </div>
          </div>
          <div className="col-11">
            <div className="row">
              <div className="col-lg-8 col-sm-12 col-12">
                <p className="mt-2">
                  We use cookies to provide a better experience on our website. By continuing to use the site, you accept the use of cookies.
                </p>
              </div>
              <div className="col-lg-4 col-sm-12 col-12">
                <div className="d-flex justify-content-center align-items-center">
                  <button className="acceptBtn me-3" onClick={handleAccept}>
                    Accept
                  </button>
                  <button className="rejectBtn" onClick={handleReject}>
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyCookie;
