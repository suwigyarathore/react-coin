import React from "react";
import logo from "./logo.png";
import "./Header.css";

const Header = () => (
  <div className="Header">
    <img src={logo} alt="logo" className="Header-logo" />
  </div>
);

export default Header;
