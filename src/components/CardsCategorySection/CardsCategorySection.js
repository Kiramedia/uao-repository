import React from 'react'
import CategoryCards from "../CategoryCards/CategoryCards";
import Title from "../Title/Title";
import "./CardsCategorySection.css";

const CardsCategorySection = () => (
    
    <div>
        <Title uaoRepositoryTitle={"CATEGORÍAS"}/>
        <div className="row o-uao-repository-cards-section">
            <CategoryCards link="/search" uaoRepositoryCategoryTitle="PROYECTOS DE CLASE" src="https://pbs.twimg.com/media/EXYjdz3XgAEAi8G?format=jpg&name=medium" ruta="/" uaoRepositoryCategoryDescription="Conoce más sobre proyectos realizados por estudiantes dentro de sus aulas de clase." />
            <CategoryCards link="/search" uaoRepositoryCategoryTitle="PROYECTOS DE INVESTIGACIÓN" src="https://pbs.twimg.com/media/EXYjeZnXkAMuzRZ?format=jpg&name=large" ruta="/" uaoRepositoryCategoryDescription="Conoce más sobre proyectos de investigación y trabajos de grado de Ingenieros Multimedia." />
            <CategoryCards link="/search" uaoRepositoryCategoryTitle="ACTIVIDADES DE CLASE" src="https://pbs.twimg.com/media/EXYjfFPWAAA4nTa?format=jpg&name=small" ruta="/" uaoRepositoryCategoryDescription="Conoce más sobre actividades, talleres y material de clase disponibles para estudiar." />
        </div>
    </div>

);
export default CardsCategorySection;