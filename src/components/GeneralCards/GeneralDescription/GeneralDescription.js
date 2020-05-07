import React from "react";
import "./GeneralDescription.css";

const GeneralDescription = ({uaoRepositoryGeneralDescription}) => {
    //DATA BINDING
    return (
        <div className="o-uao-repository-description">
            <p>{uaoRepositoryGeneralDescription}</p>
        </div>
    );
}
export default GeneralDescription;