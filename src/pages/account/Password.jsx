import { useNavigate } from 'react-router-dom';
import bgimg from '../assets/img/bgimg.png'
const Password = () => {
    const navigate=useNavigate();
  return (
    <section className="password">
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
                    <p>Change password</p>
                    <span>Your password must be at least 8 characters and should include letters and special characters(!$@%).</span>
                    <form>
                        <p>Current password</p>
                        <input type="password" name="" id="" className='form-control' placeholder='Current password (Updated 09/01/2024)' />
                        <p>New password</p>
                        <input type="password" name="" id="" className='form-control' placeholder='Type new password' />
                        <p>Confirm new password</p>
                        <input type="password" name="" id="" className='form-control' placeholder='Re-type new password'/>
                        <p className='forgot-btn'>Forgot password?</p>
                        <button className='btn'>Update</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Password