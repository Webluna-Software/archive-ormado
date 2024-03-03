import React, { useContext, useEffect, useState } from 'react'
import background from '../assets/img/reservation-banner.png'
import card from '../assets/img/Rectangle.png'
import img from '../assets/img/reservation-form.jpg'
import axios from 'axios'
import ApiLinkContext from '../context/ApiLinkContext'

const Reserve = () => {
    const {ApiLink}=useContext(ApiLinkContext)
  useEffect(()=>{
    axios.get(`${ApiLink}/reserve`)
    .then((res)=>{
        console.log(res.data,'ReserveForm')
    })
  },[])
  const [fullName,setfullName]=useState()
const [email,setemail]=useState()
const [phone,setphone]=useState()
const [numbOfGuest,setnumbOfGuest]=useState()
const [date,setdate]=useState()
const [time,settime]=useState()
const [branch,setbranch]=useState()
const [remark,setremark]=useState()
const [reserveType,setreserveType]=useState()

const [submissionStatus, setSubmissionStatus] = useState(null);

const ReservePost =(e)=>{
    e.preventDefault()
    axios.post(`${ApiLink}/reserve`,
    {
        fullName: fullName,
        email: email,
        phone: phone,
        numbOfGuest:numbOfGuest,
        date:date,
        time:time,
        branch:branch,
        remark:remark,
        reserveType:reserveType
    }).then((res)=>{
        console.log(res.data,'Reserve Form');
        setSubmissionStatus('success');
    }).catch((err)=>{
        console.log(err);
        setSubmissionStatus('error');
    })

}

const reserveTypeRadio=(value)=>{
    return value == reserveType
}
    return (
        <>
            <div className='reserve'>
                <div className="Reverse-title col-12 col-md-12 col-sm-12">
                    <div className="first-card-img">
                        <img className='img-fluid col-12 col-md-12 col-sm-12' src={card} alt="" />
                    </div>
                    <img className='background img-fluid' src={background} alt="" />
                    <div className='firtst-card-title'>
                        <p >Reserve</p>
                    </div>
                </div>
                <div className="reserve-form-header">
                    <div className="reserve-header-text">
                        <h1>COFFEE</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    </div>
                </div>
                <div className="reserve-form">
                    <div className="reserve-part1">
                        <img className='reserve-img' src={img} alt="error" />
                    </div>
                    <div className="reserve-part2">
                        <div className="reserve-part2-main">
                            <div className="reserve-part-header">
                                <h1>Reserve a table</h1>
                            </div>
                            <form onSubmit={ReservePost} className="reserve-inputs">
                                
                                <div className="reserve-inputs-main">
                                    <div className="reserve-part1">
                                        <div className="reserve-input-text">
                                            <label htmlFor="name"><p>Full name<span>*</span></p></label>
                                        </div>
                                        <div className="reserve-input">
                                            <input id='name' placeholder='Jon Doe' type="text" onChange={(e)=>setfullName(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="reserve-part2">
                                        <div className="reserve-input-text">
                                            <label htmlFor="email"><p>Email address<span>*</span></p></label>
                                        </div>
                                        <div className="reserve-input">
                                            <input id='email' placeholder='example@gmail.com' type="text" onChange={(e)=>setemail(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="reserve-inputs-main">
                                    <div className="reserve-part1">
                                        <div className="reserve-input-text">
                                            <label htmlFor="phone"><p>Phone<span>*</span></p></label>
                                        </div>
                                        <div className="reserve-input">
                                            <input id='phone' placeholder='+1(555)251-52-21' type="tel" onChange={(e)=>setphone(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="reserve-part2">
                                        <div className="reserve-input-text">
                                            <label htmlFor="number"><p>Number of guest<span>*</span></p></label>
                                        </div>
                                        <div className="reserve-input">
                                            <input id='number' placeholder='1-9' type="number" onChange={(e)=>setnumbOfGuest(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="reserve-inputs-main">
                                    <div className="reserve-part1">
                                        <div className="reserve-input-text">
                                            <label htmlFor="date"><p>Date<span>*</span></p></label>
                                        </div>
                                        <div className="reserve-input">
                                            <select name="date" id="date" onChange={(e)=>setdate(e.target.value)}>
                                                <option value="choose1"> Select</option>
                                                <option value="choose2">Choose</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="reserve-part2">
                                        <div className="reserve-input-text">
                                            <label htmlFor="time"><p>Time<span>*</span></p></label>
                                        </div>
                                        <div className="reserve-input">
                                            <input id='time' placeholder='00:00' type="text" onChange={(e)=>settime(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="reserve-inputs-main">
                                    <div className="reserve-part1">
                                        <div className="reserve-input-text">
                                            <label htmlFor="branch"><p>Branch</p></label>
                                        </div>
                                        <div className="reserve-input">
                                            <select name="branch" id="branch" className='round' onChange={(e)=>setbranch(e.target.value)} >
                                                <option value="choose1" > Select</option>
                                                <option value="choose2">Choose</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="reserve-part2">
                                        <div className="reserve-input-text">
                                            <label htmlFor="remarks"><p>Additional remarks</p></label>
                                        </div>
                                        <div className="reserve-input">
                                            <input id='remarks' placeholder='Redlands' type="text" onChange={(e)=>setremark(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>
         

                            <div className="reserve-text ">

                                <div className="reserve-text-main">
                                <div className='textInput'>
                                    {console.log(reserveType)}
                                    <input type="radio" id='reserve-radio' checked={reserveTypeRadio("event")} name='reserve-radio' value="event" onClick={(e) => setreserveType(e.target.value)} />
                                    <label for="reserve-radio"> <p>For the event</p> </label>
                                </div>
                                <div className='textInput' >
                                    <input type="radio" id='reserve-radio2'checked={reserveTypeRadio("friends")} name='reserve-radio' value="friends" onClick={(e) => setreserveType(e.target.value)} />
                                    <label for="reserve-radio2"> <p>For a meeting with friends</p> </label>
                                </div>
                                </div>
                               
                            </div>
                            <div className="reserve-btn">
                                <button type='submit' data-bs-toggle="modal" data-bs-target="#exampleModal"><p>Reserve</p></button>
                            </div> 
                            {submissionStatus === 'success' && (
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        Your form has been submitted successfully!
                      </div>
                    </div>
                  </div>
                </div>
            )}
            {submissionStatus === 'error' && (
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        Something went wrong. Please try again.
                      </div>
                    </div>
                  </div>
                </div>
       
            )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reserve