import { useContext, useState, useEffect } from "react";
import axios from 'axios';
import ApiLinkContext from '../../context/ApiLinkContext';
import CampaignTimer from "./CampaignTimer";

const CampaignPage = () => {

    const { ApiLink2 } = useContext(ApiLinkContext);
     const [campaign, setCampaign] = useState(null);

useEffect(() => {
  // API sorğusu
  axios.get(`${ApiLink2}/campaign`)  
    .then((res) => {
      setCampaign(res.data.data);
      // console.log(res.data.data, "Campaign Data");
    })
    .catch((error) => {
      console.error('Error fetching campaign:', error);
    });
}, [ApiLink2]);

  return (
    <>
 <section className="CampaignPage mt-3">
        <div className="container">
          <div className="row">
            <div className="cardsBlogs row m-0">
              {campaign && campaign.length > 0 ? (
                campaign.map((item, i) => (
                  <div className="blogcard col-12 col-md-4 col-lg-3" key={i}>
                    <figure>
                      <img src={item.image} alt={item.title} />
                    </figure>
                    <div className="card-header">
                      <p className="p-title">{item.title}</p>
                    </div>
                    {/* <div className="card-description">
                    <p  dangerouslySetInnerHTML={{ __html: item.desc }}/>
                    </div> */}
                    <p className="card-timer p-title card-header">Discount ends in:
                      <CampaignTimer endTime={item.time} />
                    </p>
                  </div>
                ))
              ) : (
                <p>Campaign data not available.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CampaignPage