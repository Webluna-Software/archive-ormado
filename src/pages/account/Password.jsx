import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Password = () => {
  const navigate = useNavigate();

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

  const [characterslenght, setCharacterlenght] = useState(false);
  const [cappitalletter, setCapitalletter] = useState(false);
  const [onesymbol, setOnesymbol] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCase = (value) => {
    setCharacterlenght(value.length >= 8);
    setCapitalletter(/[A-Z]/.test(value));
    setOnesymbol(/[!. @#\$%\^&\*]/.test(value));
    setPassword(value);
  };
  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
  };
  const passwordsMatch = password === confirmPassword;
  const isPasswordValid = characterslenght && cappitalletter && onesymbol;
  return (
    <div className="col-12 col-md-7">
      <p>Change password</p>
      <span>
        Your password must be at least 8 characters and should include letters
        and special characters(!#.$@%*&^).
      </span>
      <form>
        <p>Current password</p>
        <div className="position-relative">
          <input
            type={type}
            name=""
            className="form-control"
            placeholder="Current password (Updated 09/01/2024)"
          />
          <span onClick={eye}>
            <i className={`fa-solid ${icon}`}></i>
          </span>
        </div>
        <p>New password</p>
        <div className="position-relative">
          <input
            type={newType}
            name=""
            id="password1"
            className="form-control"
            placeholder="Type new password"
            onChange={(e) => {
              handleCase(e.target.value);
              setPassword(e.target.value);
            }}
          />
          <span onClick={newEye}>
            <i className={`fa-solid ${newIcon}`}></i>
          </span>
        </div>
        <p>Confirm new password</p>
        <div className="position-relative">
          <input
            type={confirmType}
            name=""
            id="password2"
            className="form-control"
            placeholder="Re-type new password"
            onChange={(e) => handleConfirmPasswordChange(e.target.value)}
          />
          <span onClick={confirmEye}>
            <i className={`fa-solid ${confirmIcon}`}></i>
          </span>
        </div>
        <p className="mt-1 text-danger">
          {passwordsMatch ? "" : "Passwords are not the same"}
        </p>
        
        <div className="part2-main d-flex">
          {characterslenght ? (
            <span className="list-icon green">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  fill="#15CF74"
                />
                <path
                  d="M16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                  fill="#15CF74"
                />
              </svg>
            </span>
          ) : (
            <span className="list-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  fill="#D20409"
                />
                <path
                  d="M8.96967 8.96967C9.26256 8.67678 9.73744 8.67678 10.0303 8.96967L12 10.9394L13.9697 8.96969C14.2626 8.6768 14.7374 8.6768 15.0303 8.96969C15.3232 9.26258 15.3232 9.73746 15.0303 10.0304L13.0607 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0304 15.0303C9.73746 15.3232 9.26258 15.3232 8.96969 15.0303C8.6768 14.7374 8.6768 14.2626 8.96969 13.9697L10.9394 12L8.96967 10.0303C8.67678 9.73744 8.67678 9.26256 8.96967 8.96967Z"
                  fill="#D20409"
                />
              </svg>
            </span>
          )}
          <div className="main-text ms-2">At list 8 characters</div>
        </div>
        <div className="part2-main d-flex">
          <div className="main-btn">
            {cappitalletter ? (
              <span className="list-icon green">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    fill="#15CF74"
                  />
                  <path
                    d="M16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                    fill="#15CF74"
                  />
                </svg>
              </span>
            ) : (
              <span className="list-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    fill="#D20409"
                  />
                  <path
                    d="M8.96967 8.96967C9.26256 8.67678 9.73744 8.67678 10.0303 8.96967L12 10.9394L13.9697 8.96969C14.2626 8.6768 14.7374 8.6768 15.0303 8.96969C15.3232 9.26258 15.3232 9.73746 15.0303 10.0304L13.0607 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0304 15.0303C9.73746 15.3232 9.26258 15.3232 8.96969 15.0303C8.6768 14.7374 8.6768 14.2626 8.96969 13.9697L10.9394 12L8.96967 10.0303C8.67678 9.73744 8.67678 9.26256 8.96967 8.96967Z"
                    fill="#D20409"
                  />
                </svg>
              </span>
            )}
          </div>
          <div className="main-text ms-2">One capital letter</div>
        </div>
        <div className="part2-main d-flex">
          <div className="main-btn">
            {onesymbol ? (
              <span className="list-icon green">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    fill="#15CF74"
                  />
                  <path
                    d="M16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                    fill="#15CF74"
                  />
                </svg>
              </span>
            ) : (
              <span className="list-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    fill="#D20409"
                  />
                  <path
                    d="M8.96967 8.96967C9.26256 8.67678 9.73744 8.67678 10.0303 8.96967L12 10.9394L13.9697 8.96969C14.2626 8.6768 14.7374 8.6768 15.0303 8.96969C15.3232 9.26258 15.3232 9.73746 15.0303 10.0304L13.0607 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0304 15.0303C9.73746 15.3232 9.26258 15.3232 8.96969 15.0303C8.6768 14.7374 8.6768 14.2626 8.96969 13.9697L10.9394 12L8.96967 10.0303C8.67678 9.73744 8.67678 9.26256 8.96967 8.96967Z"
                    fill="#D20409"
                  />
                </svg>
              </span>
            )}
          </div>
          <div className="main-text ms-2">One symbol</div>
        </div>
        <p
          className="forgot-btn"
          onClick={() => {
            navigate("/forgotpass");
            window.scrollTo({ top: 0, behavior: 'smooth' }); 
          }}
        >
          Forgot password?
        </p>
        <button className="btn">Update</button>
      </form>
    </div>
  );
};

export default Password;
