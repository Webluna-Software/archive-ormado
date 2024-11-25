import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // axios'u import etməyi unutmayın
import ApiLinkContext from "../../context/ApiLinkContext";

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

  const [charactersLength, setCharactersLength] = useState(false);
  const [capitalLetter, setCapitalLetter] = useState(false);
  const [oneSymbol, setOneSymbol] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  const handleCase = (value) => {
    setCharactersLength(value.length >= 8);
    setCapitalLetter(/[A-Z]/.test(value));
    setOneSymbol(/[!@#\\$%\\^&\\*]/.test(value));
    setPassword(value);
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
  };

  const passwordsMatch = password === confirmPassword;
  const isPasswordValid = charactersLength && capitalLetter && oneSymbol;
  const { ApiLink2 } = useContext(ApiLinkContext); // API link contextdən istifadə

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isPasswordValid) {
      alert("New password doesn't meet the requirements.");
      return;
    }

    if (!passwordsMatch) {
      alert("Passwords do not match.");
      return;
    }

    // Tokeni localStorage-dən götür
    const token = localStorage.getItem("token");


    try {
      const response = await axios.put(
        `${ApiLink2}/auth/updatepassword`,
        {
          currentPassword,
          newPassword: password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Tokeni başlığa əlavə edin
          },
        }
      );
      console.log("Password updated successfully:", response.data);

      // Parol uğurla yeniləndikdə mesaj göstərin və ya yenidən yönləndirin
      alert("Password updated successfully!");
      navigate("/account/details");
    } catch (err) {
      console.error("Failed to update password:", err);
      alert("Failed to update password. Please try again.");
    }
  };

  return (
    <div className="col-12 col-md-7">
      <p>Change password</p>
      <span>
        Your password must be at least 8 characters and should include letters
        and special characters(!@#%*&^).
      </span>
      <form onSubmit={handleSubmit}>
        <p>Current password</p>
        <div className="position-relative">
          <input
            type={type}
            name="currentPassword"
            className="form-control"
            placeholder="Current password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <span onClick={eye}>
            <i className={`fa-solid ${icon}`}></i>
          </span>
        </div>
        <p>New password</p>
        <div className="position-relative">
          <input
            type={newType}
            name="newPassword"
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
            name="confirmPassword"
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
          {charactersLength ? (
            <span className="list-icon green">
              <i className="fa-solid fa-check"></i>
            </span>
          ) : (
            <span className="list-icon">
              <i className="fa-solid fa-times"></i>
            </span>
          )}
          <div className="main-text ms-2">At least 8 characters</div>
        </div>

        <div className="part2-main d-flex">
          {capitalLetter ? (
            <span className="list-icon green">
              <i className="fa-solid fa-check"></i>
            </span>
          ) : (
            <span className="list-icon">
              <i className="fa-solid fa-times"></i>
            </span>
          )}
          <div className="main-text ms-2">One capital letter</div>
        </div>

        <div className="part2-main d-flex">
          {oneSymbol ? (
            <span className="list-icon green">
              <i className="fa-solid fa-check"></i>
            </span>
          ) : (
            <span className="list-icon">
              <i className="fa-solid fa-times"></i>
            </span>
          )}
          <div className="main-text ms-2">One symbol</div>
        </div>

        <p
          className="forgot-btn"
          onClick={() => {
            navigate("/forgotpass");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Forgot password?
        </p>

        <button className="btn" type="submit">
          Update Password
        </button>
      </form>
    </div>
  );
};

export default Password;
