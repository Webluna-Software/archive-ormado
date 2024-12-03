import { useContext, useState, useEffect } from "react";
import { ApiLinkContext } from "../context/ApiLinkContext";
import axios from "axios";
import PreLoader from "./PreLoader";
import { Helmet } from "react-helmet";
import LazyLoad from "react-lazy-load";
const CorporateSocialRes = () => {
  const [ksmCard, setKsmCard] = useState([]);
  const [ksmBanner, setKsmBanner] = useState([]);
  const [loading, setLoading] = useState(true);
  const { ApiLink2 } = useContext(ApiLinkContext);

  useEffect(() => {
    axios.get(`${ApiLink2}/ksmBanner`)
      .then((response) => {
        // console.log("Ksm Banner Data:", response.data);
        console.log(ksmBanner.image); // URL-ni konsola çap edin
      //  console.log(fd.image); // URL-ni konsola çap edin

        setKsmBanner(response.data.ksmBanner[0]);
      })
      .catch((error) => {
        console.error("Error fetching ksmBanner data:", error);
      });
    axios.get(`${ApiLink2}/ksmCard`)
      .then((response) => {
        console.log("Ksm Card Data:", response.data);
        setKsmCard(response.data.ksmCard);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching ksmCard data:", error);
        setLoading(false);
      });
  }, []);



  return (
    <>
      <section className='Csr'>
        <div className="section-banner">
          <div className="container">
            <div className="row flex-lg-row-reverse">
              <div className="img-part col-12 col-sm-6  col-md-6  ">
                <img src={ksmBanner.image}  alt={ksmBanner.title}  />
              </div>
              <div className="text-part col-12 col-sm-6 col-md-6 ">
                <h2>{ksmBanner.title}</h2>
                {/* <h2 >Enjoy your  <span>coffee </span>   <span>before</span> your activity</h2> */}
                <p  className="body-text " dangerouslySetInnerHTML={{ __html: ksmBanner.text }}/>
              </div>
            </div>
          </div>
        </div>
        <section className='section-main'>
          <div className="container">
            {loading ? (
              <PreLoader />
            ) : (
              <>
                <Helmet>
                  <title>CorporateSocialResponsibility</title>
                </Helmet>
                <div className="row">
                  {ksmCard.map((fd, index) => (
                    <div className="card-main col-12" key={index}>
                      <div className="card-image">
                        <LazyLoad height={200} offset={100} once>
                          <img src={fd.image} className="img-fluid" alt={fd.title} loading="lazy"    style={{ backgroundColor: "transparent" }} />
                        </LazyLoad>
                      </div>
                      <div className="card-body">
                        <p className='body-title'>{fd.title}</p>
                        <p  className="lead body-text " dangerouslySetInnerHTML={{ __html: fd.text }}/>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </section>
    </>
  )
}

export default CorporateSocialRes