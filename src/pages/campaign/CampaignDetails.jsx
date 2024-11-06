import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ApiLinkContext from "../../context/ApiLinkContext";
import CampaignTimer from "./CampaignTimer";

const CampaignDetails = () => {
    const { campaignid } = useParams();
    const { ApiLink2 } = useContext(ApiLinkContext);
    const [campaignDet, setCampaignDet] = useState([]);

    useEffect(() => {
        if (campaignid) {
            axios.get(`${ApiLink2}/campaign/${campaignid}`)
                .then((res) => {
                    setCampaignDet(res.data.data); 
                    console.log(res.data.data, "CampaignDetails");
                })
                .catch((error) => {
                    console.error("Error fetching campaign details:", error);
                });
        }
    }, [ApiLink2, campaignid]);


    return (
        <>
            <section className="campaignDetails">
                <div className="container-fluid">
                    <div className="row">
                        <div className="campaign-details">
                            <div className="img-part col-12 col-md-5">
                                <img src={campaignDet.image} alt={campaignDet.title} />
                            </div>
                            <div className="text-part col-12 col-md-5">
                                 <div className="campaign-time">
                                     <CampaignTimer endTime={campaignDet.time} />
                                 </div>
                                <h5 className="card-title ">{campaignDet.title}</h5>
                                <p className="card-text p-desc" dangerouslySetInnerHTML={{ __html: campaignDet.desc }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CampaignDetails;
