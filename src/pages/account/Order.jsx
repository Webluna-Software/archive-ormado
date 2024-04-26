import { useNavigate } from 'react-router-dom'
import bgimg from '../assets/img/bgimg.png'

const Order = () => {
    const navigate=useNavigate();

  return (
    <section className="order">
        <div className="section-fluid">
            <div className="image-container">
                <img src={bgimg} alt="" className='img-fluid' />
                    <div className="image-overlay">
                        <h3>My Order</h3>
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
                <div className="col-12 col-md-8 col-lg-7">
                   <table className='table'>
                    <thead>
                        <tr>
                            <th>Order</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                         <tr>
                            <td># 711</td>
                            <td>January 28,2023</td>
                            <td>Processing</td>
                            <td>$600.00</td>
                            <td ><p className='button' onClick={()=>{navigate("/orderdetails"); window.scrollTo(0,0)}}><i className="fa-solid fa-circle-info"></i>Detail</p></td>
                        </tr>
                        <tr>
                            <td># 741</td>
                            <td>January 28,2023</td>
                            <td>Cancelled</td>
                            <td>$600.00</td>
                            <td ><p className='button'><i className="fa-solid fa-repeat"></i>Repeat</p></td>
                        </tr>
                    </tbody>
                   
                   </table>
                   <button className='btn'>More</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Order