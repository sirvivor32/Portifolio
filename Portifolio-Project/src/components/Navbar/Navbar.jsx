import React from "react";
import "./Navbar.css"
import logo from "../../assets/pegasus.svg"

const Navbar = () => {
    return (
        <div className="navbar">
         <img src={logo} alt="" />
         <ul className="nav-menu">
            <li>Home</li>
            <li>About Me</li>
            <li>Service</li>
            <li>Portifolio</li>
            <li>Contact me</li>
         </ul>
         <div className="nav-connect">Connect with me </div>
        </div>
    );
}

export default Navbar;
