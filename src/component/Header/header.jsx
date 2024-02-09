import React from "react";
import './header.css';
import Header_img from '../assests/header.png'
const Header = () => {
    return(
        <div className="header">
            <div className="left">
                <p className="header-text">DELCICIOUS <br /> HEALTHY FOOD</p>
                <button className="btn">Order Now</button>
            </div>
            <div className="right">
                <img src={Header_img} alt="Header" style={{width:"800px"}} />
            </div>
        </div>
    )
}

export default Header;