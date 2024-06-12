import { useEffect, useState } from "react";
import { validateUserID } from "../../utils/user";
import { loginApiLink } from "../../utils/login";
import axios from "axios";
import Loading from "../../components/Loading";
import bcrypt from 'bcryptjs-react';

import Modal from '../../components/modal/modal';


const AccountDetails = () => {

  const [user, setUser] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${loginApiLink}/user/${validateUserID()}`).then((res) => {
      setUser(res.data.data);
      setLoading(false);
    });
  }, []);

  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [gender, setGender] = useState();
  const [password, setPassword]=useState()
  
  const [selectedGender, setSelectedGender] = useState( null);


    //MODAL
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ title: "", body: "" });
    const [reloadOnClose, setReloadOnClose] = useState(true);


  useEffect(() => {
    const storedGender = localStorage.getItem('selectedGender');
    if (storedGender) {
      setSelectedGender(storedGender);
       setGender(storedGender.toLowerCase()); 
    }
  }, []);

  const handleGenderBackground = (gender) => {
    setGender(gender.toLowerCase()); // Gender state'ini güncelle
    setSelectedGender((prevGender) => (prevGender === gender ? null : gender));
    localStorage.setItem('selectedGender', gender);
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("cick");
    let updatedPassword = user.password;
  if (password !== undefined && password!=='' && password !== user.password) {
    // Sadece şifre değiştirildiyse hash'le
    const salt = await bcrypt.genSalt(10);
    updatedPassword = await bcrypt.hash(password, salt);
  }
    const sendData = {
      name: name !== undefined ? name : user.name || '',
      surname: surname !== undefined ? surname : user.surname || '',
      phoneNumber: phoneNumber !== undefined ? phoneNumber : user.phoneNumber || '',
      email: email !== undefined ? email : user.email || '',
      address: address !== undefined ? address : user.address || '',
      gender: gender !== undefined ? gender : user.gender || '',
      password: updatedPassword
    };
    console.log(sendData);
    axios
      .put(`${loginApiLink}/user/${user._id}`, sendData)
      .then((res) => {
        console.log(res);
        // alert("Update successful");
        setShowModal(true);
        setModalContent({
          title: "Thank you!",
          body: "Update successful",
        });
        setReloadOnClose(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleCloseModal = () => {
    setShowModal(false);
    if (reloadOnClose) {
      window.location.reload();
    }
  };
  return (
    <>    <div className="col-12 col-md-7">
      <p>Edit Account Information</p>
      {loading ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit}>
          <p>Name</p>
          <input
            type="text"
            name="name"
            id=""
            className="form-control"
            placeholder="Joan"
            defaultValue={user.name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>Surname</p>
          <input
            type="text"
            name="surname"
            id=""
            className="form-control"
            placeholder="Halvorson"
            defaultValue={user.surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <p>Phone</p>
          <input
            type="text"
            name="phone"
            id=""
            className="form-control"
            placeholder="+1(555)251-52-21"
            defaultValue={user.phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <p>Email</p>
          <input
            type="email"
            name="email"
            id=""
            className="form-control"
            placeholder="Bradly.Stark@gmail.com"
            defaultValue={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Your address</p>
          <input
            type="text"
            name="address"
            id=""
            className="form-control"
            placeholder="Sit hic quibusdam quis delectus et sunt culpa"
            defaultValue={user.address}
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
            {/* <span
              className={selectedGender === "Rather not say" ? "selected" : ""}
              onClick={() => handleGenderBackground("Rather not say")}
            >
              Rather not say
            </span> */}
          </div>
          <button className="btn">Update</button>
        </form>
      )}
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
