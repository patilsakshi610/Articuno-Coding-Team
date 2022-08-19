import "./header.css";
import search from "../../Assets/search.svg";
import cart from "../../Assets/cart.svg";
import personicon from "../../Assets/personicon.png";
import paper from "../../Assets/paper.png";

const Header = () => {
  return (
    <div className="header-outer">
      <div className="header-inner">
        <div className="leftsec">
          <img src={paper} />
          <p className="header-label">
            <span>E-</span>Shop
          </p>
        </div>

        <div className="header-middlesec">
          <label className="header-label">Men</label>
          <label className="header-label">Women</label>
          <label className="header-label">Kids</label>
        </div>
        <div className="header-rightsec">
          <img className="header-right-img" src={search} />
          <img className="header-right-img" src={cart} />
          <img className="header-right-img" src={personicon} />
        </div>
      </div>
    </div>
  );
};

export default Header;
