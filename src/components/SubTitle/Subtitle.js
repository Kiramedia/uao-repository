import React from "react";
import "./SubTitle.css";

const SubTitle = ({text}) => {

    //DATA BINDING
    return(
            <h2 className="o-uao-repository-subtitle" >{text}</h2>                 
    );
}

export default SubTitle;