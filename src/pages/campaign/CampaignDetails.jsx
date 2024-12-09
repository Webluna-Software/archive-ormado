import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ApiLinkContext from "../../context/ApiLinkContext";
import CampaignTimer from "./CampaignTimer";
import PreLoader from "../PreLoader";
import { Helmet } from "react-helmet";
const CampaignDetails = () => {
    const { campaignid } = useParams();
    const [loading, setLoading] = useState(true);
    const { ApiLink2 } = useContext(ApiLinkContext);
    const [campaignDet, setCampaignDet] = useState([]);

    useEffect(() => {
        if (campaignid) {
            axios.get(`${ApiLink2}/campaign/${campaignid}`)
                .then((res) => {
                    setCampaignDet(res.data.data); 
                    console.log(res.data.data, "CampaignDetails");
                    setLoading(false);
                })
                .catch((error) => {
                    setLoading(false);
                    console.error("Error fetching campaign details:", error);
                });
        }
    }, [ApiLink2, campaignid]);


    return (
        <>
    <Helmet>
        <title>Campaign Details</title>
      </Helmet>
            <section className="campaignDetails">
                <div className="container-fluid">
                {loading ? (
              <PreLoader />
            ) : (
                    <div className="row">
                        <div className="campaign-details">
                            <div className="img-part col-12 col-md-6">
                                <img src={campaignDet.image} alt={campaignDet.title} />
                            </div>
                            <div className="text-part col-12 col-md-6">
                                 <div className="campaign-time">
                                     <CampaignTimer endTime={campaignDet.time} />
                                 </div>
                                <h5 className="card-title ">{campaignDet.title}</h5>
                                <p className="card-text p-desc" dangerouslySetInnerHTML={{ __html: campaignDet.desc }} />
                            </div>
                        </div>
                    </div>
                )}
                </div>
            </section>
        </>
    );
};

export default CampaignDetails;
