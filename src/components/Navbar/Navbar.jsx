import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navbar.css";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={logo} alt="icon" className="logo" />

      <ul className="nav-menu">
        <li className={menu === "home" ? "active" : ""}>
          <AnchorLink href="#home" offset="80" onClick={() => setMenu("home")}>
            Home
          </AnchorLink>
        </li>

        <li className={menu === "about" ? "active" : ""}>
          <AnchorLink href="#about" offset="80" onClick={() => setMenu("about")}>
            About Me
          </AnchorLink>
        </li>

        <li className={menu === "services" ? "active" : ""}>
          <AnchorLink href="#services" offset="80" onClick={() => setMenu("services")}>
            Services
          </AnchorLink>
        </li>

        <li className={menu === "mywork" ? "active" : ""}>
          <AnchorLink href="#mywork" offset="80" onClick={() => setMenu("mywork")}>
            Portfolio
          </AnchorLink>
        </li>

        <li className={menu === "contact" ? "active" : ""}>
          <AnchorLink href="#contact" offset="80" onClick={() => setMenu("contact")}>
            Contact
          </AnchorLink>
        </li>
      </ul>

      <div className="nav-connect"> <AnchorLink href="#contact" offset="80" onClick={() => setMenu("contact")}>Connect with Me </AnchorLink></div>
    </div>
  );
};

export default Navbar;
