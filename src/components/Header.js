import React from "react";
import "../styles/Header.css";
import logo from "../assets/image/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} />
      <div className="heading"> AI Image Recognition App</div>
    </div>
  );
};
export default Header;
