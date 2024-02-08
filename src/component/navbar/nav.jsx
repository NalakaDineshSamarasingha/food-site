import React from "react";
import './nav.css';
import Logo from "../assests/logo.png";

const Navbar = ()=>{
    return(
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="Logo" className="logo"/>
                </div>
                <div className="navlinks">
                    <ul className="link">
                        <li className="home">Home</li>
                        <li className="food">Food</li>
                        <li className="about">About Us</li>
                        <li className="contact">Contact Us</li>
                    </ul>
                </div>
                <div className="order-button">
                    <button className="btn">Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;