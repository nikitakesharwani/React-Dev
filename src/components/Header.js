import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const onlineStatus = useOnlineStatus();
  const username = useContext(UserContext);
  useEffect(() => {
    console.log("useEffect");
  });

  return (
    <div className="flex justify-between bg-gray-300 shadow-lg">
      <img className="w-30 h-20" src={LOGO_URL} alt="app-logo" />
      <div className="flex items-center">
        <ul className="flex p-4 m-5">
          <li className="px-4">Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4 font-bold">
            <Link to="/">Home</Link>
          </li>

          <li className="px-4 font-bold text-gray-900">
            <Link to="/about">About</Link>
          </li>

          <li className="px-4 font-bold">
            <Link to="/contact">Contact Us</Link>
          </li>

          <li className="px-4 font-bold">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="px-4 font-bold">
            <Link to="/cart">Cart</Link>
          </li>

          <li>
            <button
              className="mx-3"
              onClick={() =>
                btnName == "login" ? setBtnName("logout") : setBtnName("login")
              }
            >
              {btnName}
            </button>
          </li>
          <li className="px-4 font-bold">{username.loggedIn}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
