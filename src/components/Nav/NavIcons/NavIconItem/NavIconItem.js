import React from "react";
import "./NavIconItem.css";

const NavIconItem = ({ srcIcon, height }) => {
    return (
        <div className="o-uao-repository-nav-icons-item">
            <a href=""><img src={srcIcon} alt="" height={height}/></a>
        </div>
    );
};

export default NavIconItem;