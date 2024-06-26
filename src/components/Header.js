import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    console.log("useEffect");
  });

  return (
    <div className="header">
      <img className="logo-img" src={LOGO_URL} alt="app-logo" />
      <div className="nav-items">
        <ul>
          <li>Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>

          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/grocery">Grocer</Link>
          </li>

          <li>
            <button
              onClick={() =>
                btnName == "login" ? setBtnName("logout") : setBtnName("login")
              }
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
