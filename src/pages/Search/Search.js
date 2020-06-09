import React from "react";
import "./Search.css";
import { withRouter } from 'react-router-dom';
import Title from '../../components/Title/Title';
import SubTitle from "../../components/SubTitle/Subtitle";
import MenuFilter from "../../components/MenuFilter/MenuFilter";
import FilterSection from "../../components/FilterSection/FilterSection";
import GeneralCards from "../../components/GeneralCards/GeneralCards";
import { getData } from '../../components/Funtions/Data';

const data = { check: [{ id: 1, label: "Proyectos", name: "categorias" }, { id: 2, label: "Investigación", name: "categorias" }, { id: 3, label: "Actividades", name: "categorias" }] }
const data1 = {
    check: [{ id: 1, label: "Semestre 1", name: "semestre" }, { id: 2, label: "Semestre 2", name: "semestre" }, { id: 3, label: "Semestre 3", name: "semestre" },
    { id: 4, label: "Semestre 4", name: "semestre" }, { id: 5, label: "Semestre 5", name: "semestre" }, { id: 6, label: "Semestre 6", name: "semestre" }, { id: 7, label: "Semestre 7", name: "semestre" },
    { id: 8, label: "Semestre 8", name: "semestre" }, { id: 9, label: "Semestre 9", name: "semestre" }, { id: 10, label: "Semestre 10", name: "semestre" }]
}
const data2 = { radio: [{ id: 1, label: "Categoría", name: "orden" }, { id: 2, label: "Fecha", name: "orden" }, { id: 3, label: "Nombre", name: "orden" }, { id: 4, label: "Cantidad participantes", name: "orden" }] }

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = { search: decodeURIComponent(props.location.search.replace("?query=", "")).split("+").join(" ").toLowerCase() };
    };

    componentDidMount() {
        getData(this, this.state.search);
    }

    render() {
        console.log(this.state.search);
        return (
            <div className="o-uao-repository-content search">
                <Title uaoRepositoryTitle="Búsqueda General" />
                <SubTitle text={`Resultados de: ${this.state.search}`} />
                <div className="o-uao-repository-search-container">
                    <FilterSection>
                        <MenuFilter check={data2} title="Ordenar" parentCallback={this.callbackFunction}/>
                        <MenuFilter radio={data} title="Categorías" />
                        <MenuFilter radio={data1} title="Materias por semestre" />
                    </FilterSection>
                    {this.setCards()}
                </div>
            </div>
        )
    };

    setCards = () => {
        if (this.state.data) {
            if (this.state.data.data.length > 0) {
                var proyectosClase = [];
                var proyectosInv = [];
                var actividadesClase = [];
                for (var i = 0; i < this.state.data.data.length; i++) {
                    if (this.state.data.data[i].repository.type === "Proyecto") {
                        proyectosClase.push(this.state.data.data[i]);
                    } else if (this.state.data.data[i].repository.type === "Actividad") {
                        actividadesClase.push(this.state.data.data[i]);
                    } else {
                        proyectosInv.push(this.state.data.data[i]);
                    }
                }

                if (this.state.radioValue === "Categoria" || !this.state.radioValue) {
                    return (<div className="o-uao-repository-cards-section-categories">
                        <h3>Proyectos de clase</h3>
                        <div className="o-uao-repository-cards-section">
                            {proyectosClase.map((card) => {
                                return <GeneralCards src={card.repository.urlRepository} uaoRepositoryGeneralTitle={card.repository.name} uaoRepositoryGeneralDescription={card.repository.abstract} ruta={"/repository/" + card.User + "/" + card.repository.name} key={card.repository.name} date={card.repository.uploadDate} numAuthors={card.repository.History.length + 1 + " participaciones"} />
                            })}
                        </div>

                        <h3>Proyectos de investigación</h3>
                        <div className="o-uao-repository-cards-section">
                            {proyectosInv.map((card) => {
                                return <GeneralCards src={card.repository.urlRepository} uaoRepositoryGeneralTitle={card.repository.name} uaoRepositoryGeneralDescription={card.repository.abstract} ruta={"/repository/" + card.User + "/" + card.repository.name} key={card.repository.name} date={card.repository.uploadDate} numAuthors={card.repository.History.length + 1 + " participaciones"} />
                            })}
                        </div>

                        <h3>Actividades de clase</h3>
                        <div className="o-uao-repository-cards-section">
                            {actividadesClase.map((card) => {
                                return <GeneralCards src={card.repository.urlRepository} uaoRepositoryGeneralTitle={card.repository.name} uaoRepositoryGeneralDescription={card.repository.abstract} ruta={"/repository/" + card.User + "/" + card.repository.name} key={card.repository.name} date={card.repository.uploadDate} numAuthors={card.repository.History.length + 1 + " participaciones"} />
                            })}
                        </div>

                    </div>);
                } else if (this.state.radioValue === "Fecha") {
                    console.log(this.state.data.data);
                    const sortedActivities = this.state.data.data.sort((a, b) => new Date(a.repository.uploadDate) - new Date(b.repository.uploadDate));
                    return <div className="o-uao-repository-cards-section">
                        {sortedActivities.map((card) => {
                            return <GeneralCards src={card.repository.urlRepository} uaoRepositoryGeneralTitle={card.repository.name} uaoRepositoryGeneralDescription={card.repository.abstract} ruta={"/repository/" + card.User + "/" + card.repository.name} key={card.repository.name} date={card.repository.uploadDate} numAuthors={card.repository.History.length + 1 + " participaciones"} />
                        })}
                    </div>
                } else if (this.state.radioValue === "Nombre") {
                    const sortedActivities = this.state.data.data.sort((a, b) => {
                        a = a.repository.name.toLowerCase();
                        b = b.repository.name.toLowerCase();
                        return a < b ? -1 : a > b ? 1 : 0;
                    });
                    return <div className="o-uao-repository-cards-section">
                        {sortedActivities.map((card) => {
                            return <GeneralCards src={card.repository.urlRepository} uaoRepositoryGeneralTitle={card.repository.name} uaoRepositoryGeneralDescription={card.repository.abstract} ruta={"/repository/" + card.User + "/" + card.repository.name} key={card.repository.name} date={card.repository.uploadDate} numAuthors={card.repository.History.length + 1 + " participaciones"} />
                        })}
                    </div>
                } else if (this.state.radioValue === "Cantidad") {
                    const sortedActivities = this.state.data.data.sort((a, b) => {
                        return a.repository.History.length - b.repository.History.length;
                    });
                    return <div className="o-uao-repository-cards-section">
                        {sortedActivities.map((card) => {
                            return <GeneralCards src={card.repository.urlRepository} uaoRepositoryGeneralTitle={card.repository.name} uaoRepositoryGeneralDescription={card.repository.abstract} ruta={"/repository/" + card.User + "/" + card.repository.name} key={card.repository.name} date={card.repository.uploadDate} numAuthors={card.repository.History.length + 1 + " participaciones"} />
                        })}
                    </div>
                }
            }
        }
    }

    callbackFunction = (childData) => {
        this.setState({ radioValue: childData })
    }
}

export default withRouter(Search);