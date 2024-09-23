import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import ApiLinkContext from '../../context/ApiLinkContext';

const SocialMedia = () => {
    
    const [socialLinks, setSocialLinks] = useState([]);

    const { ApiLink2 } = useContext(ApiLinkContext);

    useEffect(() => {
        axios
            .get(`${ApiLink2}/social`)
            .then((res) => {
                const social = res.data.data;
                setSocialLinks(social);
            })
            .catch((err) => {
                console.log("Xəta:", err);
            });
    }, [ApiLink2]);

  return (
    <>
            <ul className='d-flex' style={{paddingLeft:"0"}}>
            {socialLinks.map((link, i) => (
                 <li key={link.id} style={{listStyle:"none"}}>
                 <a href={link.link} target="_blank" rel="noopener noreferrer">
                     <img src="https://1000logos.net/wp-content/uploads/2017/02/insta-logo.png" alt="" className="img-fluid me-2" style={{width:"20px"}} />
                     {/* {link.name}  */}
                 </a>
             </li>
                ))}
            </ul>

    </>
  )
}

export default SocialMedia