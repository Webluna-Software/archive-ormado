import { useContext, useEffect, useState } from "react";
import franchise from "../../assets/img/franchise.png"
import { Link } from "react-router-dom";
import ApiLinkContext from "../../context/ApiLinkContext";
import axios from "axios";

const Franchise = () => {

  const [franchiseApi, setFranchiseApi] = useState([])
  const { ApiLink2 } = useContext(ApiLinkContext)

  useEffect(() => {
    axios.get(`${ApiLink2}/franchise`)
      .then((res) => {
        setFranchiseApi(res.data.data[0])
        console.log(res.data.data, "home section franchise")
          .catch((err) => {
            console.log(err)
          })
      })
  }, [])

  //Dahboardan elave tag ile gelen text ve desc qarsisini almaq ucun!
  const stripHtmlTags = (html) => {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
  };
  const decodeHtmlEntities = (text) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = text;
    return txt.value;
  };

  return (
    <>
      <section className="franchise-mobile d-none mt-5" >
        <div className="bg-clr ">
          <p>
            {franchiseApi.title}
          </p>
          <p>{stripHtmlTags(decodeHtmlEntities(franchiseApi.desc))}</p>
          <div className="ormado-button">
            <Link to="/franchise"><button className="ormado-button">INQUIRE NOW</button></Link>
          </div>
        </div>
      </section>

      <section className="myfranchise ">
        <div className="franc-con ">
          <div className="left">
            <div className="text">
              <p>
                {franchiseApi.title}
              </p>
            </div>
            <div className="ormado-about">
              <p>{stripHtmlTags(decodeHtmlEntities(franchiseApi.desc))}</p>
            </div>
            <div className="ormado-button">
              <Link to="/franchise"><button>INQUIRE NOW</button></Link>
            </div>
          </div>

          <div className="right">
            <img className="img-fluid" src={franchise} alt="Franchise Image" />
          </div>
        </div>

      </section>

    </>

  );
};

export default Franchise;