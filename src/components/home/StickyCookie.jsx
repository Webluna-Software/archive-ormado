import React from "react";
import logo from "../../assets/img/Logo.png";

const StickyCookie = () => {
  return (
    <>
      <section className="stickyCookie">
        <div className="container-fluid">
          <div className="row">
            <div className="col-1 ">
              <img src={logo} alt="" className="img-fluid" />
            </div>
            <div className="col-11">
              <div className="row">
                <div className="col-8 ">
                  <p>
                  We use cookies to provide a better experience on our website. By continuing to use the site, you accept the use of cookies.
                  </p>
                </div>
                <div className="col-4 ">
                    <div className="d-flex justify-content-center">
                        <button className="acceptBtn me-3">Accept</button>
                        <button className="rejectBtn">Reject</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StickyCookie;
