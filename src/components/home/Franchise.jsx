import React from "react";
import franchise from "../../assets/img/franchise.png"
import { Link } from "react-router-dom";


const Franchise = () => {
  return (
    <section className="myfranchise">
     
        <div className="franc-con">
          <div className="left">
           
            <div className="text">
              <p>
                WHY <span className="ormado">ORMADO</span> FRANCHISE ?
              </p>
            </div>

            <div className="ormado-about">
              <p>
              If you're considering starting your own business in the coffee industry, Ormado Kaffeehause can be the best choice, offering comprehensive knowledge from A to Z.
              </p>
            </div>
            <div className="ormado-button">  
              <Link to="/franchise"><button>INQUIRE NOW</button></Link>
            </div>     
          </div>
       
          <div className="right">
          <img className="img-fluid" src={franchise} alt="" />
          </div>
        </div>
     
    </section>
  );
};

export default Franchise;