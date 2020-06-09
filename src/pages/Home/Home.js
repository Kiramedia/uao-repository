import React from "react";
import "./Home.css";
import Section from '../../components/Section/Section';
import SpecialSection from "../../components/SpecialSection/SpecialSection";
import CardsCategorySection from "../../components/CardsCategorySection/CardsCategorySection";

const data = "Un lugar para subir, guardar y ver proyectos estudiantiles, trabajos de grado, investigaciones, eventos y novedades relacionadas al programa de Ingeniería Multimedia en la Universidad Autónoma de Occidente. Se encarga de crear una comunidad entre los estudiantes y de generar un espacio colaborativo para mostrar los proyectos."


class Home extends React.Component {

    render() {
        return (
            <div className="o-uao-repository-content">
                {this.props.children}
                <Section/>
                <CardsCategorySection/>
                <SpecialSection paragraph={data} title={"CONOCE MÁS"} srcImage={require('../../resources/img/about.jpg')}/>
            </div>
        )
    };
}

export default Home;