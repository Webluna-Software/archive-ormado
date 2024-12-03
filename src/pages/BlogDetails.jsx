import { useContext, useEffect, useState } from "react";
import productImg from "../assets/img/BlogComment.png";
import axios from "axios";
import ApiLinkContext from "../context/ApiLinkContext";
import { Link, useParams } from "react-router-dom";
import PreLoader from "./PreLoader";
import { Helmet } from "react-helmet";
import slugify from "slugify";
import LazyLoad from "react-lazy-load";

const BlogDetails = () => {
  const { blogId, blogTitle } = useParams();
  const { ApiLink2 } = useContext(ApiLinkContext);
  const [blog, setBlog] = useState([]);
  const [blogDet, setBlogDet] = useState([]);
  const [blogSec, setBlogSec] = useState([]);
  const [loading, setLoading] = useState(true);
  const path = window.location.pathname;


  useEffect(() => {
    axios.get(`${ApiLink2}/blog`)
      .then((res) => {
        const blogData = res.data.blog;
        setBlog(blogData);
        return axios.get(`${ApiLink2}/blog/${blogId}`);
      })
      .then((res) => {
        const blogDetails = res.data.blog;
        setBlogDet(blogDetails);
        // console.log(blogDetails, "BLOG");
  
        const sectionIds = blogDetails.blogSection; 
        if (sectionIds.length > 0) {
          const sectionPromises = sectionIds.map((id) =>
            axios.get(`${ApiLink2}/blogSection/${id}`)
          );
          return Promise.all(sectionPromises);
        } else {
          setLoading(false); 
          return [];
        }
      })
      .then((sectionResponses) => {
        const sections = sectionResponses.map((res) => res.data.blogSection);
        setBlogSec(sections);
        // console.log(sections, "BLOG SECTIONS");
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); 
      });
  }, [ApiLink2, blogId]);
  

  // const filterSection = (blogSec, blogSecId) => {
  //   const check = blogSec.find((section) => section._id === blogSecId);
  //   return check;
  // };
  // const findFirstSection = (fd) => {
  //   const sections = blogSec.filter((item) =>
  //     filterSection(fd.blogSection, item._id)
  //   );
  //   const firstText = sections.find((i) => i.row === 1);
  //   if (firstText) {
  //     return firstText.text;
  //   } else {
  //     return false;
  //   }
  // };

  let blogDetails = blog.find(
    (i) => slugify(i.title).toLowerCase() == blogTitle
  );

  useEffect(() => {
    if (blogDetails) {
      const updateCount = blogDetails.readCount + 1;
      const formData = {
        readCount: updateCount,
        title: blogDetails.title,
        description: blogDetails.description
      };
      axios.put(`${ApiLink2}/blog/${blogDetails._id}`, formData)
        .then((res) => {
          // console.log(res.data);
        })
        .catch((err) => {
          console.log(err, "put error");
        });
    }
  }, [blogDetails]);
  


  function formatReadCount(count) {
    if (count < 1000) {
      return count.toString();
    } else {
      return (count / 1000).toFixed(1) + "k";
    }
  }
  const formattedReadCount = formatReadCount(  blogDet && blogDet.readCount);


  // Eyni ID li bloglar ucun filter -A
  const filteredBlogs = blog.filter((item) => item._id !== blogDet._id);

  const getYoutubeEmbedUrl = (url) => {
    let videoId = null;

    if (url.includes("youtu.be")) {
      videoId = url.split("youtu.be/")[1].split("?")[0];
    } else if (url.includes("youtube.com")) {
      const params = new URLSearchParams(url.split("?")[1]);
      videoId = params.get("v");
    }

    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return "";
  };

  return (
    <>
      <section className="BlogDetails">
        {loading ? (
          <PreLoader />
        ) : (
          <>
            <Helmet>
              <title>{blogDet.title}</title>
              <meta property="og:title" content={`${blogDet.title}`} />
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
                        <h3>{blogDet.title}</h3>
                        <p>{blogDet.author}</p>
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
                            {blogDet.date}
                          </p>
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
                            {formattedReadCount}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blog-details-section2 md-my-5">
                    <div className="main-details ">
                      {blogSec.map((fd, i) => {
                        const findSection =
                          blogDetails.blogSection &&
                          blogDetails.blogSection.find((i) => i == fd._id);
                        // console.log(findSection,"budur");
                        if (findSection) {
                          return (
                            <div className="blog-details-text" key={i}>
                              <div className="blog-details-text-part1 my-5">
                                {fd.title == "undefined" ? (
                                  ""
                                ) : (
                                  <p>{fd.title}</p>
                                )}
                                {fd.text == "undefined" ? (
                                  ""
                                ) : (
                                  <div>
                                    <p
                                      dangerouslySetInnerHTML={{
                                        __html: fd.text,
                                      }}
                                    />
                                  </div>
                                )}
                              </div>
                              <div className="blog-details-text-part2 ">
                                <div className="blog-details-part2-text">
                                  {fd.image.length == 0 ? (
                                    ""
                                  ) : (
                                    <LazyLoad>
                                      <img
                                        src={fd.image}
                                        className="img-fluid w-100"
                                      />
                                    </LazyLoad>
                                  )}
                                </div>
                              </div>
                              <div className="blog-details-text-part3">
                                {fd.videoLink === "undefined" ? (
                                  ""
                                ) : (
                                  <div>
                                  <iframe
                                  width="100%"
                                  height="400px"
                                  src={getYoutubeEmbedUrl(fd.videoLink)}
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  allowFullScreen
                                ></iframe>
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        }
                      })}
                    </div>
                    <div className="blog-details-card my-5">
                      <p className="latest-news"> Explore More</p>
                      <div className="blog-details-lastes">
                        {filteredBlogs.slice(0, 3).map((fd, i) => (
                          <div
                            className="blogcard col-12 col-md-3 col-sm-6"
                            key={fd._id}
                          >
                            <Link
                          style={{ color: "#000" }}
                          to={`/blogDetails/${fd._id}/${slugify(fd.title).toLowerCase()}`}
                          onClick={(e) => { 
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                            >
                              <figure>
                                <img src={fd.coverImage} alt="rectangle127" />
                              </figure>

                              <div className="card-header">
                                <p className="p-title">{fd.title}</p>
                                <p
                                  className="p-body"
                                  dangerouslySetInnerHTML={{
                                    __html: (fd.description),
                                  }}
                                />
                                <p className="p-body">
                                  <span>Read more</span>
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
                  </div>
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