import React from "react";
import "./NavButtons.css";
import NavButtonItem from "./NavButtonItem/NavButtonItem";

const NavButtons = () => {
    return (
        <div className="o-uao-repository-nav-buttons">
            <NavButtonItem linkButton="/home/login" text="Iniciar sesión"></NavButtonItem>
        </div>
    );
};

export default NavButtons;