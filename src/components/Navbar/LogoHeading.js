import { NavLink } from "react-router-dom";
import Logo from "../../images/C2.png";
import "./Navbar.css";

const LogoHeading = () => {
  return (
    <div className="logo-heading">
      <NavLink to="/">
        <img className="logo" src={Logo} alt="Logo"></img>
      </NavLink>
      <h3 className="logo-text">Chapter 2 Entertainment</h3>
    </div>
  );
};

export default LogoHeading;
