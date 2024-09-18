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
                const social = res.social;
                console.log("Sosial media məlumatları:", social); 
                setSocialLinks(social);
            })
            .catch((err) => {
                console.log("Xəta:", err);
            });
    }, [ApiLink2]);


  return (
    <>
            <ul>
            {socialLinks.map((link, i) => (
                 <li key={link.id}>
                 <a href={link.url} target="_blank" rel="noopener noreferrer">
                     <i className={link.icon}></i>
                     {link.name} 
                 </a>
             </li>
                ))}
            </ul>

    </>
  )
}

export default SocialMedia