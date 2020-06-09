import React from 'react';
import './ProfileName.css';

const ProfileName = (props) => {

    const { nameProfile, careerProfile } = props;
    return (
        <div className = "o-nameProfile">
            <h1>{nameProfile}</h1>
            <h4>{careerProfile}</h4>
        </div>
    );
}

export default ProfileName;
