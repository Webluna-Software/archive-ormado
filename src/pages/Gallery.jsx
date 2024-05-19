import imgone from "../assets/img/gallery/1.png";
import imgtwo from "../assets/img/gallery/2.png";
import imgthree from "../assets/img/gallery/3.png";
import imgfour from "../assets/img/gallery/4.png";
import imgfive from "../assets/img/gallery/5.png";
import imgsix from "../assets/img/gallery/6.png";
import imgseven from "../assets/img/gallery/7.png";
import Faq from "../components/home/Faq";
import bgimg from "../assets/img/bgimg.png";
const Gallery = () => {
  const data = [
    { id: 0, img: imgone },
    { id: 1, img: imgtwo },
    { id: 2, img: imgthree },
    { id: 3, img: imgfour },
    { id: 4, img: imgfive },
    { id: 5, img: imgsix },
    { id: 6, img: imgseven },
  ];

  return (
    <>
      <section className="gallery">
        <div className="image-container">
          <img src={bgimg} alt="" className="img-fluid" />
          <div className="image-overlay">
            <h3>Gallery</h3>
          </div>
        </div>
        <h3 className="text-center mt-5">
          {" "}
          <font color="4A3024">Ormado </font>
          <span>
            <font color="#D59729">Roasting House</font>
          </span>{" "}
        </h3>
        <p className="text-center text-secondary">{data.length} Photos</p>
        <div className="container">
          <div className="row">
            {data.map((item) => {
              return (
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-4"
                  key={item.id}
                >
                  <img src={item.img} alt="" className="img-fluid" />
                </div>
              );
            })}
          </div>
        </div>
        {/* <Faq /> */}
      </section>
    </>
  );
};

export default Gallery;
