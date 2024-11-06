import { useContext, useState, useEffect } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import axios from "axios";
import slugify from "slugify";
import ApiLinkContext from "../../context/ApiLinkContext";
import CampaignTimer from "./CampaignTimer";

const CampaignPage = () => {
  const { campaignid } = useParams();

  const { ApiLink2 } = useContext(ApiLinkContext);
  const [campaign, setCampaign] = useState([]);
  const [expiredCampaigns, setExpiredCampaigns] = useState([]);

  useEffect(() => {
    axios.get(`${ApiLink2}/campaign`)
      .then((res) => {
        setCampaign(res.data.data);
        // console.log(res.data.data, "Campaign Data");
      })
      .catch((error) => {
        console.error("Error fetching campaign:", error);
      });
  }, [ApiLink2, campaignid]);

  const handleCampaignEnd = (campaignId) => {
    setExpiredCampaigns((prevExpiredCampaigns) => {
      if (!prevExpiredCampaigns.includes(campaignId)) {
        return [...prevExpiredCampaigns, campaignId];
      }
      return prevExpiredCampaigns;
    });
  };

  const [expandedCampaigns, setExpandedCampaigns] = useState({});

  const toggleReadMore = (campaignId) => {
    setExpandedCampaigns((prevExpanded) => ({
      ...prevExpanded,
      [campaignId]: !prevExpanded[campaignId], 
    }));
  };

  return (
    <>
 <section className="CampaignPage">
      <div className="container-fluid">
        <div className="row">
        {campaign.filter((item) =>item.active && !expiredCampaigns.includes(item._id)).map((item) => (
          <div className="campaign-card col-12 col-lg-4 col-md-5 col-sm-6"  key={item._id}>
     <Link    to={`/campaigndetails/${item._id}/${slugify(item.title).toLowerCase()}`} style={{ color: "#000" }}>
          <div className=" img-part   ">
          <img src={item.image} alt={item.title} className="campaign-image card-img-top" />
          </div>
           <div className=" text-part ">
           <h5 className="card-title ">{item.title}</h5>
           <div className="footer-part">
             <div className="campaign-time">   <CampaignTimer endTime={item.time} onEnd={() => handleCampaignEnd(item._id)} /></div>
            <div className="ormadoBtn"> <button type="button">Learn More</button></div>
             </div>
           </div>
 
         </Link>
          </div>

         ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default CampaignPage;
