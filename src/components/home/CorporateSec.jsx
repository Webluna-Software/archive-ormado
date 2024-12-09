import { useContext, useState, useEffect } from "react";
import { ApiLinkContext } from "../../context/ApiLinkContext";
import axios from "axios";
import img from "../../assets/img/pngwing1.png"
import { useNavigate } from 'react-router-dom'

const CorporateSec = () => {
  const navigate = useNavigate();
  const [ksmBanner, setKsmBanner] = useState([]);
  const { ApiLink2 } = useContext(ApiLinkContext);
  
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    navigate("/CorporateSocialResponsibility");
  };
  
  useEffect(() => {
    axios.get(`${ApiLink2}/ksmBanner`)
      .then((response) => {
        // console.log("Ksm Banner Data:", response.data);
        console.log(ksmBanner.image); 
      //  console.log(fd.image);

        setKsmBanner(response.data.ksmBanner[0]);
      })
      .catch((error) => {
        console.error("Error fetching ksmBanner data:", error);
      });
   
  }, []);

  return (
    <>
    <section className='csr-section '>
    <div class="container-fluid">
                <div className="row  ">
                        <div className=" text-part col-12 col-sm-6 col-md-6 ">
                        <h2>{ksmBanner.title}</h2>
                          {/* <h2 >Enjoy your  <span>coffee </span>   <span>before</span> your activity</h2> */}
                          <p  className="body-text " dangerouslySetInnerHTML={{ __html: ksmBanner.text }}/>
                          {/* <p className=" body-text ">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components</p> */}
                            <div className="ormadoBtn ">
                            <button type="button" onClick={handleScrollToTop}>Learn More</button>
                            </div>
                          </div>
                          <div className=" img-part col-12 col-sm-6  col-md-6  ">
                          <img src={ksmBanner.image}  alt={ksmBanner.title}  />
                          {/* <img src={img} className="d-block mx-lg-auto img-fluid" alt="Corparate Image"  loading="lazy" /> */}
                          </div>
                        </div>
                </div>
    </section>
    </>
  )
}

export default CorporateSec