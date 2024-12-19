import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ApiLinkContext from "../../context/ApiLinkContext";
import { Link } from "react-router-dom";
import slugify from "slugify";

const VipBlog = () => {
    const { ApiLink2 } = useContext(ApiLinkContext);
    const [vipBlog, setVipBlog] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        const fetchVipBlogs = async () => {
          try {
            const response = await axios.get(`${ApiLink2}/blog`);
            const blogData = response.data.blog;
            // VIP blogları filtrələmək
            const filteredVipBlogs = blogData.filter(blog => blog.vip); 
            setVipBlog(filteredVipBlogs);
          } catch (error) {
            console.error("Error fetching data:", error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchVipBlogs();
      }, [ApiLink2]);
      

     // 1000-dən az oxu sayı varsa tam ədədi, 1000-dən çox olarsa 'k' ilə göstərmək
  const formatReadCount = (count) => {
    if (count < 1000) {
      return count.toString();
    } else {
      return (count / 1000).toFixed(1) + "k";
    }
  };



  return (
    <section className="VipBlog">
        <div className="container">
        <h3>Vip Blogs</h3>
        <div className="cardsBlogs row m-0 mt-5">
                {vipBlog.map((fd) => (
                    <div className="blogcard col-12 col-md-4 col-lg-4" key={fd._id}>
                      <Link
                        style={{ color: "#000" }}
                        to={`/blogDetails/${fd._id}/${slugify(fd.title).toLowerCase()}`}
                        onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      >
                        <figure>
                          <img src={fd.coverImage} alt="Blog Image" />
                        </figure>
                        <div className="card-header">
                          <p className="p-title">{fd.title}</p>
                          <p
                            className="p-body-text"
                            dangerouslySetInnerHTML={{
                              __html: (fd.description),
                            }}
                          />
                          <p className="p-body-read">
                          <Link  style={{ color: "#000" }}  to={`/blog/${fd._id}/${slugify(fd.title).toLowerCase()}`}  onClick={() => {window.scrollTo({ top: 0, behavior: 'smooth' });   }}> 
                            <span> Read more</span>
                          </Link>
                          </p>
                          <div className="date-number">
                          <span>{formatReadCount(fd.readCount)} read</span>
                            <span>{fd.date}</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
        </div>
    </section>
  )
}

export default VipBlog