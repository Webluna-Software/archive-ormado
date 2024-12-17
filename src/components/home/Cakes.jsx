
import { useContext, useEffect, useState } from "react";
import ApiLinkContext from "../../context/ApiLinkContext";
import axios from "axios";

const Cakes = () => {
  const { ApiLink2 } = useContext(ApiLinkContext);
  const [cake, setCake] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`${ApiLink2}/cakes`)
      .then((res) => {
        setCake(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        <section className="CakesSection">
          <div className="width-90">
            <h2 className="headText">
              Our Exclusive <span> Cakes </span>
            </h2>

            <div className="card-parts">
              <div className="row">
                {cake.map((cake) => (
                  <div className="col-6 col-lg-4 col-xl-3" key={cake._id}>
                    <div className="card mt-4 ">
                      <img
                        src={cake.image}
                        className="card-img-top"
                        alt={cake.title}
                      />
                      <div className="card-body">
                        <h5 className="card-title cardHeadText">
                          {cake.title}
                        </h5>
                        {/* <p className="card-price " >${cake.price}</p> */}
                      </div>
                    </div>
                  </div>
                ))}

                {/* 
                <div className="col-6 col-lg-4 col-xl-3">
                    <div className="card mt-4 " >
                        <img src={sansebastian}  className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title cardHeadText">San Sebastian </h5>

                        </div>                        
                    </div>
                </div>

                <div className="col-6 col-lg-4 col-xl-3">
                    <div className="card mt-4 " >
                        <img src={croissant} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title cardHeadText">Croissant</h5>
                        </div>                        
                    </div>
                </div>

                <div className="col-6 col-lg-4 col-xl-3">
                    <div className="card mt-4 " >
                        <img src={cheesecake} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title cardHeadText">Honey Cake</h5>
                        </div>                        
                    </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Cakes;
