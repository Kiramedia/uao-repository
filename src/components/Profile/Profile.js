import React, { Component } from 'react';
import ProfileImage from "../../resources/img/profile-image.jpg";
import ProfileName from "../Actuators/ProfileName/ProfileName";
import DescriptionProfile from "../Actuators/ParagraphJ/DescriptionProfile";
import GeneralCards from "../GeneralCards/GeneralCards";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
                            <DescriptionProfile codeProfile={"2156473"} emailProfile={"kevin.rondon@uao.edu.co"} numProfile={"3009871234"} />
                        </div>
                    </div>

                </div>

                <div className="o-uao-profile-big-container">
                <h1> Proyectos Destacados </h1>
                    <div className="o-uao-big-container-repositorys-featured">
                        
                        <Router>
                            <GeneralCards uaoRepositoryGeneralTitle = "Proyecto de R.A con Kinnect y Unity" uaoRepositoryGeneralDescription = "Con este proyecto se trackeó el cuerpo humano con el kinnect para ser representado virtualmente en Unity"src = "data:image/png;base64,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"/>
                        </Router>

                        

                    </div>
                    <h1> Proyectos Recientes </h1>
                    <div className="o-uao-big-container-latest-repositorys">
                    
                        <Router>
                            <GeneralCards uaoRepositoryGeneralTitle = "Hoja de vida, Diseño de experiencias Web" uaoRepositoryGeneralDescription = "Este proyecto es la entrega inicial para la materia desarrollo de experiencias web, una hoja de vida básica en HTML + CSS" src = "https://cdn.dribbble.com/users/2443329/screenshots/9177342/aabit_creative_portfolio_2x.jpg"/>
                            <GeneralCards uaoRepositoryGeneralTitle = "Subida de datos con POST usando PostMan" uaoRepositoryGeneralDescription = "En este proyecto se utilizó PostMan para hacer envío de datos con el método POST para Redes y Servicios Multimedia" src = "https://i.ytimg.com/vi/eYQyqf-DtCQ/maxresdefault.jpg"/>
                        </Router>

                    </div>
                </div>

            </div>

        );
    }
}

export default Profile;
