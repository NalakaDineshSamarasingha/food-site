import React from "react";
import './feature.css';
import Food_Icon from '../assests/Food.png'
import Deliver_icon from "../assests/deliver.png";

const Feature = () => {
    return(
        <div className="feature-container">
            <div className="feature">
                <div className="food">
                    <img src={Food_Icon} alt="Food" style={{width:"100px"}} />
                    <p className="food-title">Select your favourite <br /> Food</p>
                    <p className="food-about">We have a big collection. Chose <br /> your favourite.</p>
                </div>
                <div className="deliver">
                    <img src={Deliver_icon} alt="Deliver" style={{width:"100px"}} />
                    <p className="deliver-title">On Time Delivery For <br /> Free</p>
                    <p className="deliver-about">On your door step in right time. <br /> Don’t late ...</p>
                </div>
            </div>
        </div>
        
    )
}
export default Feature;