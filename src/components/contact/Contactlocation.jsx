import  { useEffect, useState } from 'react'
import mydata from "../../data/contactdata"
import icon from "../../assets/img/icon.png"

const Contactlocation = () => {

  const [datamap, setdatamap] = useState([]);
  const [active,setactive] =useState(0);
  useEffect(() => {
    filtermap(0)
  }, [])

  const filtermap = (searchmap) => {
    if (searchmap === "all") {
      setdatamap(mydata)
    }
    else {
      const newmap = mydata.filter((item) => item.id === searchmap)
      setdatamap(newmap,active)
    }
  }

  return (
    <>
    <div className="titlebox">
              <h1>Select address</h1>
              <p>Enjoy the unique Ormado Kaffeehaus experience in our flagship stores and franchising shops.</p>
            </div>
      <div className="ormadolocation ">
        <div className="mysize-width boxcontainer">
         <div className="my">
         <div className="container">
            <div className="row">
              <div className="leftmap col-12 col-xs-12 col-sm-12 col-md-5  col-xl-5 ">
                <div className="text-box gap-3">
                  {mydata.map((item, i) => {
                    return (
                      <div
                        onClick={()=>{
                          filtermap(i);
                          setactive(i);
                        }}
                       key={item.id} className={`p-3 ${i == `${item.id}`?  "firststage"  : "" }  ${active == i ? "aktivdir" : ""}  `}
                      >
                        <h6>{item.name}</h6>
                        <h6>{item.email}</h6>
                        <h6>{item.phone}</h6>
                        <h6>{item.hours}</h6>
                        <h6> <img src={icon} alt="error"/>  <span className="ms-1">{item.address}</span></h6>
                      </div>
                    )
                  })}
                </div>
              </div>

              {datamap.map((item) => {
                return (
                  <div className="rightmap  col-12 col-xs-12 col-sm-12  col-md-7  col-xl-7"  key={item.id}>
                    <div className="map">
                      <iframe className='myiframe' src={item.map} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>
         </div>
        </div>
      </div>

    </>
  )
}

export default Contactlocation