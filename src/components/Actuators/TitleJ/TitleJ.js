import React from 'react';
import './TitleJ.css';

const TitleJ = ({ infoTitle}) => {

    return (
        <div className = "o-uao-title-container">
            <h1 className = "o-uao-title-name">
                {infoTitle}
            </h1>
        </div>

    );
}

export default TitleJ;