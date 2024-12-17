import { useContext, useState, useEffect } from "react";
import { ApiLinkContext } from "../../context/ApiLinkContext";
import axios from "axios";
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
                          <p  className="body-text " dangerouslySetInnerHTML={{ __html: ksmBanner.text }}/>
                            <div className="ormadoBtn ">
                            <button type="button" onClick={handleScrollToTop}>Learn More</button>
                            </div>
                          </div>
                          <div className=" img-part col-12 col-sm-6  col-md-6  ">
                          <img src={ksmBanner.image}  alt={ksmBanner.title}  />
                          </div>
                        </div>
                </div>
    </section>
    </>
  )
}

export default CorporateSec