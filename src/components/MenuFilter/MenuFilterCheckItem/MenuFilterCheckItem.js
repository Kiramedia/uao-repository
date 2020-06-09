import React from "react";
import "./MenuFilterCheckItem.css";

const MenuFilterCheckItem = ({label, name}) => {

    //DATA BINDING
    return(
        <div className="o-uao-repository-checkbox">
            <label>
                {label}
                <input id="checkbox" type="checkbox" name={name} value={label} />
                <span className="checkmark"></span>
                
            </label>
        </div>
    );
}

export default MenuFilterCheckItem;