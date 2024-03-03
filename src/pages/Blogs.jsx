import React, { useContext,useState, useEffect} from 'react'
import img126 from "../assets/img/Rectangle 1317 (4).png";
import img127 from "../assets/img/Rectangle 1317 (5).png";
import img128 from "../assets/img/Rectangle 1317 (6).png";
import img129 from "../assets/img/Rectangle 1317 (7).png";
import Faq from '../components/home/Faq';
import { ApiLinkContext } from "../context/ApiLinkContext";
import axios from "axios";
import { Link } from 'react-router-dom';

const Blogs = () => {
  const {ApiLink} = useContext(ApiLinkContext);

  const [blog , setBlog]=useState([]);
 
  
  useEffect(() => {
    axios.get(`${ApiLink}/blog`)
      .then((res) => {
        setBlog(res.data.blog);
        console.log(res.data, "Blog Context Success");
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      });
  }, []);

  return (
    <>
    <section className='blogsPage'>
      <div className="container">
        <div className="row">
          <div className="blogs">
            <div className="title"> 
              <h3>Blog</h3>
            </div>
            <div className="cardsBlogs justify-content-md-center row">
                {blog.map((item,i)=>(
                 
                  <div className="blogcard col-12   col-md-3 col-sm-6">
                  <figure><img src={item.coverImage} alt="rectangle127" /></figure>
                  <div className="card-header">
                    <p className='p-title'>{item.title}</p>
                    <p className='p-body'>Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim.
                    <Link to={ `/blogDetails/${item ._id}`}> <span> Read more</span></Link></p>
                    <div className='date-number'>
                      <span>1K read</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>

                 
                ))}
                {/* <div className="blogcard col-12    col-md-3 col-sm-6">
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
                <div className="blogcard col-12   col-md-3 col-sm-6">
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
                <div className="blogcard col-12   col-md-3 col-sm-6">
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
                <div className="blogcard col-12   col-md-3 col-sm-6">
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
                <div className="blogcard col-12   col-md-3 col-sm-6">
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
                <div className="blogcard col-12   col-md-3 col-sm-6">
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
                <div className="blogcard col-12   col-md-3 col-sm-6">
                  <figure><img src={img129} alt="rectangle127" /></figure>
                  <div className="card-header">
                    <p className='p-title'>Integer Maecenas Eget Viverra</p>
                    <p className='p-body'>Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. <span> Read more</span></p>
                    <div className='date-number'>
                      <span>1K read</span>
                      <span>June 28, 2023</span>
                    </div>
                  </div>
                </div> */}
            </div>
            {/* <div className="centerbtn">
              <div className="button">
                <button className="btn">
                  Lead more
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
    <Faq/>
    </>
  )
}

export default Blogs