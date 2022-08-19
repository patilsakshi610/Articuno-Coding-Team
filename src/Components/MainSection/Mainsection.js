import "./mainsection.css";
import cart from "../../Assets/cart.svg";
import truck from "../../Assets/truck.svg";

import LeftCard from "./LeftCard";
import MainSectionFooter from "./MainSectionFooter";
import MiddleCard from "./MiddleCard";
import RightCard from "./RightCard";

const MainSection = () => {
  return (
    <div className="section-outer">
      <div className="section-header">
        <p> Shipping and Payment</p>

        <div className="cart">
          <div className="circle-cart">
            <img className="section-cart" src={cart} />
          </div>
          <span className="h2line"></span>
          <div
            className="circle-cart"
            style={{ background: "rgb(73, 223, 173)" }}
          >
            <img className="section-cart" src={truck} />
          </div>
        </div>
      </div>

      <div className="section-button">
        <LeftCard />
        <MiddleCard />
        <RightCard />
      </div>
      <MainSectionFooter />
    </div>
  );
};

export default MainSection;
