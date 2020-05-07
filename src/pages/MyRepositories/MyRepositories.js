import React from "react";
import "./MyRepositories.css";
import { withRouter } from 'react-router-dom';
import Title from '../../components/Title/Title';
import SubTitle from "../../components/SubTitle/Subtitle";
import MenuFilter from "../../components/MenuFilter/MenuFilter";
import FilterSection from "../../components/FilterSection/FilterSection";
import SearchCards from "../../components/SearchCards/SearchCards";
import Searcher from "../../components/Searcher/Searcher";

const data = { check: [{ id: 1, label: "Proyectos", name: "categorias" }, { id: 2, label: "Investigación", name: "categorias" }, { id: 3, label: "Actividades", name: "categorias" }] }
const data1 = {
    check: [{ id: 1, label: "Semestre 1", name: "semestre" }, { id: 2, label: "Semestre 2", name: "semestre" }, { id: 3, label: "Semestre 3", name: "semestre" },
    { id: 4, label: "Semestre 4", name: "semestre" }, { id: 5, label: "Semestre 5", name: "semestre" }, { id: 6, label: "Semestre 6", name: "semestre" }, { id: 7, label: "Semestre 7", name: "semestre" },
    { id: 8, label: "Semestre 8", name: "semestre" }, { id: 9, label: "Semestre 9", name: "semestre" }, { id: 10, label: "Semestre 10", name: "semestre" }]
}
const data2 = { radio: [{ id: 1, label: "Categoría", name: "orden" }, { id: 2, label: "Fecha", name: "orden" }, { id: 3, label: "Nombre", name: "orden" }, { id: 4, label: "Cantidad participantes", name: "orden" }] }

class MyRepositories extends React.Component {

    constructor(props) {
        super(props);
        this.state = { search: decodeURIComponent(props.location.search.replace("?query=", "")).split("+").join(" ").toLowerCase() };
    };

    render() {

        return (
            <div className="o-uao-repository-content myrepositories">
                <Title uaoRepositoryTitle="Mis repositorios" />
                <div className="o-uao-repository-search-container">
                    <FilterSection>
                        <Searcher/>
                        <MenuFilter check={data2} title="Ordenar" />
                        <MenuFilter radio={data} title="Categorías" />
                        <MenuFilter radio={data1} title="Materias por semestre" />
                    </FilterSection>
                    <SearchCards/>
                </div>
            </div>
        )
    };
}

export default withRouter(MyRepositories);