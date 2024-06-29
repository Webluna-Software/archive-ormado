import Contactlocation from "../components/contact/Contactlocation";
// import Contactcards from '../components/contact/Contactcards'
// import background from "../assets/img/Frame.png";
import card from "../assets/img/searchbanner.png";
import { useContext, useEffect, useState } from "react";
import {ApiLinkContext} from "../context/ApiLinkContext"
import axios from "axios";

const SearchBranch = () => {
  const {ApiLink2} = useContext(ApiLinkContext)
  const [searchB,setSearchB] = useState([])
  
  useEffect(()=>{
    axios(`${ApiLink2}/bannerSB`)
    .then((res)=>{
      const searchData = res.data.data[0] ;
      setSearchB(searchData)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <div className="reserve">
      <div className="Reverse-title col-12 col-md-12 col-sm-12">
        <div className="first-card-img">
          <img
            className="img-fluid col-12 col-md-12 col-sm-12"
            src={searchB.image}
            alt=""
          />
        </div>
        {/* <img className="background img-fluid" src={background} alt="" /> */}
        <div className="first-card-title">
          <p>{searchB.title}</p>
        </div>
      </div>
      <Contactlocation />
      {/* <Contactcards /> */}
    </div>
  );
};

export default SearchBranch;