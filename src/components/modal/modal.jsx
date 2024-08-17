import React from "react";
import PropTypes from "prop-types";

const Modal = ({ show, onClose, title, body }) => {
  if (!show) {
    return null;
  }

  const handleOutsideClick = (e) => {
    if (e.target.className.includes("modal")) {
      onClose(); 
    }
  };

  return (
    <div className="btn-form-modal">
      <div
        // className="modal fade show"
        className={`modal fade ${show ? "show" : ""}`}
        // style={{ display: "block" }}
        style={{ display: show ? "block" : "none" }}
        tabIndex={-1}
        role="dialog"
        onClick={handleOutsideClick}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                // data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>{body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = { 
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired, 
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Modal;
