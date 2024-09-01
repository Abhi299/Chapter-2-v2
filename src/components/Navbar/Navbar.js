import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoHeading from "./LogoHeading";
import { Mail, Menu } from "react-feather";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <LogoHeading />
        <div className="nav-elements">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hamburger-menu"
          >
            <Menu />
          </button>
          <ul className={`menu ${isMenuOpen ? "active" : ""}`}>
            <li>
              <NavLink
                to="/clients"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Clients
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/news"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                News
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <a
                href="mailto:Benson@chaptertwoent.com"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Mail />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
