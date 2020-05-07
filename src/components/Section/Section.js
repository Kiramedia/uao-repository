import React, { Component } from 'react';
import './Section.css';
import ButtonJ from "../Actuators/ButtonJ/ButtonJ";
import ParagraphJ from "../Actuators/ParagraphJ/ParagraphJ";
import TitleJ from "../Actuators/TitleJ/TitleJ";
import logoUAO from "../../resources/img/logouao.png";
import ParagraphText from "../Actuators/ParagraphJ/ParagraphText";




class Section extends Component {

    render() {
        return (

            <div className="o-uao-repository-header-section">

                <div className="o-uao-repository-container">
                            <div className="o-uao-repository-info-button">
                                <div className="o-uao-repository-title">
                                    <TitleJ infoTitle={"Bienvenido al repositorio de Ingeniería Multimedia"} />
                                </div>
                                <div className="o-uao-repository-info">
                                    <ParagraphJ infoParagraph= {<ParagraphText />} />
                                </div>
                                <div className="o-uao-repository-button">
                                    <ButtonJ infoButton={"Conoce más"} />
                                </div>
                            </div>
                            <div className="o-uao-repository-header-section-image">
                                <img src={logoUAO} className="logo-uao"></img>
                            </div>
                    </div>
                </div>

        );
    }
}

export default Section;
