import { useNavigate } from 'react-router-dom';
import bgimg from '../../assets/img/bgimg.png'
import { useEffect, useState } from 'react';
import { validateUser } from '../../utils/user';
import { logOutUser, loginAction } from '../../utils/login';
 
const AccountDetails = () => {
    const navigate=useNavigate();
    const [selectedGender, setSelectedGender] = useState(null);

    const user = validateUser();

  const handleGenderBackground = (gender) => {
    setSelectedGender(prevGender => prevGender === gender ? null : gender);
  };




  if(validateUser()){
      return (
                    <div className="col-12 col-md-7">
                        <p>Edit Account Information</p>
                        <form>
                            <p>Full name</p>
                            <input type="text" name="" id="" className='form-control' placeholder='Joan Halvorson' disabled defaultValue={user.name + " " + user.surname} />
                            <p>Phone</p>
                            <input type="text" name="" id="" className='form-control' placeholder='+1(555)251-52-21' disabled defaultValue={user.phoneNumber} />
                            <p>Email</p>
                            <input type="email" name="" id="" className='form-control' placeholder='Bradly.Stark@gmail.com' disabled defaultValue={user.email}/>
                            <p>Your address</p>
                            <input type="text" name="" id="" className='form-control' placeholder='Sit hic quibusdam quis delectus et sunt culpa' disabled defaultValue={user.address}/>
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
      )
  }
}

export default AccountDetails