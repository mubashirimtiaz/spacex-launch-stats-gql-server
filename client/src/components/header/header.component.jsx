import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
const Header = () => {
  return (
    <Link to="/">
      <img
        src={logo}
        alt="logo"
        style={{ width: 300, display: "block", margin: "auto" }}
      />
    </Link>
  );
};

export default Header;
