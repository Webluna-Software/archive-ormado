import { useContext, useState, useEffect } from 'react'

import { ApiLinkContext } from "../context/ApiLinkContext";
import axios from "axios";
import { Link } from 'react-router-dom';
import PreLoader from './PreLoader';
import slugify from 'slugify';

const Blogs = () => {
  const { ApiLink2 } = useContext(ApiLinkContext);
  const [loading, setLoading] = useState(true);

  const [blog, setBlog] = useState([]);
  const [blogSection, setBlogSec] = useState([]);
  const [blogCategory,setBlogCategory] = useState([])
  const [visible,setVisible] = useState(3)
  useEffect(() => {
    //Blog
    axios.get(`${ApiLink2}/blog`)
      .then((res) => {
        setBlog(res.data.blog);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching blog data:", error);
      });
    //Blog Section
    axios.get(`${ApiLink2}/blogSection`)
      .then((res) => {
        setBlogSec(res.data.blogSection);
        setLoading(false);
      })
    //Blog Section
    axios.get(`${ApiLink2}/blogCategory`)
      .then((res) => {
        setBlogCategory(res.data.data);
        console.log(res.data.data);
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

 const visibleShow = () =>{
  setVisible(fd=>fd += 6)
 }
 

  return (
    <>
      <section className='blogsPage'>
        <hr  style={{color:"orange",fontWeight:"bold"}}/>
        <div className="container">
          {loading ? (
            <PreLoader/>
          ) : (
         <>
            <div className="row m-0 justify-content-center">
              <div className="col-2 categoryTitle"><button>ALL CATEGORIES</button></div>
              {
                blogCategory.map((i)=>(
                  <div className="col-2 categoryTitle"><button>{i.title}</button></div>
                ))
              }
              <select name="" id="" onChange={handleSelectChange}>
                <option value="all" selected>ALL CATEGORIES:</option>
              {
                blogCategory.map((i)=>(
                  <option value={i._id}>{i.title}</option>
                ))
              } 
              </select>
              <div className="blogs mt-5">
                <div className="title">
                  <h3>Blog</h3>
                </div>
                <div className="cardsBlogs row m-0 d-flex justify-content-center">
                  {blog.slice(0,visible).map((item, i) => (
                    <div className="blogcard col-12 col-md-4 col-lg-3" key={i}>
                      <Link to={`/blogDetails/${slugify(item.title).toLowerCase()}`} style={{color:"#000"}}>
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
                           <span> Read more</span>
                        </p>
                        <div className='date-number'>
                          <span>{item.readCount} read</span>
                          <span>{item.date}</span>
                        </div>
                      </div>
                    </Link>
                    </div>


                  ))}
           

                </div>
           
              </div>
              <div className="col-6 col-sm-6 col-md-2 col-lg-2">
                <div className={`loadMoreBtn mt-4 ${blog.length > 3 ? "" : "d-none"}`} >
                 <button onClick={visibleShow}>
                 Load More
                 </button>
                </div>
              </div>
            </div>
         </>
          )}
        </div>
      </section>

     
    </>
  )
}

export default Blogs