import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Modal = ({ show, onClose, title, body, showLoginButton }) => {
  const [fadeClass, setFadeClass] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    let timeout;
    if (show) {
      timeout= setTimeout(() => {
        setFadeClass("show");
      }, 10); 
    } else {
      setFadeClass(""); 
    }
    return () =>clearTimeout(timeout);
  }, [show]);

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const handleLoginRedirect = () => {
    try {
      onClose();
      navigate("/login");
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <>
      {show && <div className="modal-backdrop fade show" />}
      <div
        className={`modal  ${fadeClass}`}
        id="exampleModalToggle"
        aria-hidden={!show}
        // aria-labelledby="exampleModalToggleLabel"
        tabIndex={-1}
        onClick={handleOutsideClick}
        style={{ display: show ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                {title}
              </h1>
              <button
                type="button"
                className="btn-close"
                // data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              />
            </div>
            <div className="modal-body">
              {body}
              <div className="modal-btn">
            {showLoginButton && (
                <button
                  type="button"
                  className="button  btn "
                  onClick={handleLoginRedirect}
                >
                  Login 
                </button>
              )}
            </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  showLoginButton: PropTypes.bool, 
};
Modal.defaultProps = {
  showLoginButton: false, 
};

export default Modal;