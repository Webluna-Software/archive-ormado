import { useContext, useEffect, useState } from "react";
import ApiLinkContext from "../../context/ApiLinkContext";
import axios from "axios";

const SocialMedia = () => {
  const { ApiLink2 } = useContext(ApiLinkContext);
  const [social, setSocial] = useState([]);

  useEffect(() => {
    axios.get(`${ApiLink2}/social`)
      .then((res) => {
        const socialData = res.data.data;
        setSocial(socialData);
      })
      .catch((err) => {
        console.log("Xəta:", err);
      });
  }, [ApiLink2]);

  const formatLink = (link) => {
    if (!link.startsWith("http://") && !link.startsWith("https://")) {
      return `https://${link}`;
    }
    return link;
  };

  return (
    <>
      <div className="socialmediaIcons">
        <ul>
          {social.map((item) => (
            <li  key={item._id}>
            <a href={formatLink(item.link)} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.image}
                  alt={item.name}
                  className="img-fluid me-2"
                />
                {/* {item.name}  */}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SocialMedia;
