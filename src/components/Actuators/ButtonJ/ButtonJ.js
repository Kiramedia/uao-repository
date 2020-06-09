import React from 'react';
import './ButtonJ.css';

const ButtonJ = (props) => {

    const { infoButton } = props;
    return (
        <button className = "o-button-J">
            {infoButton}
            </button> 

    );
}

export default ButtonJ;
