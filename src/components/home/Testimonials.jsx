/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react'
import Slider from 'react-slick'
import ApiLinkContext from '../../context/ApiLinkContext';
import axios from 'axios';

const Testimonials = () => {
  const { ApiLink2 } = useContext(ApiLinkContext);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`${ApiLink2}/testimonal`)
      .then((res) => {
        setTestimonials(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    sldesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
  }
  const [expandedArray, setExpandedArray] = useState(new Array(testimonials.length).fill(false));

  const toggleExpand = (index) => {
    event.preventDefault();
    const newExpandedArray = [...expandedArray];
    newExpandedArray[index] = !newExpandedArray[index];
    setExpandedArray(newExpandedArray);
  }
  
  return (
    <>
      {loading ? <p>Loading</p> :
       <div className="testimonials-div">
        <h3>Testimonial</h3>
        <Slider {...settings}>
          {testimonials.map((fd, index) => (
            <div className="testimonials-inner" key={fd._id}>
              <div className="card" key={index}>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <g clipPath="url(#clip0_891_5)">
                    <path d="M14.0633 25.3334C16.8322 25.3334 19.539 26.1545 21.8413 27.6928C24.1435 29.2311 25.938 31.4176 26.9976 33.9758C28.0572 36.534 28.3345 39.3489 27.7943 42.0646C27.2541 44.7804 25.9207 47.2749 23.9628 49.2329C22.0048 51.1908 19.5103 52.5242 16.7945 53.0644C14.0788 53.6046 11.2639 53.3273 8.7057 52.2677C6.14754 51.2081 3.96103 49.4136 2.42269 47.1114C0.884353 44.8091 0.0632676 42.1023 0.0632676 39.3334L-0.000732422 37.3334C-0.000732422 29.9073 2.94926 22.7854 8.20028 17.5344C13.4513 12.2834 20.5732 9.33337 27.9993 9.33337V17.3334C25.3717 17.3263 22.7688 17.8402 20.341 18.8454C17.9133 19.8505 15.7089 21.327 13.8553 23.1894C13.1348 23.9084 12.4703 24.6813 11.8673 25.5014C12.5833 25.3894 13.3153 25.3294 14.0593 25.3294L14.0633 25.3334ZM50.0633 25.3334C52.8322 25.3334 55.539 26.1545 57.8413 27.6928C60.1435 29.2311 61.938 31.4176 62.9976 33.9758C64.0572 36.534 64.3345 39.3489 63.7943 42.0646C63.2541 44.7804 61.9207 47.2749 59.9628 49.2329C58.0048 51.1908 55.5103 52.5242 52.7945 53.0644C50.0788 53.6046 47.2639 53.3273 44.7057 52.2677C42.1475 51.2081 39.961 49.4136 38.4227 47.1114C36.8844 44.8091 36.0633 42.1023 36.0633 39.3334L35.9993 37.3334C35.9993 29.9073 38.9493 22.7854 44.2003 17.5344C49.4513 12.2834 56.5732 9.33337 63.9993 9.33337V17.3334C61.3717 17.3263 58.7688 17.8402 56.341 18.8454C53.9133 19.8505 51.7089 21.327 49.8553 23.1894C49.1349 23.9084 48.4703 24.6813 47.8673 25.5014C48.5833 25.3894 49.3153 25.3294 50.0633 25.3294V25.3334Z" fill="#E3B142" />
                  </g>
                  <defs>
                    <clipPath id="clip0_891_5">
                      <rect width="64" height="64" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className="card-body">
                  <h5 className="card-title">{fd.title}</h5>
                  <p className="card-text"  dangerouslySetInnerHTML={{ __html: expandedArray[index] ? fd.text:  `${fd.text.slice(0, 100)}...`}}/>
                  <a href="#" onClick={() => toggleExpand(index)}>
                    {expandedArray[index] ? 'See Less' : 'See More'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>}
    </>
  )
}

export default Testimonials