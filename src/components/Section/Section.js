import React, { Component } from 'react';
import './Section.css';
import ButtonJ from "../Actuators/ButtonJ/ButtonJ";
import Paragraph from "../Actuators/ParagraphJ/ParagraphJ";
import TitleJ from "../Actuators/TitleJ/TitleJ";
import logoUAO from "../../resources/img/logouao.png";

const data = "Una nueva herramienta creada específicamente para ingenieros multimedia.\n Un lugar para subir, guardar y ver proyectos estudiantiles, trabajos de grado, investigaciones, eventos y novedades relacionadas al programa de Ingeniería Multimedia en la Universidad Autónoma de Occidente."

class Section extends Component {

    
    render() {
        return (

            <div className="o-uao-repository-header-section">

                <div className="o-uao-repository-info-button">
                    <div className="o-uao-repository-title-section">
                        <TitleJ infoTitle={"Bienvenido al repositorio de Ingeniería Multimedia"} />
                    </div>
                    <div className="o-uao-repository-info white-text">
                        <Paragraph infoParagraph={data} />
                    </div>
                    <div className="o-uao-repository-button">
                        <ButtonJ infoButton={"Conoce más"} />
                    </div>
                </div>
                <div className="o-uao-repository-header-section-image">
                    <img src={logoUAO} className="logo-uao" alt=""></img>
                </div>
            </div>

        );
    }
}

export default Section;
