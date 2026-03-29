import React from 'react'
import { link } from "react-router-dom";

const Header = () => {
  return (
    <div>
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/contact" >Contact</Link>
        <Link to="/services" >Services</Link>

    </div>
  )
}

export default Header