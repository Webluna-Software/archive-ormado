import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();

  return (
    <div className="col-12 col-md-8 col-lg-7">
      <>
        <table className="table">
          <thead>
            <tr>
              <th>Order</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td># 711</td>
              <td>January 28,2023</td>
              <td>Processing</td>
              <td>$600.00</td>
              <td>
                <p
                  className="button"
                  onClick={() => {
                    navigate("/orderdetails");
                    window.scrollTo(0, 0);
                  }}
                >
                  <i className="fa-solid fa-circle-info"></i>Detail
                </p>
              </td>
            </tr>
            <tr>
              <td># 741</td>
              <td>January 28,2023</td>
              <td>Cancelled</td>
              <td>$600.00</td>
              <td>
                <p className="button">
                  <i className="fa-solid fa-repeat"></i>Repeat
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="btn">More</button>
      </>
    </div>
  );
};

export default Order;
