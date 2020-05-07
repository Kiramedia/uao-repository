import React from 'react';
import './ImageCircle.css';

const ImageCircle = ({src}) => {

    return (
        <img className="o-circle-image" src = {src} alt=""/>
    );
}

export default ImageCircle;