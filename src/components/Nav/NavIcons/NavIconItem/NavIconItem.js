import React from "react";
import "./NavIconItem.css";
import { Link } from "react-router-dom";

const NavIconItem = ({ srcIcon, height, link }) => {
    return (
        <div className="o-uao-repository-nav-icons-item">
            <Link to={link}><img src={srcIcon} alt="" height={height}/></Link>
        </div>
    );
};

export default NavIconItem;