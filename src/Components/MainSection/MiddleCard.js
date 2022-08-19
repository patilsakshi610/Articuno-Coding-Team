import "./mainsection.css";

//Assets
import deal from "../../Assets/deal.png";
import discover from "../../Assets/discover.png";
import mastercard from "../../Assets/mastercard.avif";
import mastro from "../../Assets/mastro.png";
import paypal from "../../Assets/paypal.png";
import visa from "../../Assets/visa.png";
import inpost from "../../Assets/inpost.png";
import dpd from "../../Assets/dpd.png";
import dhl from "../../Assets/dhl.png";
import fedex from "../../Assets/fedex.png";

const MiddleCard = () => {
  return (
    <div className="payment">
      <p>Payment Method</p>
      <div className="payment-methods">
        <button className="payment-option">
          <img src={paypal} />
        </button>
        <button className="payment-option">
          <img src={visa} />
        </button>
        <button className="payment-option">
          <img src={mastercard} />
        </button>
        <button className="payment-option">
          <img src={mastro} />
        </button>
        <button className="payment-option">
          <img src={discover} />
        </button>
        <button className="payment-option">
          <img src={deal} />
        </button>
      </div>

      <p> Delivery method</p>
      <div className="delivery-options">
        <button className="delivery-option">
          <img src={inpost} />
          <p>$ 20.00</p>
        </button>
        <button className="delivery-option">
          <img src={dpd} /> <p>$ 12.00</p>
        </button>
        <button className="delivery-option">
          <img src={dhl} style={{ height: "15px", width: "60px" }} />
          <p>$ 15.00</p>
        </button>
        <button className="delivery-option">
          <img src={fedex} />
          <p>$ 10.00</p>
        </button>
      </div>
    </div>
  );
};

export default MiddleCard;
