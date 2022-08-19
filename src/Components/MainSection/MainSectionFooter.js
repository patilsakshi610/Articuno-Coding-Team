import "./mainsection.css";
import arrowleft from "../../Assets/arrowleft.svg";

const MainSectionFooter = () => {
  return (
    <div className="sectionfooter">
      <div className="footerback">
        <img src={arrowleft} />
        <p>Back</p>
      </div>

      <div className="footerbuttons">
        <button className="continue">CONTINUE SHOPPING</button>
        <button className="proceed">PROCEED TO PAYMENT</button>
      </div>
    </div>
  );
};

export default MainSectionFooter;
