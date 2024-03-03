import whyus from "../../assets/img/why.png";
import ytlogo from "../../assets/img/ytlogo.png";

const WhyUs = () => {
  const openYoutubeVideo = () => {
    const videoUrl = "https://www.youtube.com/watch?v=GWIAwS09PpM";
    const embedUrl = videoUrl.replace("watch?v=", "embed/");

    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", embedUrl);
    iframe.setAttribute("width", "560");
    iframe.setAttribute("height", "315");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", true);

    const youtubeIcon = document.querySelector(".youtube-icon");
    youtubeIcon.innerHTML = "";
    youtubeIcon.appendChild(iframe);
  };
  return (
    <section className="whyus">
      <div className="row">
        <div className="col-12 col-md-5">
          <div className="whyus-text">
            <h2>
              WHY US <h1 className="ms-3">?</h1>
            </h2>
            <span>
            We know what makes coffee beans taste better, so we utilize all our knowledge to craft the best coffee for our customers, ensuring they will enjoy every sip.
            </span>
          </div>
        </div>
        <div className="col-12 col-md-7">
          <div className="position-relative">
            <div className="whyus-img">
              <img src={whyus} alt="" className="img-fluid" />
            </div>
            <div
              className="youtube-icon position-absolute"
              onClick={openYoutubeVideo}
            >
              <img src={ytlogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
