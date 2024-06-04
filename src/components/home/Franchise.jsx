import { useContext, useEffect, useState } from "react";
import franchise from "../../assets/img/franchise.png"
import { Link } from "react-router-dom";
import ApiLinkContext from "../../context/ApiLinkContext";
import axios from "axios";

const Franchise = () => {
  const [franchiseApi,setFranchiseApi] = useState([])
  const {ApiLink2} = useContext(ApiLinkContext)
  useEffect(()=>{
    axios.get(`${ApiLink2}/franchise`)
    .then((res)=>{
      setFranchiseApi(res.data.data[0])
      .catch((err)=>{
        console.log(err)
      })
    })
  },[])
  return (
    <>
        <section className="franchise-mobile d-none" >
      <div className="bg-clr">
      <p>
      {franchiseApi.title}
        </p>
        <p dangerouslySetInnerHTML={{__html:franchiseApi.desc}}/>
        <div className="ormado-button">
              <Link to="/franchise"><button className="ormado-button">INQUIRE NOW</button></Link>
            </div>
      </div>

      </section>

      <section className="myfranchise">
     
     <div className="franc-con">
       <div className="left">
        
         <div className="text">
           <p>
            {franchiseApi.title}
           </p>
         </div>

         <div className="ormado-about">
           <p dangerouslySetInnerHTML={{__html:franchiseApi.desc}}/>
         </div>
         <div className="ormado-button">  
           <Link to="/franchise"><button>INQUIRE NOW</button></Link>
         </div>     
       </div>
    
       <div className="right">
       <img className="img-fluid" src={franchise} alt="" />
       </div>
     </div>
  
 </section>
    
    </>
  
  );
};

export default Franchise;