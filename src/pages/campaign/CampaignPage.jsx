import { useContext, useState, useEffect } from "react";
import axios from "axios";
import ApiLinkContext from "../../context/ApiLinkContext";
import CampaignTimer from "./CampaignTimer";

const CampaignPage = () => {
  const { ApiLink2 } = useContext(ApiLinkContext);
  const [campaign, setCampaign] = useState([]);
  const [expiredCampaigns, setExpiredCampaigns] = useState([]);

  useEffect(() => {
    axios.get(`${ApiLink2}/campaign`)
      .then((res) => {
        setCampaign(res.data.data);
        console.log(res.data.data, "Campaign Data");
      })
      .catch((error) => {
        console.error("Error fetching campaign:", error);
      });
  }, [ApiLink2]);

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
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {campaign.filter((item) => !expiredCampaigns.includes(item._id)).map((item) => (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12  " key={item._id}>
              <div className="card campaign-card  h-100 ">
                <img src={item.image} alt={item.title} className="campaign-image card-img-top" />
                <div className="card-body campaign-content">
                  <h5 className="card-title  ">{item.title}</h5>
                  <p className="card-text p-desc" style={{ maxHeight: expandedCampaigns[item._id] ? 'none' : '6em', overflow: 'hidden' }} dangerouslySetInnerHTML={{ __html: item.desc }} />
                  {item.desc.split(' ').length > 60 && (
                    <span 
                      className="read-more-text" 
                      onClick={() => toggleReadMore(item._id)} 
                      style={{ cursor: 'pointer', color: ' #4A3024', textDecoration: 'none' }}>
                      {expandedCampaigns[item._id] ? 'Read Less' : 'Read More'}
                    </span>
                  )}
  
                </div>
                <div className="card-footer campaign-footer">
                <CampaignTimer endTime={item.time} onEnd={() => handleCampaignEnd(item._id)} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default CampaignPage;
