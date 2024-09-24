import { useContext, useEffect, useState } from "react";
import ApiLinkContext from "../../context/ApiLinkContext";
import axios from "axios";

const SocialMedia = () => {
  const { ApiLink3 } = useContext(ApiLinkContext);
  const [socialData, setSocialData] = useState(null);

  useEffect(() => {
    axios.get(`${ApiLink3}/social`)
      .then((res) => {
        setSocialData(res.data.data);
        // console.log(res.data.data, "social");
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [ApiLink3]);
  return (
    <>
     {socialData && (
        <ul className="socialmedia-icons">
          {socialData.map((item) => (
            <li key={item._id} >
              <a href={`https://${item.link}`} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SocialMedia;
