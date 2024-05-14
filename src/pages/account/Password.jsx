import { useState } from "react";

const Password = () => {
  const [icon, setIcon] = useState("fa-eye");
  const [type, setType] = useState("password");

  const eye = () => {
    if (icon === "fa-eye") {
      setIcon("fa-eye-slash");
      setType("text");
    } else {
      setIcon("fa-eye");
      setType("password");
    }
  };
  const [newIcon, setNewIcon] = useState("fa-eye");
  const [newType, setNewType] = useState("password");

  const newEye = () => {
    if (newIcon === "fa-eye") {
      setNewIcon("fa-eye-slash");
      setNewType("text");
    } else {
      setNewIcon("fa-eye");
      setNewType("password");
    }
  };
  const [confirmIcon, setConfirmIcon] = useState("fa-eye");
  const [confirmType, setConfirmType] = useState("password");

  const confirmEye = () => {
    if (confirmIcon === "fa-eye") {
      setConfirmIcon("fa-eye-slash");
      setConfirmType("text");
    } else {
      setConfirmIcon("fa-eye");
      setConfirmType("password");
    }
  };

  
  return (
    <div className="col-12 col-md-7">
        <p>Change password</p>
        <span>Your password must be at least 8 characters and should include letters and special characters(!$@%).</span>
        <form>
            <p>Current password</p>
           <div className="position-relative">
            <input type={type} name=""  className='form-control' placeholder='Current password (Updated 09/01/2024)' />
            <span  onClick={eye}><i className={`fa-solid ${icon}`}></i></span>
           </div>
            <p>New password</p>
            <div className="position-relative">
              <input type={newType} name="" id="password1" className='form-control' placeholder='Type new password' />
              <span  onClick={newEye}><i className={`fa-solid ${newIcon}`}></i></span>
            </div>
            <p>Confirm new password</p>
            <div className="position-relative">
            <input type={confirmType} name="" id="password2" className='form-control' placeholder='Re-type new password'/>
            <span  onClick={confirmEye}><i className={`fa-solid ${confirmIcon}`}></i></span>
            </div>
            <p className='forgot-btn'>Forgot password?</p>
            <button className='btn'>Update</button>
        </form>
    </div>
  )
}

export default Password