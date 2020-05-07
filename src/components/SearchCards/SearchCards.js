import React from 'react'
import "./SearchCards.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GeneralCards from '../GeneralCards/GeneralCards';


const SearchCards = () => (

    <Router>
        <div className="row o-uao-repository-cards-section">
        <GeneralCards uaoRepositoryGeneralTitle="Proyecto de Realidad Aumentada con Kinect y Unity" src="https://i.pinimg.com/originals/df/87/af/df87af42a215d7e12b3a016f96ee3391.jpg" ruta="/" uaoRepositoryGeneralDescription="Para la materia de Fundamentos de Realidad Virtual. Realizado por: Alejandra Henao y Camila Muñoz" />
        <GeneralCards uaoRepositoryGeneralTitle="Proyecto de Realidad Aumentada con Kinect y Unity" src="https://i.pinimg.com/originals/df/87/af/df87af42a215d7e12b3a016f96ee3391.jpg" ruta="/" uaoRepositoryGeneralDescription="Para la materia de Fundamentos de Realidad Virtual. Realizado por: Alejandra Henao y Camila Muñoz" />
        <GeneralCards uaoRepositoryGeneralTitle="Proyecto de Realidad Aumentada con Kinect y Unity" src="https://i.pinimg.com/originals/df/87/af/df87af42a215d7e12b3a016f96ee3391.jpg" ruta="/" uaoRepositoryGeneralDescription="Para la materia de Fundamentos de Realidad Virtual. Realizado por: Alejandra Henao y Camila Muñoz" />
        <GeneralCards uaoRepositoryGeneralTitle="Proyecto de Realidad Aumentada con Kinect y Unity" src="https://i.pinimg.com/originals/df/87/af/df87af42a215d7e12b3a016f96ee3391.jpg" ruta="/" uaoRepositoryGeneralDescription="Para la materia de Fundamentos de Realidad Virtual. Realizado por: Alejandra Henao y Camila Muñoz" />
        <GeneralCards uaoRepositoryGeneralTitle="Proyecto de Realidad Aumentada con Kinect y Unity" src="https://i.pinimg.com/originals/df/87/af/df87af42a215d7e12b3a016f96ee3391.jpg" ruta="/" uaoRepositoryGeneralDescription="Para la materia de Fundamentos de Realidad Virtual. Realizado por: Alejandra Henao y Camila Muñoz" />
        <GeneralCards uaoRepositoryGeneralTitle="Proyecto de Realidad Aumentada con Kinect y Unity" src="https://i.pinimg.com/originals/df/87/af/df87af42a215d7e12b3a016f96ee3391.jpg" ruta="/" uaoRepositoryGeneralDescription="Para la materia de Fundamentos de Realidad Virtual. Realizado por: Alejandra Henao y Camila Muñoz" />
        </div>
    </Router>

);
export default SearchCards;