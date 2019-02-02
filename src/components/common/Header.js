import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./Header.css";
import Search from "./Search";

const Header = () => (
  <div className="Header">
    <Link to="/">
      <img src={logo} alt="logo" className="Header-logo" />
    </Link>
    <Search />
  </div>
);

export default Header;
