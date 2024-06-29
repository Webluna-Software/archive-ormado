// import Contactcards from '../components/contact/Contactcards';
import { Helmet } from "react-helmet";
import Contactlocation from "../components/contact/Contactlocation";
import Contactus from "../components/contact/Contactus";
import { useContext, useEffect, useState } from "react";
import ApiLinkContext from "../context/ApiLinkContext";
import axios from "axios";
import Faq from "../components/home/Faq";

const Contact = () => {
  const {ApiLink2} = useContext(ApiLinkContext)
  const [contactFaq,setContactFaq] = useState([])

  useEffect(()=>{
    Promise.all([
      axios.get(`${ApiLink2}/faqContact`),
     
    ]) 
    .then(([faqRes])=>{
      const faq = faqRes.data.faqContact ;
      setContactFaq(faq)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Contactus />
      <Contactlocation />
      <Faq faqs={contactFaq}/>
      {/* <Contactcards/> */}
    </>
  );
};

export default Contact;
