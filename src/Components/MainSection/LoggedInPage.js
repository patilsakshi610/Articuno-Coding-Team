import AuthContext from "../../Context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const LoggedInPage = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div>
      <p>You are Logged In</p>
      <button
        onClick={() => {
          setIsAuthenticated(false);
          navigate("/");
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default LoggedInPage;
