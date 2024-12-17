import { useContext, useEffect, useState } from "react";
import iconlocation from "../assets/img/iconlocation.png";
import careerdata from "../data/careerdata";
import { Link } from "react-router-dom";
import { ApiLinkContext } from "../context/ApiLinkContext";
import axios from "axios";
import slugify from "slugify";
const Vacancy = () => {
  const { ApiLink2 } = useContext(ApiLinkContext);
  const [vacancy, setVacancy] = useState([]);
  useEffect(() => {
    axios.get(`${ApiLink2}/vacancies`)
      .then((res) => {
        const vacancyData = res.data.data;
        console.log(vacancyData);
        setVacancy(vacancyData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="Vacancy">
        <div className="container-fluid px-0">
          {/* <div className="title">
            <h1>Our <span>Vacancies</span></h1>
            <p>If you want to evaluate the career opportunities at Ormado Kaffeehaus, fill out the form right now and we will contact you when our vacancy becomes active!</p>
            <Link to="/careerform" className='btn btn-warning ' href="">Add CV</Link>
          </div> */}

          {vacancy.length === 0 ? (
            <div className="text-center my-5 alert alert-warning">
              There are currently no vacancies
            </div>
          ) : (
            vacancy.map((item) => {
              return (
                <Link
                  key={item.id}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  to={`/careerdetails/${slugify(item.position).toLowerCase()}`}
                >
                  <div className="sendingbox mt-5">
                    <div className="firstbox col-10">
                      <div className="writingbox">
                        <div className="upperside">
                          <h2>{item.position}</h2>
                          <a className="timebtn btn btn-primary" href="">
                            {item.time}{" "}
                          </a>
                        </div>
                        <div className="lowerside mt-2">
                          <img src={iconlocation} alt="" />
                          <h2 className="ms-2 mt-2">{item.adress}</h2>
                        </div>
                      </div>
                      <div className="click">
                        <i className="myicon fa-solid fa-chevron-right"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })
          )}

          {/* <div className="centerbtn  mt-3">
            <button className='lowbtn btn btn-white ' href="">Load more </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Vacancy;
