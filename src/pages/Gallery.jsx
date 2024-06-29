import imgone from "../assets/img/gallery/1.png";
import imgtwo from "../assets/img/gallery/2.png";
import imgthree from "../assets/img/gallery/3.png";
import imgfour from "../assets/img/gallery/4.png";
import imgfive from "../assets/img/gallery/5.png";
import imgsix from "../assets/img/gallery/6.png";
import imgseven from "../assets/img/gallery/7.png";
import bgimg from "../assets/img/bgimg.png";
import { Helmet } from "react-helmet" ;
import { useState } from "react";
import { useContext } from "react";
import {ApiLinkContext} from "../context/ApiLinkContext"
import { useEffect } from "react";
import axios from "axios";
import PreLoader from "./PreLoader"
import LazyLoad from "react-lazy-load";
const Gallery = () => {
  const [banner,setBanner] = useState([]) ;
  const [gallery,setGallery] = useState([]) ;
  const [loading,setLoading] = useState(true) ;
  const {ApiLink2} = useContext(ApiLinkContext)

  useEffect(()=>{
    Promise.all([
      axios.get(`${ApiLink2}/galeryBanner`),
      axios.get(`${ApiLink2}/galeryPhoto`)
    ])
    .then(([bannerRes,galleryRes])=>{
      const galleryData = galleryRes.data.galeryPhoto ;
      const bannerData = bannerRes.data.galeryBanner[0] ;
      setBanner(bannerData) ;
      setGallery(galleryData) ;
      setLoading(false)
    })
    .catch((err)=>{
      setLoading(false)
    })
  },[])

  return (
    <>
    <Helmet>
      <title>Gallery</title>
    </Helmet>
      {
        loading ? (<PreLoader/>)
        :
        (
          <section className="gallery">
        <div className="image-container">
          <img src={banner.image} alt="" className="img-fluid" />
          <div className="image-overlay">
            <h3>{banner.title}</h3>
          </div>
        </div>
        <h3 className="text-center mt-5">
          {" "}
          <font color="4A3024">Memories</font>
          <span>
            <font color="#D59729"> of Team Ormado</font>
          </span>{" "}
        </h3>
        <p className="text-center text-secondary">{gallery.length} Photos</p>
        <div className="container">
          <div className="row">
          
            {gallery.map((item) => {
              return (
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-4"
                  key={item.id}
                >
                  <img src={item.image} alt="" className="img-fluid" />
                </div>
              );
            })}
       
          </div>
        </div>
        {/* <Faq /> */}
      </section>
        )
      }
    </>
  );
};

export default Gallery;
