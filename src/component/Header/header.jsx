import React from "react";
import './header.css';
import Header_img from '../assests/header.png'
const Header = () => {
    return(
        <div className="c">
            <div className="header">
            <div className="left">
                <span className="hello" >Hello Foodies,</span>
                <p className="header-text">DELCICIOUS <br /> HEALTHY FOOD</p>
                <button className="btn">Order Now</button>
            </div>
            <div className="right">
                <img src={Header_img} alt="Header"  />
            </div>
        </div>
        </div>
        
    )
}

export default Header;