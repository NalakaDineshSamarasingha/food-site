import React from "react";
import './category.css';
import Vegan from '../assests/vegan.png';
import non_vegan from '../assests/non.png';

const Category = ()=>{
    return(
        <div className="category">
            <div className="main2">
                <p className="topic">Our Food</p>
                <hr />
            </div>
            <div className="main">
                <div className="vegan">
                    <img src={Vegan} alt="Vegan" style={{width:"260px"}} />
                    <p className="about">
                        Vegan Food
                    </p>
                    <button className="c-btn">Taste Now</button>
                </div>
                <div className="vegan">
                    <img src={non_vegan} alt="NonVegan" style={{width:"250px"}} />
                    <p className="about">
                        Non-Vegan Food
                    </p>
                    <button className="c-btn">Taste Now</button>    
                </div>
            </div>
        </div>
    )
}
export default Category;