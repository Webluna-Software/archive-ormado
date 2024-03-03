import React, { useContext,useState, useEffect} from 'react'
import img126 from "../../assets/img/Rectangle 1317 (1).png";
import img127 from "../../assets/img/Rectangle 1317 (2).png";
import img128 from "../../assets/img/Rectangle 1317 (3).png";
import img129 from "../../assets/img/Rectangle 1317 (4).png";
import { ApiLinkContext } from '../../context/ApiLinkContext';
import axios from "axios";
const OurRecentBlog = () => {
  
const {ApiLink} = useContext(ApiLinkContext);

const [blog , setBlog]=useState([]);

useEffect(() => {
  axios.get(`${ApiLink}/blog`)
    .then((res) => {
      setBlog(res.data.data);
      console.log(res.data.data, "Blog Context Success");
    })
    .catch((error) => {
      console.error("Error fetching blog data:", error);
    });
}, []);
  return (
    <>
    <section className='OurRecentBlog ormado-con-main mt-5 '>
        <div className="ormado-con">
          <div className="row">
            <div className="blogs ">
              <div className="title"> 
                <h3>Our recent <span>blog</span> </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. </p>
              </div>
              <div className="cardsBlogs  d-flex justify-content-center row">
                <div className="blogcard col-12   col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <figure><img src={img126} alt="rectangle127" /></figure>
                  <div className="card-header">
                    <p className='p-title'>Integer Maecenas Eget Viverra</p>
                    <p className='p-body'>Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. <span> Read more</span></p>
                    <div className='date-number'>
                      <span>1K read</span>
                      <span>June 28, 2023</span>
                    </div>
                  </div>
                </div>
                <div className="blogcard col-12    col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <figure><img src={img127} alt="rectangle127" /></figure>
                  <div className="card-header">
                    <p className='p-title'>Integer Maecenas Eget Viverra</p>
                    <p className='p-body'>Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. <span> Read more</span></p>
                    <div className='date-number'>
                      <span>1K read</span>
                      <span>June 28, 2023</span>
                    </div>
                  </div>
                </div>
                <div className="blogcard col-12   col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <figure><img src={img128} alt="rectangle127" /></figure>
                  <div className="card-header">
                    <p className='p-title'>Integer Maecenas Eget Viverra</p>
                    <p className='p-body'>Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. <span> Read more</span></p>
                    <div className='date-number'>
                      <span>1K read</span>
                      <span>June 28, 2023</span>
                    </div>
                  </div>
                </div>
                <div className="blogcard col-12   col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <figure><img src={img129} alt="rectangle127" /></figure>
                  <div className="card-header">
                    <p className='p-title'>Integer Maecenas Eget Viverra</p>
                    <p className='p-body'>Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. <span> Read more</span></p>
                    <div className='date-number'>
                      <span>1K read</span>
                      <span>June 28, 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default OurRecentBlog


              {/* {blog.map((fd,i) => (
                  <div className="blogcard col-12    col-xl-3 col-lg-3 col-md-3 col-sm-6"  key={i}>
                    <figure><img src={fd.coverImage} alt="rectangle127"/></figure>
                    <div className="card-header">
                      <p className='p-title'>{fd.title}</p>
                      <p className='p-body'>{fd.text}<span> Read more</span></p>
                      <div className='date-number'>
                        <span>1K read</span>
                        <span>{fd.date}</span>
                      </div>
                    </div>
                  </div>
              ))} */}