import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ApiLinkContext from "../../context/ApiLinkContext";

const Faq = ({ faqs }) => {
  const active = faqs.map((item)=>item.active)
  return (
    <>
      {
        active 
        == true && faqs.length > 0 && (
          <div className="Faqs">
        <div className="container1">
          <div className="Center">
            <div className="title">
              <div className="line"></div>
              <div className="upper">
                <h5>FAQ</h5>
              </div>
            </div>

            <div className="question">
              <h1>
                Questions ? <span>Look here</span>
              </h1>
            </div>

            <div className="accordion " id="accordionExample">
              {faqs.map((item, i) => {
                return  ( 
                  <div
                    className="accordion-item"
                    id={`first${i}`}
                    key={item._id}
                  >
                    <h2 className="accordion-header">
                      <button
                        id={i}
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${i}`}
                        aria-expanded="false"
                        aria-controls={`collapse${i}`}
                      >
                        <h6>{item.title}</h6>
                      </button>
                    </h2>
                    <div
                      id={`collapse${i}`}
                      className={`accordion-collapse collapse ${
                        i == 0 ? "show" : ""
                      }`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p
                          className="lorem1"
                          dangerouslySetInnerHTML={{ __html: item.text }}
                        />
                      </div>
                    </div>
                  </div>
                ) 
              })}
            </div>
          </div>
        </div>
      </div>
        )
      }
    </>
  );
};

export default Faq;



// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
// import ApiLinkContext from "../../context/ApiLinkContext";

// const Faq = ({ faqs }) => {
//   const [faq, setFaq] = useState([]);
//   const { ApiLink2 } = useContext(ApiLinkContext);
//   useEffect(() => {
//     axios.get(`${ApiLink2}/faq`)
//       .then((res) => {
//         setFaq(res.data.data); 
//         console.log(res.data.data, "Faq");
//       })
//       .catch((error) => {
//         console.error("FAQ verisi alınamadı:", error);
//       });
//   }, [ApiLink2, faqs]); 

//   return (
//     <>
//       {faq.length > 0 && (
//         <div className="Faqs">
//           <div className="container1">
//             <div className="Center">
//               <div className="title">
//                 <div className="line"></div>
//                 <div className="upper">
//                   <h5>FAQ</h5>
//                 </div>
//               </div>

//               <div className="question">
//                 <h1>
//                   Questions ? <span>Look here</span>
//                 </h1>
//               </div>

//               <div className="accordion" id="accordionExample">
//                 {faq.map((item, i) => (
//                   <div className="accordion-item" key={item._id}>
//                     <h2 className="accordion-header">
//                       <button
//                         className="accordion-button collapsed"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target={`#collapse${i}`}
//                         aria-expanded="false"
//                         aria-controls={`collapse${i}`}
//                       >
//                         <h6>{item.title}</h6>
//                       </button>
//                     </h2>
//                     <div
//                       id={`collapse${i}`}
//                       className={`accordion-collapse collapse ${
//                         i === 0 ? "show" : ""
//                       }`}
//                       data-bs-parent="#accordionExample"
//                     >
//                       <div className="accordion-body">
//                         <p
//                           className="lorem1"
//                           dangerouslySetInnerHTML={{ __html: item.text }}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Faq;
