import React, { useState } from "react";
import './nav.css';
import Logo from "../assests/logo.png";

const Navbar = ()=>{
    const [showMenu,setShowMenu] = useState(false);
    return(

        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="Logo" className="logo"/>
                </div>
                <div className="navlinks" style={{display: showMenu?'flex':'none'}}>
                    <ul className="link" >
                        <li className="home" onClick={()=>setShowMenu(false)} >Home</li>
                        <li className="food" onClick={()=>setShowMenu(false)} >Food</li>
                        <li className="about" onClick={()=>setShowMenu(false)} >About Us</li>
                        <li className="contact" onClick={()=>setShowMenu(false)} >Contact Us</li>
                    </ul>
                </div>
                <div className="navlinks desk" >
                    <ul className="link" >
                        <li className="home">Home</li>
                        <li className="food" >Food</li>
                        <li className="about"  >About Us</li>
                        <li className="contact" >Contact Us</li>
                    </ul>
                </div>
                <div className="order-button">
                    <button className="btn">Order Now</button>
                </div>
                <p className="mobo"  onClick={()=> setShowMenu(!showMenu)}>&#9776;</p>
            </div>
        </div>
    )
}

export default Navbar;