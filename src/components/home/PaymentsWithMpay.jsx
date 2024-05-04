import mobile from "../../assets/img/MockUp.jpg";
import PlayMarketBtn from "./PlayMarketBtn";


const PaymentsWithMpay = () => {
  return (
    <section className="payments">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className="description mt-5">
              <h2>
                Buy 9, get 1 free
              </h2>
              <p>
                We always appreciate your loyalty. Every stamp makes you closer to free coffee.
              </p>
            </div>

            <div
              className="row btnRow"
              style={{ padding: "0", paddingLeft: "1px" }}
            >
              <PlayMarketBtn />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6">
            <div className="mobileImg">
              <img
                src={mobile}
                alt=""
                className="img-fluid "
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentsWithMpay;