import React from "react";
import "./MyRepositories.css";
import { withRouter } from 'react-router-dom';
import Title from '../../components/Title/Title';
import MenuFilter from "../../components/MenuFilter/MenuFilter";
import FilterSection from "../../components/FilterSection/FilterSection";
import GeneralCards from "../../components/GeneralCards/GeneralCards";
import Searcher from "../../components/Searcher/Searcher";
import { dataUser, getDataUser } from '../../components/Funtions/Data';

const data2 = { radio: [{ id: 1, label: "Categoría", name: "orden" }, { id: 2, label: "Fecha", name: "orden" }, { id: 3, label: "Nombre", name: "orden" }, { id: 4, label: "Cantidad participantes", name: "orden" }] }

class MyRepositories extends React.Component {

    constructor(props) {
        super(props);
        this.state = { search: decodeURIComponent(props.location.search.replace("?query=", "")).split("+").join(" ").toLowerCase(), data: dataUser };
    };

    componentDidMount() {
        getDataUser(this);
    }

    render() {
        console.log(this.state.data);
        return (
            <div className="o-uao-repository-content myrepositories">
                <Title uaoRepositoryTitle="Mis repositorios" />
                <div className="o-uao-repository-search-container">
                    <FilterSection>
                        <Searcher />
                        <MenuFilter check={data2} title="Ordenar" parentCallback={this.callbackFunction} />
                    </FilterSection>

                    {this.setCards()}

                </div>
            </div>
        )
    };

    setCards = () => {
        if (this.state.data.data.Item.Repositories.length > 0) {
            var proyectosClase = [];
            var proyectosInv = [];
            var actividadesClase = [];
            for (var i = 0; i < this.state.data.data.Item.Repositories.length; i++) {
                if (this.state.data.data.Item.Repositories[i].type === "Proyecto") {
                    proyectosClase.push(this.state.data.data.Item.Repositories[i]);
                } else if (this.state.data.data.Item.Repositories[i].type === "Actividad") {
                    actividadesClase.push(this.state.data.data.Item.Repositories[i]);
                } else {
                    proyectosInv.push(this.state.data.data.Item.Repositories[i]);
                }
            }

            if (this.state.radioValue === "Categoria" || !this.state.radioValue) {
                return (<div className="o-uao-repository-cards-section-categories">
                    <h3>Proyectos de clase</h3>
                    <div className="o-uao-repository-cards-section">
                        {proyectosClase.map((card) => {
                            return <GeneralCards src={card.urlRepository} uaoRepositoryGeneralTitle={card.name} uaoRepositoryGeneralDescription={card.abstract} ruta={"/repository/" + this.state.data.data.Item.User + "/" + card.name} key={card.name} date={card.uploadDate} numAuthors={card.History.length + 1 + " participaciones"} />
                        })}
                    </div>

                    <h3>Proyectos de investigación</h3>
                    <div className="o-uao-repository-cards-section">
                        {proyectosInv.map((card) => {
                            return <GeneralCards src={card.urlRepository} uaoRepositoryGeneralTitle={card.name} uaoRepositoryGeneralDescription={card.abstract} ruta={"/repository/" + this.state.data.data.Item.User + "/" + card.name} key={card.name} date={card.uploadDate} numAuthors={card.History.length + 1 + " participaciones"} />
                        })}
                    </div>

                    <h3>Actividades de clase</h3>
                    <div className="o-uao-repository-cards-section">
                        {actividadesClase.map((card) => {
                            return <GeneralCards src={card.urlRepository} uaoRepositoryGeneralTitle={card.name} uaoRepositoryGeneralDescription={card.abstract} ruta={"/repository/" + this.state.data.data.Item.User + "/" + card.name} key={card.name} date={card.uploadDate} numAuthors={card.History.length + 1 + " participaciones"} />
                        })}
                    </div>

                </div>);
            } else if (this.state.radioValue === "Fecha") {
                const sortedActivities = this.state.data.data.Item.Repositories.sort((a, b) => new Date(a.uploadDate) - new Date(b.uploadDate));
                return <div className="o-uao-repository-cards-section">
                    {sortedActivities.map((card) => {
                        return <GeneralCards src={card.urlRepository} uaoRepositoryGeneralTitle={card.name} uaoRepositoryGeneralDescription={card.abstract} ruta={"/repository/" + this.state.data.data.Item.User + "/" + card.name} key={card.name} date={card.uploadDate} numAuthors={card.History.length + 1 + " participaciones"} />
                    })}
                </div>
            }else if (this.state.radioValue === "Nombre") {
                const sortedActivities = this.state.data.data.Item.Repositories.sort((a, b) =>{
                    a = a.name.toLowerCase();
                    b = b.name.toLowerCase();
                    return a < b ? -1 : a > b ? 1 : 0;
                });
                return <div className="o-uao-repository-cards-section">
                    {sortedActivities.map((card) => {
                        return <GeneralCards src={card.urlRepository} uaoRepositoryGeneralTitle={card.name} uaoRepositoryGeneralDescription={card.abstract} ruta={"/repository/" + this.state.data.data.Item.User + "/" + card.name} key={card.name} date={card.uploadDate} numAuthors={card.History.length + 1 + " participaciones"} />
                    })}
                </div>
            }else if (this.state.radioValue === "Cantidad") {
                const sortedActivities = this.state.data.data.Item.Repositories.sort((a, b) =>{
                    return a.History.length - b.History.length;
                });
                return <div className="o-uao-repository-cards-section">
                    {sortedActivities.map((card) => {
                        return <GeneralCards src={card.urlRepository} uaoRepositoryGeneralTitle={card.name} uaoRepositoryGeneralDescription={card.abstract} ruta={"/repository/" + this.state.data.data.Item.User + "/" + card.name} key={card.name} date={card.uploadDate} numAuthors={card.History.length + 1 + " participaciones"} />
                    })}
                </div>
            }
        }
    }

    callbackFunction = (childData) => {
        this.setState({ radioValue: childData })
    }

    onHandleChange = () => {
        console.log("change :D");
    }
}

export default withRouter(MyRepositories);