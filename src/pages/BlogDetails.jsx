import React, { useContext, useEffect, useState } from "react";
import productImg from '../assets/img/Rectangle3865.png'
import Blogs from "./Blogs";
import axios from "axios";
import ApiLinkContext from "../context/ApiLinkContext";
import { Link, useParams } from "react-router-dom";
const BlogDetails = () => {

  const { ApiLink } = useContext(ApiLinkContext);

  const [blog, setBlog] = useState([]);
  const [blogDetails, setBlogDetails] = useState([]);
  const [blogSec, setBlogSec] = useState([]);
  const [loading, setLoading] = useState(true);
  const path = window.location.pathname;
  const { id } = useParams();

  useEffect(() => {
    //Blog
    axios.get(`${ApiLink}/blog`)
      .then((res) => {
        setBlog(res.data.blog);
        setLoading(false);
        console.log(res.data.blog, 'Blog Data');
      })
      .catch((error) => {
        console.log(error, 'Blog data error')
        setLoading(false);
      })
    //BlogDetails
    axios.get(`${ApiLink}/blog/${id}`)
      .then((res) => {
        setBlogDetails(res.data.blog);
        setLoading(false);

      })
      .catch((error) => {
        console.log(error, "BlogDetails error");
        setLoading(false);
      });
    //BlogSection
    axios.get(`${ApiLink}/blogSection`)
      .then((res) => {
        setBlogSec(res.data.blogSection);
        setLoading(false);
        console.log(res.data.blogSection, 'BlogSection');
      })
      .catch((error) => {
        console.log(error, "BlogSec error");
        setLoading(false);
      })
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
  return (
    <>
      <section className="BlogDetails">
        {loading ? (
          <div>
            <p>Loading...</p>
          </div>
        ) : (
          <div className="container-fluid">
            <div className="row ">
              <div className="blog-details ">
                {/* <div className="blogdetailsMainTitle">
                  <div className="blog-details-text">
                    <h3>{blogDetails.title}</h3>
                    <p>
                      {blogDetails.author}
                    </p>
                    <div className="read">
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
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            fill="#E3B142"
                          />
                          <path
                            fillRule="evenodd"
                            clip-rule="evenodd"
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
                            clip-rule="evenodd"
                            d="M8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z"
                            fill="#E3B142"
                          />
                        </svg>
                        {blogDetails.readCount}
                      </p>
                    </div>
                  </div>
                </div> */}
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
                              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                              fill="#E3B142"
                            />
                            <path
                              fillRule="evenodd"
                              clip-rule="evenodd"
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
                              clip-rule="evenodd"
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
                    const replaceVideoLink = fd.videoLink.replace("watch?v=", "embed/");
                    const findSection = blogDetails.blogSection &&
                      blogDetails.blogSection.find((i) => i == fd._id)
                    if (findSection) {
                      return (
                        <>
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
                            {/* <div className="blog-details-text-part3">
                      {fd.videoLink === "undefined" ?(
                        ""
                      ):(
                        <div>
                        <iframe
                          width="100%"
                          height={replaceVideoLink ? '100%' : ''}
                          src={`${replaceVideoLink}`}
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>
                      )}
                     </div> */}
                          </div>
                        </>
                      )
                    }
                  })}
                  <div className="blog-details-card my-5">
                    <p>Latest news</p>
                    <div className="blog-details-lastes">
                      {blog.slice(-2).map((fd, i) => (
                        <div className="blogcard col-12 col-md-3 col-sm-6" key={i}>
                          <Link to={`/blogDetails/${fd._id}`}>
                            <figure>
                              <img src={fd.coverImage} alt="rectangle127" />
                            </figure>
                          </Link>
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
                        </div>
                      ))}

                    </div>
                  </div>
                </div>
              </div>
              <Blogs />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default BlogDetails;
