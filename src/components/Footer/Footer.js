import Logo from "../../images/C2.png";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img src={Logo} alt="Logo" width="80vw"></img>
        <h2>Chapter 2 Entertainment</h2>
        Two cultures, one rhythm.
        <h4>© Chapter 2 Entertainment 2024. All rights reserved.</h4>
      </div>
      <div className="contacts">
        <div>
          Follow us on our socials
          <ul className="social-icons">
            <li>
              <NavLink to="https://instagram.com/chapter_2_entertainment?igshid=NzZhOTFlYzFmZQ==">
                <i class="fa fa-instagram"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="https://www.linkedin.com/company/chapter-2-entertainment/">
                <i class="fa fa-linkedin"></i>
              </NavLink>
            </li>
          </ul>
        </div>
        Have a query or just want to say Hi?
        <a href="mailto:Benson@chaptertwoent.com">
          <div className="contact-us">
            <button className="btn btn-4 hover-border-7">
              <span>Contact Us</span>
            </button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
