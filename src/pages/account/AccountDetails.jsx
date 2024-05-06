import { useNavigate } from "react-router-dom";
import bgimg from "../../assets/img/bgimg.png";
import { useEffect, useState } from "react";
import { validateUserID } from "../../utils/user";
import { logOutUser, loginAction, loginApiLink } from "../../utils/login";
import axios from "axios";
import Loading from "../../components/Loading";

const AccountDetails = () => {
  const navigate = useNavigate();
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderBackground = (gender) => {
    setSelectedGender((prevGender) => (prevGender === gender ? null : gender));
  };

  const [user, setUser] = useState();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const sendData = {
      name: name,
      surname: surname,
      phoneNumber: phoneNumber,
      email: email,
      address: address,
    };

    axios
      .put(`${loginApiLink}/user/${user._id}`, sendData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="col-12 col-md-7">
      <p>Edit Account Information</p>
      {loading ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit}>
          <p>Name</p>
          <input
            type="text"
            name=""
            id=""
            className="form-control"
            placeholder="Joan"
            defaultValue={user.name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>Surname</p>
          <input
            type="text"
            name=""
            id=""
            className="form-control"
            placeholder="Halvorson"
            defaultValue={user.surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <p>Phone</p>
          <input
            type="text"
            name=""
            id=""
            className="form-control"
            placeholder="+1(555)251-52-21"
            defaultValue={user.phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <p>Email</p>
          <input
            type="email"
            name=""
            id=""
            className="form-control"
            placeholder="Bradly.Stark@gmail.com"
            defaultValue={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Your address</p>
          <input
            type="text"
            name=""
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
            <span
              className={selectedGender === "Rather not say" ? "selected" : ""}
              onClick={() => handleGenderBackground("Rather not say")}
            >
              Rather not say
            </span>
          </div>
          <button className="btn">Update</button>
        </form>
      )}
    </div>
  );
};

export default AccountDetails;
