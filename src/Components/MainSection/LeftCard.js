import { useState, useContext } from "react";
import "./mainsection.css";
import Dropdown from "react-bootstrap/Dropdown";
import arrow from "../../Assets/arrow.svg";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
const LeftCard = () => {
  const { setIsAuthenticated } = useContext(AuthContext);

  const [showDropdown, setShowDropdown] = useState(false);
  const [inpuData, setInputData] = useState({
    email: "",
    address: "",
    firstName: "",
    city: "",
    lastName: "",
    pincode: "",
    contact: "",
    country: "",
  });

  const navigate = useNavigate();
  const countries = [
    "India",
    "Africa",
    "Poland",
    "USA",
    "China",
    "Peru",
    "Brazil",
  ];
  return (
    <div className="section-buttons">
      <button
        onClick={() => {
          if (inpuData.email && inpuData.firstName) {
            setIsAuthenticated(true);
            navigate("/home");
          } else {
            !inpuData.firstName
              ? alert("Enter FirstName")
              : alert("Enter Email");
          }
        }}
      >
        LOG IN
      </button>
      <button
        style={{
          background: "transparent",
          color: "rgb(73, 223, 173)",
          border: "1px solid rgb(73, 223, 173)",
        }}
      >
        SIGN UP
      </button>
      <p>Shipping information</p>
      <form className="formouter">
        <input
          className="inputfield"
          type={"email"}
          placeholder="Email"
          onChange={(e) => setInputData({ ...inpuData, email: e.target.value })}
        />
        <input
          className="inputfield"
          type={"text"}
          placeholder="Address"
          onChange={(e) =>
            setInputData({ ...inpuData, address: e.target.value })
          }
        />
        <input
          className="inputfield"
          type={"text"}
          placeholder="First name"
          onChange={(e) =>
            setInputData({ ...inpuData, firstName: e.target.value })
          }
        />
        <input
          className="inputfield"
          type={"text"}
          placeholder="City"
          onChange={(e) => setInputData({ ...inpuData, city: e.target.value })}
        />
        <input
          className="inputfield"
          type={"text"}
          placeholder="Last name"
          onChange={(e) => setInputData({ ...inpuData, email: e.target.value })}
        />
        <input
          className="inputfield"
          type={"number"}
          placeholder="Postal Code / ZIP"
          onChange={(e) =>
            setInputData({ ...inpuData, pincode: e.target.value })
          }
        />
        <input
          className="inputfield"
          type={"text"}
          placeholder="Phone number"
          maxLength={10}
          onChange={(e) => {
            setInputData({ ...inpuData, contact: e.target.value });
          }}
        />
        <div className="dropdown">
          <button onClick={() => setShowDropdown(!showDropdown)}>
            {inpuData.country ? inpuData.country : "Country"}
          </button>
          {showDropdown && (
            <div className="dropdown-Menu">
              {countries.map((item, i) => {
                return (
                  <p
                    className="dropdown-item"
                    key={i}
                    onClick={() => {
                      setInputData({ ...inpuData, country: item });
                      setShowDropdown(false);
                    }}
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default LeftCard;
