import { useContext, useEffect, useState } from 'react';
import icon from "../../assets/img/icon.png";
import { ApiLinkContext } from "../../context/ApiLinkContext";
import axios from "axios";

const ContactLocation = () => {
  const { ApiLink2 } = useContext(ApiLinkContext);
  const [map, setMap] = useState([]);
  const [datamap, setDatamap] = useState(null);
  const [active, setActive] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null); 

  useEffect(() => {
    axios(`${ApiLink2}/map`)
      .then((res) => {
        // console.log(res.data, "SearchMap");
        const mapData = res.data.data;
        if (Array.isArray(mapData)) {
          setMap(mapData);
          setDatamap(mapData[0]); 
          setActive(mapData[0].id); 
          setActiveIndex(0); 
        } else {
          console.error("err:", mapData);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ApiLink2]);

  const filtermap = (searchmap, index) => { 
    const newmap = map[searchmap];
    setDatamap(newmap);
    setActive(searchmap);
    setActiveIndex(index); 
  };

  return (
    <>
      <div className="titlebox">
      <h1>Select address</h1>
      <p>Enjoy the unique Ormado Kaffeehaus experience in our flagship stores and franchising shops.</p>
      </div>
      <div className="ormadolocation">
        <div className="mysize-width boxcontainer">
          <div className="my">
            <div className="container">
              <div className="row">
                <div className="leftmap col-12 col-xs-12 col-sm-12 col-md-5 col-xl-5">
                  <div className="text-box gap-3">
                    {map.map((item, i) => (
                      <div
                        onClick={() => {
                          filtermap(i, i); 
                        }}
                        key={item.id}
                        className={`p-3 firststage ${activeIndex === i ? "aktivdir" : ""}`}
                      >
                        <h6>{item.name}</h6>
                        <h6>{item.email}</h6>
                        <h6>{item.phone}</h6>
                        <h6>{item.workTime}</h6>
                        <h6>
                          <img src={icon} alt="error" />
                          <span className="ms-1">{item.address}</span>
                        </h6>
                      </div>
                    ))}
                  </div>
                </div>
                {datamap && (
                  <div className="rightmap col-12 col-xs-12 col-sm-12 col-md-7 col-xl-7" key={datamap.id}>
                    <div className="map">
                      <iframe className='myiframe' src={datamap.mapLink} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactLocation;
