import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Modal = ({ show, onClose, title, body }) => {
  const [fadeClass, setFadeClass] = useState("");

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setFadeClass("show");
      }, 10); 
    } else {
      setFadeClass(""); 
    }
  }, [show]);

  const handleOutsideClick = (e) => {
    if (e.target.className.includes("modal")) {
      onClose();
    }
  };

  return (
    <>
      {show && <div className="modal-backdrop show"></div>}
      <div
        className={`modal fade ${fadeClass}`}
        id="exampleModalToggle"
        aria-hidden={!show}
        aria-labelledby="exampleModalToggleLabel"
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
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              />
            </div>
            <div className="modal-body">
              {body}
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
};

export default Modal;
