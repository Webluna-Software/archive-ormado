import { useContext, useEffect, useState } from "react";
import productImg from "../assets/img/BlogComment.png";
import axios from "axios";
import ApiLinkContext from "../context/ApiLinkContext";
import { Link, useParams } from "react-router-dom";
import PreLoader from "./PreLoader";
import { Helmet } from "react-helmet";
import slugify from "slugify";
const BlogDetails = () => {
  const { id } = useParams();
  const {blogTitle} = useParams()
  const { ApiLink2 } = useContext(ApiLinkContext);
  const [blog, setBlog] = useState([]);
  const [blogSec, setBlogSec] = useState([]);
  const [loading, setLoading] = useState(true);
  const path = window.location.pathname;

  useEffect(() => {
    //Blog
    axios
      .get(`${ApiLink2}/blog`)
      .then((res) => {
        setBlog(res.data.blog);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error, "Blog data error");
        setLoading(false);
      });
    //BlogSection
    axios
      .get(`${ApiLink2}/blogSection`)
      .then((res) => {
        setBlogSec(res.data.blogSection);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error, "BlogSec error");
        setLoading(false);
      });
  }, [path]);
  const filterSection = (blogSec, blogSecId) => {
    const check = blogSec.find((id) => id == blogSecId);
    if (check) {
      return true;
    } else {
      return false;
    }
  };

  const findFirstSection = (fd) => {
    const sections = blogSec.filter((item) =>
      filterSection(fd.blogSection, item._id)
    );

    const firstText = sections.find((i) => i.row == 1);
    if (firstText) {
      return firstText.text;
    } else {
      return false;
    }
  };
  let blogDetails = blog.find(
    (i) => slugify(i.title).toLowerCase() == blogTitle
  );

  useEffect(() => {
   if (blogDetails) {
    const updateCount = blogDetails && blogDetails.readCount + 1;
    const formData = new FormData()
    formData.append('readCount',updateCount)
    formData.append('title',blogDetails.title)
    formData.append('description',blogDetails.description)
    axios
       .put(`${ApiLink2}/blog/${blogDetails && blogDetails._id}`,formData)
       .then((res) => {
         console.log(res.data);
       })
       .catch((err) => {
         console.log(err, "put error");
       });
   }
  }, [blogDetails]);
  return (
    <>
      <section className="BlogDetails">
        {loading ? (
          <PreLoader />
        ) : (
         <>
         <Helmet>
          <title>{blogDetails.title}</title>
         </Helmet>
          <div className="container-fluid">
            <div className="row ">
              <div className="blog-details ">
                <div className="img-transparent">
                  <div className="image-container">
                    <img
                      src={productImg}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                    <div className="img-text-context">
                      <h3>{blogDetails.title}</h3>
                      <p>
                        {blogDetails.author}
                      </p>
                      <div className="read">
                        <p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"        
                               fill="none"
                          >
                            <path
                              opacity="0.5"
                              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                              fill="#E3B142"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.6893L15.0303 13.9697C15.3232 14.2626 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2626 15.3232 13.9697 15.0303L11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V8C11.25 7.58579 11.5858 7.25 12 7.25Z"
                              fill="#E3B142"
                            />
                          </svg>
                          {blogDetails.date}
                        </p>
                        <p >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              opacity="0.5"
                              d="M2 12C2 13.6394 2.42496 14.1915 3.27489 15.2957C4.97196 17.5004 7.81811 20 12 20C16.1819 20 19.028 17.5004 20.7251 15.2957C21.575 14.1915 22 13.6394 22 12C22 10.3606 21.575 9.80853 20.7251 8.70433C19.028 6.49956 16.1819 4 12 4C7.81811 4 4.97196 6.49956 3.27489 8.70433C2.42496 9.80853 2 10.3606 2 12Z"
                              fill="#E3B142"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z"
                              fill="#E3B142"
                            />
                          </svg>
                          {blogDetails.readCount}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-details-section2 md-my-5 ">
                  {blogSec.map((fd, i) => {
                    const replaceVideoLink =fd.videoLink && fd.videoLink.replace("watch?v=", "embed/");
                    const findSection = blogDetails.blogSection &&
                      blogDetails.blogSection.find((i) => i == fd._id)
                    if (findSection) {
                      return (
                          <div className="blog-details-text" key={i}>
                            <div className="blog-details-text-part1 my-5">
                              {fd.text == "undefined" ? (
                                ""
                              ) : (
                                <p dangerouslySetInnerHTML={{ __html: fd.text }} />
                              )}
                            </div>
                            <div className="blog-details-text-part2 ">
                              <div className="blog-details-part2-text">
                                {fd.image.length == 0 ? (
                                  ""
                                ) : (
                                  <img src={fd.image} className="img-fluid w-100" />
                                )}
                              </div>
                            </div>
                            <div className="blog-details-text-part3">
                      {fd.videoLink === "undefined" ?(
                        ""
                      ):(
                        <div>
                        <iframe
                          width="100%"
                          height={replaceVideoLink ? '400px' : ''}
                          src={`${replaceVideoLink}`}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>
                      )}
                     </div>
                          </div>
                      )
                    }
                  })}
                  <div className="blog-details-card my-5">
                    <p className="latest-news"> Explore More</p>
                    <div className="blog-details-lastes">
                      {blog.slice(-2).map((fd, i) => (
                        <div className="blogcard col-12 col-md-3 col-sm-6" key={i}>
                          <Link style={{color:"#000"}} to={`/blogDetails/${slugify(fd.title)}`} onClick={()=>{
                            window.scrollTo({top:0})
                          }}>
                            <figure>
                              <img src={fd.coverImage} alt="rectangle127" />
                            </figure>
                       
                          <div className="card-header">
                            <p className="p-title">{fd.title}</p>
                            <p
                              className="p-body"
                              dangerouslySetInnerHTML={{
                                __html: findFirstSection(fd),
                              }}
                            />
                          <p className="p-body"> <span> Read more</span></p>
                            <div className="date-number">
                              <span>1K read</span>
                              <span>June 28, 2023</span>
                            </div>
                          </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* <Blogs /> */}
              <div className="cardsBlogs row m-0 mt-5">
                  {blog.slice(-4).map((item, i) => (
                    <div className="blogcard col-12 col-md-4 col-lg-4" key={i}>
                      <Link style={{color:"#000"}} to={`/blogDetails/${slugify(item.title)}`} onClick={()=>{
                            window.scrollTo({top:0})
                          }}>
                      <figure>
                        <img src={item.coverImage} alt="rectangle127" />
                      </figure>
                      <div className="card-header">
                        <p className="p-title">{item.title}</p>
                        <p
                          className="p-body-text"
                          dangerouslySetInnerHTML={{
                            __html: findFirstSection(item),
                          }}
                        />
                        <p className="p-body-read">
                            {" "}
                            <span> Read more</span>
                        </p>
                        <div className="date-number">
                          <span>{item.readCount} read</span>
                          <span>{item.date}</span>
                        </div>
                      </div>
                          </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default BlogDetails;