import Contactlocation from "../components/contact/Contactlocation";
import { useContext, useEffect, useState } from "react";
import {ApiLinkContext} from "../context/ApiLinkContext"
import axios from "axios";
import { Helmet } from "react-helmet";

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
   <>
    <Helmet>
     <title>Search a branch</title> 
    </Helmet>
    <div className="reserve">
      <div className="Reverse-title col-12 col-md-12 col-sm-12">
        <div className="first-card-img">
          <img
            className="img-fluid col-12 col-md-12 col-sm-12"
            src={searchB.image}
            alt="SearchABranch image"
            id="bannerImg"
          />
        </div>
        {/* <img className="background img-fluid" src={background} alt="" /> */}
        <div className="first-card-title">
          {/* <p>{searchB.title}</p> */}
        </div>
      </div>
      <Contactlocation />
      {/* <Contactcards /> */}
    </div>
   </>
  );
};

export default SearchBranch;