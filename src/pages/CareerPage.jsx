
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Vacancy from "./Vacancy";
import { useContext } from "react";
import ApiLinkContext from "../context/ApiLinkContext";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import LazyLoad from "react-lazy-load";
import { Helmet } from "react-helmet";
import Faq from "../components/home/Faq";
const CareerPage = () => {
  const { ApiLink2 } = useContext(ApiLinkContext);
  const [banner, setBanner] = useState([]);
  const [join, setJoin] = useState([]);
  const [ourTeam, setOurTeam] = useState([]);
  const [vacancy, setVacancy] = useState([]);
  const [faq, setFaq] = useState([]);
  useEffect(() => {
    Promise.all([
      axios.get(`${ApiLink2}/banner`),
      axios.get(`${ApiLink2}/jointeam`),
      axios.get(`${ApiLink2}/ourteam`),
      axios.get(`${ApiLink2}/vacancy`),
      axios.get(`${ApiLink2}/faqCareer`),
    ]).then(([bannerRes, joinRes, ourRes, vacancyRes, faqRes]) => {
      const bannerData = bannerRes.data.data[0];
      const joinData = joinRes.data.data[0];
      const ourTeamData = ourRes.data.ourTeam;
      const vacancyData = vacancyRes.data.data[0];
      const faqCareer = faqRes.data.data;
      setVacancy(vacancyData);
      setOurTeam(ourTeamData);
      setJoin(joinData);
      setBanner(bannerData);
      setFaq(faqCareer);
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
    ],
  };
  // console.log(faq);
  return (
    <>
      <Helmet>
        <title>Career</title>
      </Helmet>
      <section className="career-page">
        <div className="career-page-headline">
          <div className="image-container">
            <img src={banner.image} alt={banner.title} className="img-fluid" id="bannerImg" />
            <div className="image-overlay"></div>
          </div>
        </div>
        <div className="career-page-coffee">
          <h2>{join.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: join.text }} />
          <div className="career-page-iframe">
            <div className="career-page_teamimg">
              <LazyLoad>
                <img src={join.image} className="img-fluid" alt={join.title} id="careerImgBig" />
              </LazyLoad>
            </div>
            <div className="image-overlay"></div>
          </div>
          <h6 dangerouslySetInnerHTML={{ __html: join.miniText }} />
        </div>
        <div className="career-page-team">
          <h2>OUR TEAM</h2>
          <p>
            We warmly welcome every new employee who joins our team into our
            extended family. We&apos;re dedicated to providing them with the
            support and resources they need to thrive and grow professionally
          </p>
          <Slider {...settings}>
            {ourTeam.map((item, i) => (
              <div className="testimonials-inner" key={i}>
                <div className="card">
                  <LazyLoad>
                    <img src={item.image} className="card-img-top" alt={item.title}></img>
                  </LazyLoad>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <h6 className="card-subtitle">{item.position}</h6>
                    <p
                      className="card-text"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="career-page-vacancies">
          <h3>{vacancy.title}</h3>
          <p
            className="text"
            dangerouslySetInnerHTML={{ __html: vacancy.text }}
          />
          <div className="vacancies-card row g-3">
            {/*           
        <div className="col-12 col-md-6 col-lg-4">
        <div class="card">
          <div className="card-body">
            <div className='vacancy-title'>
            <h5 className="card-title">Barista</h5>
            <div className="vacancy-date">
              <p>20.06.2023</p>
            </div>
            </div>
            <p className="card-text"><i className="fa-solid fa-angle-right"></i></p>
            <p className='location'> <img src={location} alt="" /><span>Berlin (Germany)</span></p>
          </div>
        </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
        <div class="card">
          <div className="card-body">
            <div className='vacancy-title'>
            <h5 className="card-title">Barista</h5>
            <div className="vacancy-date">
              <p>20.06.2023</p>
            </div>
            </div>
            <p className="card-text"><i className="fa-solid fa-angle-right"></i></p>
            <p className='location'> <img src={location} alt="" /><span>Berlin (Germany)</span></p>
          </div>
        </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
        <div class="card">
          <div className="card-body">
            <div className='vacancy-title'>
            <h5 className="card-title">Barista</h5>
            <div className="vacancy-date">
              <p>20.06.2023</p>
            </div>
            </div>
            <p className="card-text"><i className="fa-solid fa-angle-right"></i></p>
            <p className='location'> <img src={location} alt="" /><span>Berlin (Germany)</span></p>
          </div>
        </div>
        </div> */}
            <Vacancy />
          </div>
          <center>
            <Link to="/careerform">
              <button className="view-all-btn">ADD CV</button>
            </Link>
          </center>
        </div>
      </section>
      <Faq faqs={faq} />
    </>
  );
};

export default CareerPage;
