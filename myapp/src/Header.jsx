import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/services">Services</Link>
      <Link to="/counter">Counter</Link>
    </div>
  );
};

export default Header;
