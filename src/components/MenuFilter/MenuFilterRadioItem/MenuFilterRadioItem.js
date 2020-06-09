import React from "react";
import "./MenuFilterRadioItem.css";

const MenuFilterRadioItem = ({ label, name}) => {
    console.log("se creo")
    //DATA BINDING
    return (
        <div className="o-uao-repository-radio">
            <label>
                <input id="radio" type="radio" name={name} value={label}/>
                <span className="checkmark"></span>
                {label}
            </label>
        </div>
    );
}

export default MenuFilterRadioItem;