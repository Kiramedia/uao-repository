import React, { Component } from 'react';
import './TitleJ.css';

const TitleJ = (props) => {

    const { infoTitle, infoCareer } = props;

    return (
        <div className = "o-uao-title-container">
            <h1 className = "o-uao-title-name">
                {infoTitle}
            </h1>
        </div>

    );
}

export default TitleJ;