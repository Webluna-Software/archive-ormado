import React, { useContext, useState, useEffect } from 'react'
import img126 from "../assets/img/Rectangle 1317 (4).png";
import img127 from "../assets/img/Rectangle 1317 (5).png";
import img128 from "../assets/img/Rectangle 1317 (6).png";
import img129 from "../assets/img/Rectangle 1317 (7).png";
import Faq from '../components/home/Faq';
import { ApiLinkContext } from "../context/ApiLinkContext";
import axios from "axios";
import { Link } from 'react-router-dom';

const Blogs = () => {
  const { ApiLink } = useContext(ApiLinkContext);

  const [blog, setBlog] = useState([]);
  const [blogSection, setBlogSec] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //Blog
    axios.get(`${ApiLink}/blog`)
      .then((res) => {
        setBlog(res.data.blog);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching blog data:", error);
      });
    //Blog Section
    axios.get(`${ApiLink}/blogSection`)
      .then((res) => {
        setBlogSec(res.data.blogSection);
        setLoading(false);
      })
  }, []);

  const filterSection = (blogSection, blogSecId) => {
    const check = blogSection.find((id) => id == blogSecId);
    if (check) {
      return true;
    } else {
      return false;
    }
  };

  const findFirstSection = (fd) => {
    const sections = blogSection.filter((item) =>
      filterSection(fd.blogSection, item._id)
    );

    const firstText = sections.find((i) => i.row == 1);
    if (firstText) {
      return firstText.text;
    } else {
      return false;
    }
  };
  return (
    <>
      <section className='blogsPage'>
        <div className="container">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="row m-0">
              <div className="blogs">
                <div className="title">
                  <h3>Blog</h3>
                </div>
                <div className="cardsBlogs row m-0">
                  {blog.map((item, i) => (

                    <div className="blogcard col-12 col-md-4 col-lg-3" key={i}>
                      <figure><img src={item.coverImage} alt="rectangle127" /></figure>
                      <div className="card-header">
                        <p className='p-title'>{item.title}</p>
                        <p
                          className='p-body-text'
                          dangerouslySetInnerHTML={{
                            __html: findFirstSection(item),
                          }}
                        />
                        <p className='p-body-read'>
                          <Link to={`/blogDetails/${item._id}`}> <span> Read more</span></Link>
                        </p>
                        <div className='date-number'>
                          <span>{item.readCount} read</span>
                          <span>{item.date}</span>
                        </div>
                      </div>
                    </div>


                  ))}

                </div>

              </div>
            </div>
          )}
        </div>
      </section>

     
    </>
  )
}

export default Blogs