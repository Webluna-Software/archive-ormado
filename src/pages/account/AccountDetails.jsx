import { useContext, useEffect, useState } from "react"; 
import axios from "axios";
import Loading from "../../components/Loading";
import Modal from '../../components/modal/modal';
import ApiLinkContext from "../../context/ApiLinkContext";

const AccountDetails = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { ApiLink2 } = useContext(ApiLinkContext);

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [selectedGender, setSelectedGender] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", body: "" });

  // İstifadəçi məlumatlarını API-dən almaq
  useEffect(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");

    if (!token) {
      setError(true);
      setLoading(false);
      return;
    }

    axios.get(`${ApiLink2}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      const userData = res.data.data;
      setUser(userData);
      setName(userData.name || '');
      setSurname(userData.surname || '');
      setPhoneNumber(userData.phoneNumber || '');
      setEmail(userData.email || '');
      setAddress(userData.address || '');
      setGender(userData.gender || '');
      setSelectedGender(userData.gender || '');
      setLoading(false);
    })
    .catch((err) => {
      console.error("API Error:", err);
      setLoading(false);
      setError(true);
    });
  }, [ApiLink2]);

  const handleGenderBackground = (gender) => {
    setGender(gender.toLowerCase());
    setSelectedGender(gender);
  };

  // Məlumatları yeniləmək üçün API çağırışı
  const handleSubmit = async (e) => {
    e.preventDefault();

    const sendData = {
      name,
      surname,
      phoneNumber,
      email,
      address,
      gender,
    };

    const token = localStorage.getItem("token") || sessionStorage.getItem("token");

    axios.put(`${ApiLink2}/auth/updatedetails`, sendData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(() => {
      // Yenilənmiş istifadəçi məlumatlarını localStorage-ə yazmaq
      const updatedUser = {
        ...user,
        name,
        surname,
        phoneNumber,
        email,
        address,
        gender
      };
      
      // İstifadəçi state-i yenilə
      setUser(updatedUser);

      // Yenilənmiş məlumatları localStorage-ə yaz
      localStorage.setItem("userData", JSON.stringify(updatedUser)); 

      // Modal göstər
      setShowModal(true);
      setModalContent({
        title: "Thank you!",
        body: "Update successful",
      });
    })
    .catch((err) => {
      console.error("Update failed:", err);
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (loading) return <Loading />;
  if (error) return <h3>Something went wrong ...</h3>;

  return (
    <>
      <div className="col-12 col-md-7">
        <p>Edit Account Information</p>
        <form onSubmit={handleSubmit}>
          <p>Name</p>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>Surname</p>
          <input
            type="text"
            className="form-control"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <p>Phone</p>
          <input
            type="tel"
            className="form-control"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <p>Email</p>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Your address</p>
          <input
            type="text"
            className="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <p>Gender</p>
          <div className="gender-div">
            <span
              className={selectedGender === "Female" ? "selected" : ""}
              onClick={() => handleGenderBackground("Female")}
            >
              Female
            </span>
            <span
              className={selectedGender === "Male" ? "selected" : ""}
              onClick={() => handleGenderBackground("Male")}
            >
              Male
            </span>
          </div>
          <button className="btn">Update</button>
        </form>
      </div>
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        title={modalContent.title}
        body={modalContent.body}
      />
    </>
  );
};

export default AccountDetails;
