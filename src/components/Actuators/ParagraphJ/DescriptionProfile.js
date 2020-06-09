import React from 'react';
import './DescriptionProfile.css';

const DescriptionProfile = (props) => {

    const { codeProfile, emailProfile, numProfile } = props;
    return (
        <div className = "o-nameProfile">
            <h3 className = "o-uao-mark">Código Estudiantil: </h3> 
            <h4 className = "o-uao-info">{codeProfile}</h4>
            <h3  className = "o-uao-mark" >Correo electrónico: </h3> 
            <h4 className = "o-uao-info">{emailProfile}</h4>
            <h3  className = "o-uao-mark">Número de teléfono: </h3>
            <h4 className = "o-uao-info">{numProfile}</h4> 
        </div>
    );
}

export default DescriptionProfile;
