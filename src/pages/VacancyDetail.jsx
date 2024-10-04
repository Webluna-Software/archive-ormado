import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiLinkContext from "../context/ApiLinkContext";
import axios from "axios";
import slugify from "slugify";
import PreLoader from "./PreLoader";
import Faq from "../components/home/Faq";

const VacancyDetail = () => {
  const {vacancyId} = useParams()
  const { ApiLink2 } = useContext(ApiLinkContext)
  const [findData,setFindData] = useState([])
  const [faq,setFaq] = useState([])
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    Promise.all([
      axios.get(`${ApiLink2}/vacancies`),
      axios.get(`${ApiLink2}/faqVacancy`)
    ])
    .then(([vacanRes,faqRes])=>{
     const vacancyData = vacanRes.data.data
     const findVacancy = vacancyData.find((i)=>slugify(i.position).toLowerCase() == vacancyId)
     const faqData = faqRes.data.data ;
     setFaq(faqData)
     setFindData(findVacancy)
     setLoading(false)
    })
    .catch((err)=>{
      setLoading(false)
      console.log(err)
    })
  },[])
  return (
    <>
      {
        loading ? (<PreLoader/>)
        :(
         <>
      <div className="VacancyDetail mt-5">
        <div className="container">
          <div className="title">
            <h1>{findData.position}</h1>
            <h6 style={{fontWeight:"500"}} className="mt-3">
            <font color="orange">{findData.position}</font> with outstanding interpersonal skills to actively seek out and engage prospective customers.
            </h6>
          </div>
          <div className="firstbox ">
            <div className="upperside ">
              <h5>Responsibilities</h5>
              <div className="one"></div>
              <div dangerouslySetInnerHTML={{__html:findData.text}}/>
            </div>
          </div>
          <a  className="btn btn-warning" href="mailto:info@ormado.de">
            Apply
          </a>
        </div>
      </div>
      <div className="Faqs">
          <div className="container1">
            <div className="Center">
              <div className="accordion " id="accordionExample">
                <Faq faqs={faq}/>
              </div>
            </div>
          </div>
        </div>
         </>
        )
      }
    </>
  );
};

export default VacancyDetail;
