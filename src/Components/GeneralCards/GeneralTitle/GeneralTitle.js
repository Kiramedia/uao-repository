import React from "react";
import "./GeneralTitle.css";

const GeneralTitle = ({ uaoRepositoryGeneralTitle }) => {

    //DATA BINDING
    return (
        <div>
            <p className="o-uao-repository-general-title">
                    {uaoRepositoryGeneralTitle}
            </p>
        </div>
    );
}
export default GeneralTitle;