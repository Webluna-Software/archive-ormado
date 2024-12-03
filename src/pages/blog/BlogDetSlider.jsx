import React, { useState, useEffect } from 'react';
import Slider from 'react-slick'; // Import react-slick
import 'slick-carousel/slick/slick.css'; // Import Slick CSS
import 'slick-carousel/slick/slick-theme.css'; // Import Slick theme CSS
import { Link } from 'react-router-dom';
import slugify from 'slugify';

const BlogDetSlider = ({ filteredBlogs }) => {
  const [blogs, setBlogs] = useState(filteredBlogs || []);

  useEffect(() => {
    if (filteredBlogs && filteredBlogs.length > 0) {
      setBlogs(filteredBlogs);
    } else {
      const fetchBlogs = async () => {
        try {
          const response = await fetch('/api/blogs'); // Adjust your API endpoint
          const data = await response.json();
          setBlogs(data);
        } catch (error) {
          console.error('Error fetching blogs:', error);
        }
      };

      fetchBlogs();
    }
  }, [filteredBlogs]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <Link to={`/blogDetails/${blog._id}/${slugify(blog.title).toLowerCase()}`}>
            <div className="slider-card">
              <img src={blog.coverImage} alt={blog.title} />
              <p>{blog.title}</p>
              <span>{blog.date}</span>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default BlogDetSlider;
