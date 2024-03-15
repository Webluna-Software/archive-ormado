import React from 'react';
import HeadlineImg from '../assets/img/product-information.png';
import Slider from 'react-slick';
import Team from '../assets/img/career-team.png';
import Faq from '../components/home/Faq';
import location from '../assets/img/icon.png';
const CareerPage = () => {
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
  return (
    <section className='career-page'>
      <div className="career-page-headline">
        <div className="image-container">
          <img src={HeadlineImg} alt="" className='img-fluid' />
          <div className="image-overlay">
            <h3>CAREER</h3>
          </div>
        </div>
      </div>
      <div className="career-page-coffee">
        <h2>COFFEE</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
        <div className='career-page-iframe'>
          <iframe width="100%" height="437" src="https://www.youtube.com/embed/GWIAwS09PpM?si=nppeGJkkqgi33HeB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className="image-overlay">
          </div>
        </div>
        <h6>Numquam ea sapiente quas distinctio maxime dolorem. Nam animi reiciendis. Amet nihil consectetur doloribus id dolor deserunt itaque quos exercitationem. Voluptatibus in alias. Modi modi ducimus incidunt.</h6>
      </div>
      <div className="career-page-team">
        <h2>OUR TEAM</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
        <Slider {...settings}>
          <div className="testimonials-inner">
            <div class="card">
              <img src={Team} class="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Lucia moura</h5>
                <h6 class="card-subtitle">Developer</h6>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="testimonials-inner">
            <div class="card">
              <img src={Team} class="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Lucia moura</h5>
                <h6 class="card-subtitle">Developer</h6>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="testimonials-inner">
            <div class="card">
              <img src={Team} class="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Lucia moura</h5>
                <h6 class="card-subtitle">Developer</h6>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="testimonials-inner">
            <div class="card">
              <img src={Team} class="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Lucia moura</h5>
                <h6 class="card-subtitle">Developer</h6>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="testimonials-inner">
            <div class="card">
              <img src={Team} class="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Lucia moura</h5>
                <h6 class="card-subtitle">Developer</h6>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="testimonials-inner">
            <div class="card">
              <img src={Team} class="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Lucia moura</h5>
                <h6 class="card-subtitle">Developer</h6>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="career-page-vacancies">
        <h3>New open <span>vacancies</span></h3>
        <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. </p>
        <div className="vacancies-card row g-3">
          
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
        </div>

        </div>
        <button className='view-all-btn'>View all</button>
      </div>
      <div className="career-page-events">
        <h3>Our <span>events</span></h3>
        <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. </p>
      </div>
      <Faq />
    </section>
  )
}

export default CareerPage