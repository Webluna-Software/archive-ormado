import { useContext, useState, useEffect } from "react";
import { ApiLinkContext } from "../context/ApiLinkContext";
import axios from "axios";
import { Link, NavLink, useParams } from "react-router-dom";
import PreLoader from "./PreLoader";
import slugify from "slugify";
import LazyLoad from "react-lazy-load";
import { Helmet } from "react-helmet";

const Blogs = () => {
  const { id } = useParams();

  const { ApiLink2 } = useContext(ApiLinkContext);
  const [loading, setLoading] = useState(true);

  const [blog, setBlog] = useState([]);
  const [blogSection, setBlogSec] = useState([]);
  const [blogCategory, setBlogCategory] = useState([]);
  const [visible, setVisible] = useState(4);
  const path = window.location.pathname;

  useEffect(() => {
    // Fetch Blog data
    axios.get(`${ApiLink2}/blog`)
      .then((res) => {
        let blogData = res.data.blog;
        if (id === "all") {
          // Sort blogs by date before setting state
          blogData = blogData.sort((a, b) => new Date(b.date) - new Date(a.date));
          setBlog(blogData);
        } 
        else {
          const filtered = blogData.filter(
            (item) => item.blogCategory[0] == id
          );
          // Sort filtered blogs by date
          const sortedFiltered = filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
          setBlog(sortedFiltered);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching blog data:", error);
      });

    // Fetch Blog Section data
    axios.get(`${ApiLink2}/blogSection`).then((res) => {
      setBlogSec(res.data.blogSection);
      setLoading(false);
    });

    // Fetch Blog Category data
    axios.get(`${ApiLink2}/blogCategory`).then((res) => {
      setBlogCategory(res.data.data);
      console.log(res.data.data);
    });
  }, [path, id]);

  // const filterSection = (blogSection, blogSecId) => {
  //   return blogSection.find((id) => id == blogSecId) ? true : false;
  // };

  // const findFirstSection = (fd) => {
  //   const sections = blogSection.filter((item) =>
  //     filterSection(fd.blogSection, item._id)
  //   );

  //   const firstText = sections.find((i) => i.row == 1);
  //   return firstText ? firstText.text : false;
  // };

  const visibleShow = () => {
    setVisible((prev) => prev + 6);
  };

  const handleSelectChange = (e) => {
    const selectedId = e.target.value;
    if (selectedId === "all") {
      setBlog(blog);
      window.history.pushState(null, null, "/blogs/all");
    } else {
      window.history.pushState(null, null, `/blogs/${selectedId}`);
    }
    const event = new Event("popstate");
    window.dispatchEvent(event);
  };

  function formatReadCount(count) {
    return count < 1000 ? count.toString() : (count / 1000).toFixed(1) + "k";
  }

  return (
    <>
      <section className="blogsPage">
        <hr style={{ color: "orange", fontWeight: "bold" }} />
        <div className="container-fluid">
          {loading ? (
            <PreLoader />
          ) : (
            <>
              <Helmet>
                <title>Blog</title>
              </Helmet>
              <div className="row m-0 justify-content-start">
                <div className="col-2 categoryTitle">
                  <NavLink to={`/blogs/all`}>
                    <button className={`${id === "all" ? "activebtn" : ""}`}>
                      ALL CATEGORIES
                    </button>
                  </NavLink>
                </div>
                {blogCategory.map((i) => (
                  <div className="col-2 categoryTitle" key={i._id}>
                    <NavLink to={`/blogs/${i._id}`}>
                      <button className={`${id === i._id ? "activebtn" : ""}`}>
                        {i.title}
                      </button>
                    </NavLink>
                  </div>
                ))}
                <select name="" id="" onChange={handleSelectChange} value={id}>
                  <option value="all">ALL CATEGORIES:</option>
                  {blogCategory.map((i) => (
                    <option value={i._id} key={i._id}>
                      {i.title}
                    </option>
                  ))}
                </select>
                <div className="blogs mt-5">
                  <div className="title">
                    <h3>Blog</h3>
                  </div>
                  <div className="cardsBlogs row m-0 ">
                    {blog.slice(0, visible).map((item, i) => (
                      <div
                        className="blogcard col-12 col-md-4 col-lg-3 h-100"
                        key={i}
                      >
                        <LazyLoad>
                          <Link
                            to={`/blogDetails/${slugify(item.title).toLowerCase()}`}
                            style={{ color: "#000" }}
                          >
                            <figure>
                              <img src={item.coverImage} alt="rectangle127" />
                            </figure>
                            <div className="card-header ">
                              <p className="p-title">{item.title}</p>
                              {/* <p
                                className="p-body-text"
                                dangerouslySetInnerHTML={{
                                  __html: findFirstSection(item),
                                }}
                              /> */}
                              <p className="p-body-read">
                                <span> Read more</span>
                              </p>
                              <div className="date-number">
                                <span>
                                  {formatReadCount(item.readCount)} read
                                </span>
                                <span>{item.date}</span>
                              </div>
                            </div>
                          </Link>
                        </LazyLoad>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-2 col-lg-2">
                  <div
                    className={`loadMoreBtn mt-4 ${
                      blog.length > visible ? "" : "d-none"
                    }`}
                  >
                    <button onClick={visibleShow}>Load More</button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Blogs;
