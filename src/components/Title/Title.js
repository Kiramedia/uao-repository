import React from "react";
import "./Title.css";

const Title = ({uaoRepositoryTitle}) => {

    //DATA BINDING
    return(
            <h2 className="o-uao-repository-title" >{uaoRepositoryTitle}</h2>                 
    );
}

export default Title;