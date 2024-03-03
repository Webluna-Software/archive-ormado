import { useNavigate } from 'react-router-dom';
import bgimg from '../assets/img/bgimg.png'
import { useState } from 'react';

const Account = () => {
    const navigate=useNavigate();
    const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderBackground = (gender) => {
    setSelectedGender(prevGender => prevGender === gender ? null : gender);
  };
  return (
    <section className="account">
         <div className="section-fluid">
            <div className="image-container">
                <img src={bgimg} alt="" className='img-fluid' />
                    <div className="image-overlay">
                        <h3>My Account</h3>
                    </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row justify-content-between">
            <h3>Hello, <span>Hasan</span></h3>
            <div className="col-12 col-md-3">
                    <div className={`d-flex ${window.location.pathname === '/account' ? 'active' : ''}`} onClick={()=>{navigate("/account"); window.scrollTo(0,0)}}><span ><i className="fa-regular fa-user"></i></span><p>My Account</p></div>
                    <div className={`d-flex ${window.location.pathname === '/order' ? 'active' : ''}`} onClick={()=>{navigate("/order"); window.scrollTo(0,0)}}><span><i className="fa-regular fa-bell"></i></span><p>My orders</p></div>
                    <div className={`d-flex ${window.location.pathname === '/address' ? 'active' : ''}`} onClick={()=>{navigate("/address"); window.scrollTo(0,0)}}><span><i className="fa-solid fa-location-dot"></i></span><p>My address</p></div>
                    <div className={`d-flex ${window.location.pathname === '/password' ? 'active' : ''}`} onClick={()=>{navigate("/password"); window.scrollTo(0,0)}}><span><i className="fa-solid fa-key"></i></span><p>Password</p></div>
                    <div className='d-flex'><span><i className="fa-solid fa-right-from-bracket"></i></span><p>Logout</p></div>
                </div>
                <div className="col-12 col-md-7">
                    <p>Edit Account Information</p>
                    <form>
                        <p>Full name</p>
                        <input type="text" name="" id="" className='form-control' placeholder='Joan Halvorson' />
                        <p>Phone</p>
                        <input type="number" name="" id="" className='form-control' placeholder='+1(555)251-52-21' />
                        <p>Email</p>
                        <input type="email" name="" id="" className='form-control' placeholder='Bradly.Stark@gmail.com'/>
                        <p>Your address</p>
                        <input type="text" name="" id="" className='form-control' placeholder='Sit hic quibusdam quis delectus et sunt culpa'/>
                        <p>Gender</p>
                        <div className="gender-div">
                            <span className={selectedGender === 'Female' ? 'selected' : ''}
                            onClick={() => handleGenderBackground('Female')}>Female</span>
                            <span className={selectedGender === 'Male' ? 'selected' : ''}
                            onClick={() => handleGenderBackground('Male')}>Male</span>
                            <span className={selectedGender === 'Rather not say' ? 'selected' : ''}
                            onClick={() => handleGenderBackground('Rather not say')}>Rather not say</span>
                        </div>
                        <button className='btn'>Update</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Account