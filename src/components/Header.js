import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <img className="logo-img" src={LOGO_URL} alt="app-logo" />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
