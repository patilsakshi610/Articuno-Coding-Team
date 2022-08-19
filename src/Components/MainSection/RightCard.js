import "./mainsection.css";

import cartitem1 from "../../Assets/cartitem1.png";
import cartitem2 from "../../Assets/cartitem2.png";
import truckdelivery from "../../Assets/truckdelivery.svg";

const RightCard = () => {
  return (
    <div className="cartoptions">
      <p>Your Cart</p>
      <div className="cart-option">
        <img src={cartitem1} />
        <div className="cart-label">
          <p>T-Shirt</p>
          <p>Summer Vibes</p>
          <span>#261311</span>
        </div>
        <p>$89.99</p>
      </div>

      <div className="cart-option">
        <img src={cartitem2} />
        <div className="cart-label">
          <p>Basic slim</p>
          <p>Fit T-Shirt</p>
          <span>#212315</span>
        </div>
        <p>$69.99</p>
      </div>

      <div className="cart-total">
        <p>Total Cost</p>
        <p>$159.98</p>
      </div>

      <div className="cart-delivery">
        <img src={truckdelivery} />
        <p>You are $30.02 away from free shipping!</p>
      </div>
    </div>
  );
};

export default RightCard;
