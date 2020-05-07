import React, { Component } from 'react';
import ProfileImage from "../../resources/img/profile-image.jpg";
import ProfileName from "../Actuators/ProfileName/ProfileName";
import DescriptionProfile from "../Actuators/ParagraphJ/DescriptionProfile";
import './Profile.css';



class Profile extends Component {

    render() {
        return (

            <div className="o-uao-profile-container">


                <div className="o-uao-profile-side-profile">
                    <div className="o-uoa-profile-side-photo">
                        <img src={ProfileImage} className="o-profile-pic"></img>
                    </div>
                    <div className="o-uao-profile-side-name">
                        <ProfileName nameProfile={"Kevin Stiwar Rondón"} careerProfile={"Ingeniero Multimedia"} />
                    </div>
                    <div className="o-uao-profile-side-description">
                        <div className="o-uao-profile-networks">
                            <a href="https://www.facebook.com/universidadautonomadeoccidente" target="_blank">
                                <div className="uao-facebook"></div>
                            </a>
                            <a href="https://twitter.com/lauao" target="_blank">
                                <div className="uao-twitter"></div>
                            </a>
                            <a href="https://www.youtube.com/user/autonomadeocc" target="_blank">
                           
                            <div className="uao-youtube"></div>
                            </a>
                        </div>

                        <div className="uao-profile-info">
                        <DescriptionProfile codeProfile = {"2156473"} emailProfile = {"kevin.rondon@uao.edu.co"} numProfile = {"3009871234"}/>
                        </div>
                    </div>

                </div>

                <div className="o-uao-profile-big-container">

                    <div className="o-uao-big-container-repositorys-featured">
                    <p>
                    AQUÍ IRÍAN LAS CARDS 1

                    </p>


                    </div>
                    <div className="o-uao-big-container-latest-repositorys">
                      <p>
                      AQUÍ IRÍAN LAS CARDS 2
                      </p>

                    </div>
                </div>

            </div>

        );
    }
}

export default Profile;
