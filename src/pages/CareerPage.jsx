// import HeadlineImg from '../assets/img/product-information.png';
import career from "../assets/img/karyerabanner.png";
import careerteam from "../assets/img/careerteam.jpg";
import Slider from "react-slick";
import Team from "../assets/img/career-team.png";
// import Faq from "../components/home/Faq";
// import location from "../assets/img/icon.png";
import baristaone from "../assets/img/Nihad.png";
import baristatwo from "../assets/img/Leyla.png";
import baristathree from "../assets/img/Thomas.png";
import baristafour from "../assets/img/Jenny.png";
import { Link } from "react-router-dom";
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
    ],  
  };
  return (
    <section className="career-page">
      <div className="career-page-headline">
        <div className="image-container">
          <img src={career} alt="" className="img-fluid" />
          <div className="image-overlay"></div>
        </div>
      </div>
      <div className="career-page-coffee">
        <h2>Join Our Team: Build Your Career at Ormado Kaffeehaus</h2>
        <p>
          At ORMADO KAFFEEHAUS, our team is the heart and soul of everything we
          do. We're a passionate group of individuals dedicated to serving up
          delicious coffee, creating welcoming environments, and fostering
          connections within our community.{" "}
        </p>
        <div className="career-page-iframe">
          <div className="career-page_teamimg">
            <img src={careerteam} className="img-fluid" alt="" />
          </div>
          <div className="image-overlay"></div>
        </div>
        <h6>
          We believe that great things cannot be achieved without having a great
          team spirit. We are grateful to all our employees who joined our team
          and added value!
        </h6>
      </div>
      <div className="career-page-team">
        <h2>OUR TEAM</h2>
        <p>
          We warmly welcome every new employee who joins our team into our
          extended family. We're dedicated to providing them with the support
          and resources they need to thrive and grow professionally
        </p>
        <Slider {...settings}>
          <div className="testimonials-inner">
            <div className="card">
              <img src={baristatwo} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Leyla Yahyayeva</h5>
                <h6 className="card-subtitle">Barista</h6>
                <p className="card-text">
                  Working at Ormado Kaffeehaus has been an absolute delight from
                  day one. The team camaraderie, coupled with the genuine
                  passion for crafting exceptional coffee experiences, makes
                  every shift feel like a rewarding adventure. Ormado's
                  commitment to quality shines through in every cup we serve,
                  and the supportive environment fosters personal growth and
                  skill development. Plus, the warm atmosphere and appreciation
                  from both colleagues and customers create a sense of belonging
                  that's truly special. Proud to be part of the Ormado family!
                </p>
              </div>
            </div>
          </div>
          <div className="testimonials-inner">
            <div className="card">
              <img src={baristaone} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Nihad Qasimov</h5>
                <h6 className="card-subtitle">Barista</h6>
                <p className="card-text">
                  Joining the team at Ormado Kaffeehaus has been a game-changer
                  for me. Not only do I get to indulge my love for coffee every
                  day, but I also get to do it in an environment that feels like
                  home. The management's dedication to fostering a positive
                  workplace culture is evident in every interaction, making each
                  shift a pleasure. With opportunities for advancement and a
                  commitment to excellence, Ormado truly stands out as a place
                  where passion meets profession. Grateful to be part of this
                  vibrant coffee community!
                </p>
              </div>
            </div>
          </div>
          <div className="testimonials-inner">
            <div className="card">
              <img src={baristathree} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Thomas Makris</h5>
                <h6 className="card-subtitle">Barista</h6>
                <p className="card-text">
                  At Ormado Kaffeehaus, I've found more than just a job; I've
                  found a second family. From the moment I stepped behind the
                  espresso machine, I knew I was part of something special. The
                  emphasis on teamwork and constant pursuit of perfection makes
                  every day exciting and fulfilling. Whether it's perfecting
                  latte art or creating unique drink recipes, there's always
                  room to grow and innovate. Ormado's dedication to both its
                  employees and customers creates an atmosphere that's as
                  inviting as its delicious coffee. Thrilled to be a part of
                  this passionate team!
                </p>
              </div>
            </div>
          </div>
          <div className="testimonials-inner">
            <div className="card">
              <img src={baristafour} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Jenny Holloway</h5>
                <h6 className="card-subtitle">Barista</h6>
                <p className="card-text">
                  Working at Ormado Kaffeehaus has been an enriching journey
                  filled with aromatic brews and genuine connections. From the
                  first aromatic espresso pull to the final latte art flourish,
                  every moment is infused with a sense of purpose and passion.
                  The supportive team atmosphere and commitment to excellence
                  create an environment where I'm not just an employee, but a
                  valued member of a tight-knit community. Ormado's dedication
                  to quality and customer satisfaction sets the stage for
                  unforgettable coffee experiences, making each day a rewarding
                  adventure. Proud to be a part of such a vibrant coffee
                  culture!
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="career-page-vacancies">
        <h3>Vacancies</h3>
        <p className="text">
          Are you passionate about coffee and providing exceptional customer
          service? Do you thrive in a fast-paced environment where every day
          brings new challenges and opportunities? If so, we want you to join
          our team at Ormado!{" "}
        </p>
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
          <div className="text-center my-5 alert alert-warning">
            There are currently no vacancies
          </div>
        </div>
        <center>
          <Link to="/vacancy">
            <button className="view-all-btn">View all</button>
          </Link>
        </center>
      </div>
      {/* <div className="career-page-events">
        <h3>Our <span>events</span></h3>
        <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. </p>
      </div>
      <Faq /> */}
    </section>
  );
};

export default CareerPage;
