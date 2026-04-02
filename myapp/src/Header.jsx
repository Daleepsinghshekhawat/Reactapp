import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Link to="/counter">Counter</Link>
      <Link to="/signin">Sign In</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/new">New</Link>
    </div>
  );
};

export default Header;
