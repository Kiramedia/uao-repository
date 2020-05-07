import React from "react";
import "./RepositoryLogo.css";

const RepositoryLogo = ({srcLogo}) => {
    return(<img className="o-uao-repository-logo" src={srcLogo} alt="Logo de repositorios uao"/>);
};

export default RepositoryLogo;