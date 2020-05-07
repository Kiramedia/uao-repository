import React from "react";
import "./NavIcons.css";
import NavIconItem from "./NavIconItem/NavIconItem";
import {NOTIFICATION, REPOSITORY} from "../../../contants/icons";

const NavIcons = () => {
    return (
        <div className="o-uao-repository-nav-icons">
            <NavIconItem srcIcon={NOTIFICATION} height="20px"/>
            <NavIconItem srcIcon={REPOSITORY} height="20px" link="/myrepositories"/>
            <NavIconItem srcIcon="https://i.imgur.com/lCn5ncK.jpg" height="32px" link="/profile"/>
        </div>
    );
};

export default NavIcons;