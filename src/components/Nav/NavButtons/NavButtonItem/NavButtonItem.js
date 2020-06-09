import React from "react";
import "./NavButtonItem.css";
import { Link } from "react-router-dom";

const NavButtonItem = ({ linkButton, text }) => {

    return (
        <Link to={linkButton}>
            <div className="o-uao-repository-nav-button-item" onClick={changeState()}>
                <h1>{text}</h1>
            </div>
        </Link>
    );
    
    
};

const changeState = () =>{
    
}

export default NavButtonItem;