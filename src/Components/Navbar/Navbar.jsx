import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src="logo.jpg" />
      </Link>
      <div className="navbar-menu">
        <div
          className="hamburger-menu"
          onClick={() => {
            setActive(!active);
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`hamburger-menu-wrapper ${active ? "active" : ""}`}>
          <Link className="hamburger-menu-option" to="/Projects">
            <div>Projects</div>
          </Link>
          {/* <Link className="hamburger-menu-option" to="/Contact">
            <div>Contact</div>
          </Link> */}
        </div>
      </div>
      <div className="navbar-links-wrapper">
        <Link className="navbar-links" to="/Projects">
          <div>Projects</div>
        </Link>
        {/* <Link className="navbar-links" to="/Contact">
          <div>Contact</div>
        </Link> */}
      </div>
    </div>
  );
}

export default Navbar;
