import React from 'react'
import CategoryCards from "../CategoryCards/CategoryCards";
import GeneralCards from "../GeneralCards/GeneralCards"
import "./CardsSection.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const CardsSection = () => (
    <Router>
        <div className="row o-uao-repository-cards-section">
            <CategoryCards uaoRepositoryCategoryTitle="PROYECTOS DE CLASE" src="https://pbs.twimg.com/media/EXYjdz3XgAEAi8G?format=jpg&name=medium" ruta="/" uaoRepositoryCategoryDescription="Conoce más sobre proyectos realizados por estudiantes dentro de sus aulas de clase." />
            <CategoryCards uaoRepositoryCategoryTitle="PROYECTOS DE INVESTIGACIÓN" src="https://pbs.twimg.com/media/EXYjeZnXkAMuzRZ?format=jpg&name=large" ruta="/" uaoRepositoryCategoryDescription="Conoce más sobre proyectos de investigación y trabajos de grado de Ingenieros Multimedia." />
            <CategoryCards uaoRepositoryCategoryTitle="ACTIVIDADES DE CLASE" src="https://pbs.twimg.com/media/EXYjfFPWAAA4nTa?format=jpg&name=small" ruta="/" uaoRepositoryCategoryDescription="Conoce más sobre actividades, talleres y material de clase disponibles para estudiar." />
        </div>

        <div className="row o-uao-repository-cards-section">
            <GeneralCards uaoRepositoryGeneralTitle="Proyecto de Realidad Aumentada con Kinect y Unity" src="https://lh3.googleusercontent.com/proxy/bxcvQ5DHp_tuoLlE2vvFZjvRD4zM2a4C9SkLB4nvJ9nG67CGlkOhyXMPEVi5KhHglp49NdiyRQYaNMnRcwYz5NhUPV1IhZhOL0XkVDyq9QFkkd8b1UjYsBtfnHkFQQsqAT1JEQ0E6lmG" ruta="/" uaoRepositoryGeneralDescription="Para la materia de Fundamentos de Realidad Virtual. Realizado por: Alejandra Henao y Camila Muñoz" />

        </div>
    </Router>

);
export default CardsSection;