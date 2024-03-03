import React, { useContext, useEffect, useState } from "react";
import img127 from "../assets/img/Rectangle 1317 (4).png";
import Blogs from "./Blogs";
import axios from "axios";
import ApiLinkContext from "../context/ApiLinkContext";
import { useParams } from "react-router-dom";
const BlogDetails = () => {

  const {ApiLink} = useContext(ApiLinkContext);

  const [blog , setBlog]=useState([]);
  const slug =useParams()

  useEffect(() => {
    axios.get(`${ApiLink}/blog/${slug}`)
      .then((res) => {
        setBlog(res.data.blog);
        console.log(res.data, "Blog Context Success");
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      });
  }, []);
  
  return (
    <>
      <section className="BlogDetails">
        <div className="container-fluid">
          <div className="row ">
            <div className="blog-details ">
              <div className="blogdetailsMainTitle">
                <div className="blog-details-text">
                  <h3>5 Efficient Rules How to Organize Your Working Place</h3>
                  <p>
                    Relationship tips couples therapists are giving all the time
                  </p>
                  <div className="read">
                    <p >                    
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          opacity="0.5"
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          fill="#E3B142"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.6893L15.0303 13.9697C15.3232 14.2626 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2626 15.3232 13.9697 15.0303L11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V8C11.25 7.58579 11.5858 7.25 12 7.25Z"
                          fill="#E3B142"
                        />
                      </svg> 
                      20.06.2023
                    </p>
                    <p >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        opacity="0.5"
                        d="M2 12C2 13.6394 2.42496 14.1915 3.27489 15.2957C4.97196 17.5004 7.81811 20 12 20C16.1819 20 19.028 17.5004 20.7251 15.2957C21.575 14.1915 22 13.6394 22 12C22 10.3606 21.575 9.80853 20.7251 8.70433C19.028 6.49956 16.1819 4 12 4C7.81811 4 4.97196 6.49956 3.27489 8.70433C2.42496 9.80853 2 10.3606 2 12Z"
                        fill="#E3B142"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z"
                        fill="#E3B142"
                      />
                    </svg>
                      1.6K read
                    </p>
                  </div>
                </div>
              </div>
              <div className="blog-details-section2 md-my-5 ">
                <div className="blog-details-text">
                  <div className="blog-details-text-part1 my-5">
                    <p>
                      Structured gripped tape invisible moulded cups for sauppor
                      firm hold strong powermesh front liner sport detail.
                      Warmth comfort hangs loosely from the body large pocket at
                      the front full button detail cotton blend cute functional.
                      Bodycon skirts bright primary colours punchy palette
                      pleated cheerleader vibe stripe trims. Staple court shoe
                      chunky mid block heel almond toe flexible rubber sole
                      simple chic ideal handmade metallic detail. Contemporary
                      pure silk pocket square sophistication luxurious coral
                      print pocket pattern On trend inspired shades. Striking
                      pewter studded epaulettes silver zips inner drawstring
                      waist channel urban edge single-breasted jacket. Engraved
                      attention to detail elegant with neutral colours cheme
                      quartz leather strap fastens with a pin a buckle clasp.
                      Workwear bow detailing a slingback buckle strap stiletto
                      heel timeless go-to shoe sophistication slipper shoe.
                      Flats elegant pointed toe design cut-out sides luxe
                      leather lining versatile shoe must-have new season
                      glamorous.
                    </p>
                  </div>
                  <div className="blog-details-text-part2 ">
                    <div className="blog-details-title my-5">
                      <div className="quotation">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="91"
                          height="82"
                          viewBox="0 0 91 82"
                          fill="none"
                        >
                          <path
                            d="M63.4884 82L55.7287 74.4519C59.491 68.0474 62.7829 61.643 65.6047 55.2385C68.4264 49.0628 70.0724 43.0014 70.5426 37.0544L52.907 33.2803V0H91V24.0167C91 38.198 88.1783 49.6346 82.5349 58.3264C76.6563 67.2469 70.3075 75.1381 63.4884 82ZM10.5814 82L2.82171 74.4519C6.58398 68.0474 9.87598 61.643 12.6977 55.2385C15.5194 49.0628 17.1654 43.0014 17.6357 37.0544L0 33.2803L0 0L38.093 0V24.0167C38.093 38.198 35.2713 49.6346 29.6279 58.3264C23.7494 67.2469 17.4005 75.1381 10.5814 82Z"
                            fill="#F9EFD9"
                          />
                        </svg>
                      </div>
                      <div className="title ms-3">
                        <h2>
                          Knicker lining concealed back zip fasten swing style
                          high waisted double layer full.
                        </h2>
                      </div>
                    </div>
                    <div className="blog-details-part2-text">
                      <p>
                        Foam padding in the insoles leather finest quality
                        staple flat slip-on design pointed toe off-duty shoe.
                        Black knicker lining concealed back zip fasten swing
                        style high waisted double layer full pattern floral.
                        Polished finish elegant court shoe work duty stretchy
                        slingback strap mid kitten heel this ladylike design
                      </p>
                      <p>
                        Eget aenean tellus venenatis. Donec odio tempus. Felis
                        arcu pretium metus nullam quam aenean sociis quis sem
                        neque vici libero. Venenatis nullam fringilla pretium
                        magnis aliquam nunc vulputate integer augue ultricies
                        cras. Eget viverra feugiat cras ut. Sit natoque montes
                        tempus ligula eget vitae pede rhoncus maecenas
                        consectetuer commodo condimentum aenean.
                      </p>
                    </div>
                  </div>
                  <div className="blog-details-text-part3">
                    <h5 className="mb-3">Eu ridiculus fringilla aenean</h5>
                    <p>
                      Sociis consequat adipiscing sit curabitur donec sem luctus
                      cras natoque vulputate dolor eget dapibus. Nec vitae eros
                      ullamcorper laoreet dapibus mus ac ante viverra. A aenean
                      sit augue curabitur et parturient nisi sed enim. Nulla nec
                      quis sit quisque sem commodo ultricies neque. Lorem eget
                      venenatis dui ante luctus ultricies tellus montes. Quis in
                      sapien tempus.
                    </p>
                    <ul className="py-3">
                      <li>Crisp fresh iconic elegant timeless clean perfume</li>
                      <li>Neck straight sharp silhouette and dart detail</li>
                      <li>
                        Machine wash cold slim fit premium stretch selvedge
                        denim comfortable low waist
                      </li>
                    </ul>
                    <p>
                      See-through delicate embroidered organza blue lining
                      luxury acetate-mix stretch pleat detailing. Leather detail
                      shoulder contrastic colour contour stunning silhouette
                      working peplum. Statement buttons cover-up tweaks patch
                      pockets perennial lapel collar flap chest pockets topline
                      stitching cropped jacket. Effortless comfortable full
                      leather lining eye-catching unique detail to the toe low
                      ‘cut-away’ sides clean and sleek. Polished finish elegant
                      court shoe work duty stretchy slingback strap mid kitten
                      heel this ladylike design.
                    </p>
                    <p>
                      See-through delicate embroidered organza blue lining
                      luxury acetate-mix stretch pleat detailing. Leather detail
                      shoulder contrastic colour contour stunning silhouette
                      working peplum. Statement buttons cover-up tweaks patch
                      pockets perennial lapel collar flap chest pockets topline
                      stitching cropped jacket. Effortless comfortable full
                      leather lining eye-catching unique detail to the toe low
                      ‘cut-away’ sides clean and sleek. Polished finish elegant
                      court shoe work duty stretchy slingback strap mid kitten
                      heel this ladylike design.
                    </p>
                  </div>
                  <div className="blog-details-text-part4">
                    <p>Share:</p>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M23.0306 7.28105L20.2274 10.0842C19.6612 16.6485 14.1252 21.7504 7.49992 21.7504C6.13867 21.7504 5.01649 21.5348 4.1643 21.1092C3.47711 20.7651 3.19586 20.3967 3.12555 20.2917C3.06285 20.1976 3.02222 20.0907 3.00667 19.9787C2.99113 19.8668 3.00109 19.7528 3.03579 19.6452C3.0705 19.5377 3.12906 19.4394 3.20711 19.3577C3.28515 19.2759 3.38066 19.2129 3.48649 19.1732C3.51086 19.1639 5.75899 18.3004 7.1868 16.657C6.39497 16.006 5.70375 15.2414 5.13555 14.3882C3.97305 12.6623 2.6718 9.66417 3.07305 5.18386C3.08577 5.0415 3.1389 4.90573 3.22619 4.79256C3.31348 4.67938 3.4313 4.5935 3.56576 4.54503C3.70022 4.49657 3.84573 4.48753 3.98516 4.51899C4.12458 4.55045 4.25212 4.6211 4.35274 4.72261C4.38555 4.75542 7.47274 7.82574 11.2471 8.82136V8.25042C11.2457 7.65173 11.364 7.0588 11.5952 6.50655C11.8265 5.9543 12.1658 5.4539 12.5934 5.0348C13.0086 4.62017 13.5026 4.2929 14.0464 4.07231C14.5901 3.85172 15.1726 3.74227 15.7593 3.75042C16.5464 3.75819 17.3181 3.96947 17.9993 4.36374C18.6806 4.75801 19.2483 5.32184 19.6471 6.00042H22.4999C22.6483 6.00031 22.7935 6.04423 22.9169 6.12663C23.0404 6.20904 23.1366 6.32621 23.1934 6.46333C23.2502 6.60045 23.2651 6.75134 23.2361 6.8969C23.2071 7.04247 23.1356 7.17616 23.0306 7.28105Z"
                          fill="#D59729"
                        />
                      </svg>
                    </div>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M16.5 2.25H7.5C6.10807 2.25149 4.77358 2.80509 3.78933 3.78933C2.80509 4.77358 2.25149 6.10807 2.25 7.5V16.5C2.25149 17.8919 2.80509 19.2264 3.78933 20.2107C4.77358 21.1949 6.10807 21.7485 7.5 21.75H16.5C17.8919 21.7485 19.2264 21.1949 20.2107 20.2107C21.1949 19.2264 21.7485 17.8919 21.75 16.5V7.5C21.7485 6.10807 21.1949 4.77358 20.2107 3.78933C19.2264 2.80509 17.8919 2.25149 16.5 2.25ZM12 16.5C11.11 16.5 10.24 16.2361 9.49993 15.7416C8.75991 15.2471 8.18314 14.5443 7.84254 13.7221C7.50195 12.8998 7.41283 11.995 7.58647 11.1221C7.7601 10.2492 8.18868 9.44736 8.81802 8.81802C9.44736 8.18868 10.2492 7.7601 11.1221 7.58647C11.995 7.41283 12.8998 7.50195 13.7221 7.84254C14.5443 8.18314 15.2471 8.75991 15.7416 9.49993C16.2361 10.24 16.5 11.11 16.5 12C16.4988 13.1931 16.0243 14.337 15.1806 15.1806C14.337 16.0243 13.1931 16.4988 12 16.5ZM17.625 7.5C17.4025 7.5 17.185 7.43402 17 7.3104C16.815 7.18679 16.6708 7.01109 16.5856 6.80552C16.5005 6.59995 16.4782 6.37375 16.5216 6.15552C16.565 5.93729 16.6722 5.73684 16.8295 5.5795C16.9868 5.42217 17.1873 5.31502 17.4055 5.27162C17.6238 5.22821 17.85 5.25049 18.0555 5.33564C18.2611 5.42078 18.4368 5.56498 18.5604 5.74998C18.684 5.93499 18.75 6.1525 18.75 6.375C18.75 6.67337 18.6315 6.95952 18.4205 7.1705C18.2095 7.38147 17.9234 7.5 17.625 7.5ZM15 12C15 12.5933 14.8241 13.1734 14.4944 13.6667C14.1648 14.1601 13.6962 14.5446 13.1481 14.7716C12.5999 14.9987 11.9967 15.0581 11.4147 14.9424C10.8328 14.8266 10.2982 14.5409 9.87868 14.1213C9.45912 13.7018 9.1734 13.1672 9.05764 12.5853C8.94189 12.0033 9.0013 11.4001 9.22836 10.8519C9.45542 10.3038 9.83994 9.83524 10.3333 9.50559C10.8266 9.17595 11.4067 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12Z"
                          fill="#D59729"
                        />
                      </svg>
                    </div>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M21.75 11.9989C21.7469 14.3818 20.8726 16.6814 19.2917 18.4645C17.7109 20.2475 15.5326 21.391 13.1671 21.6795C13.1145 21.6855 13.0611 21.6802 13.0107 21.664C12.9602 21.6479 12.9137 21.6212 12.8743 21.5858C12.8348 21.5503 12.8034 21.5069 12.782 21.4585C12.7605 21.41 12.7496 21.3575 12.75 21.3045V14.2489H15C15.1028 14.2491 15.2045 14.2282 15.2989 14.1874C15.3933 14.1467 15.4783 14.0869 15.5487 14.0119C15.619 13.9369 15.6732 13.8483 15.7078 13.7515C15.7424 13.6547 15.7568 13.5518 15.75 13.4492C15.7334 13.2563 15.6444 13.0769 15.5009 12.947C15.3574 12.817 15.1701 12.7463 14.9765 12.7489H12.75V10.4989C12.75 10.1011 12.908 9.71952 13.1893 9.43822C13.4706 9.15691 13.8521 8.99888 14.25 8.99888H15.75C15.8528 8.9991 15.9545 8.97819 16.0489 8.93743C16.1433 8.89667 16.2283 8.83694 16.2987 8.76194C16.369 8.68695 16.4232 8.59829 16.4578 8.50148C16.4924 8.40468 16.5068 8.30178 16.5 8.19919C16.4834 8.006 16.3941 7.8263 16.2502 7.69632C16.1063 7.56635 15.9185 7.49579 15.7246 7.49888H14.25C13.4543 7.49888 12.6912 7.81495 12.1286 8.37756C11.566 8.94017 11.25 9.70323 11.25 10.4989V12.7489H8.99996C8.89714 12.7487 8.79538 12.7696 8.70099 12.8103C8.60659 12.8511 8.52159 12.9108 8.45126 12.9858C8.38092 13.0608 8.32676 13.1495 8.29213 13.2463C8.2575 13.3431 8.24315 13.446 8.24996 13.5486C8.26655 13.7418 8.35579 13.9215 8.49968 14.0514C8.64357 14.1814 8.8314 14.252 9.02527 14.2489H11.25V21.3064C11.2503 21.3593 11.2394 21.4117 11.218 21.4601C11.1967 21.5085 11.1653 21.5518 11.126 21.5873C11.0866 21.6227 11.0403 21.6494 10.9899 21.6656C10.9395 21.6818 10.8863 21.6872 10.8337 21.6814C8.40498 21.3856 6.1758 20.1888 4.5874 18.3278C2.99901 16.4668 2.16716 14.0774 2.25652 11.6323C2.44402 6.56981 6.54464 2.45419 11.6109 2.25732C12.9225 2.20651 14.231 2.42077 15.4579 2.88728C16.6848 3.35379 17.8051 4.06298 18.7516 4.97241C19.6981 5.88183 20.4515 6.97283 20.9667 8.18013C21.4819 9.38744 21.7483 10.6862 21.75 11.9989Z"
                          fill="#D59729"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="blog-details-card my-5">
                  <p>Latest news</p>
                  <div className="blog-details-lastes">
                    <div className="blogcard col-12    col-md-3 col-sm-6">
                      <figure>
                        <img src={img127} alt="rectangle127" />
                      </figure>
                      <div className="card-header">
                        <p className="p-title">Integer Maecenas Eget Viverra</p>
                        <p className="p-body">
                          Aenean eleifend ante maecenas pulvinar montes lorem et
                          pede dis dolor pretium donec dictum. Vici consequat
                          justo enim. <span> Read more</span>
                        </p>
                        <div className="date-number">
                          <span>1K read</span>
                          <span>June 28, 2023</span>
                        </div>
                      </div>
                    </div>
                    <div className="blogcard col-12    col-md-3 col-sm-6">
                      <figure>
                        <img src={img127} alt="rectangle127" />
                      </figure>
                      <div className="card-header">
                        <p className="p-title">Integer Maecenas Eget Viverra</p>
                        <p className="p-body">
                          Aenean eleifend ante maecenas pulvinar montes lorem et
                          pede dis dolor pretium donec dictum. Vici consequat
                          justo enim. <span> Read more</span>
                        </p>
                        <div className="date-number">
                          <span>1K read</span>
                          <span>June 28, 2023</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Blogs  />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
