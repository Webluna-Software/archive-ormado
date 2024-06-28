// import Contactcards from '../components/contact/Contactcards';
import { Helmet } from "react-helmet";
import Contactlocation from "../components/contact/Contactlocation";
import Contactus from "../components/contact/Contactus";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Contactus />
      <Contactlocation />
      {/* <Contactcards/> */}
    </>
  );
};

export default Contact;
