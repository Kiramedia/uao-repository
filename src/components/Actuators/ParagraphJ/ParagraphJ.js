import React, { Component } from 'react';
import './ParagraphJ.css';

const ParagraphJ = (props) => {

    const { infoParagraph } = props;
    return (
        <div className = "o-paragraph">
            <p>{infoParagraph}</p>
        </div>


    );
}

export default ParagraphJ;
