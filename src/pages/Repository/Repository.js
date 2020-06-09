import React from "react";
import "./Repository.css";
import { withRouter } from 'react-router-dom';
import { getRepo } from "../../components/Funtions/Data";

class Repository extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            repositoryName: this.props.location.pathname.replace("/repository/", "").split("/")[1].toLowerCase(),
            userRepository: this.props.location.pathname.replace("/repository/", "").split("/")[0].toLowerCase()
        };
    };

    componentDidMount() {
        getRepo(this, this.state.repositoryName, this.state.userRepository);
    }

    render() {
        return (
            <div className="o-uao-repository-content repository">
                {this.setComponentsFromBack()}
            </div>
        )
    };

    setComponentsFromBack = () => {

        if (this.state.data) {
            return (
                <div className="o-container">
                    <div className="tabs">
                        <input type="radio" name="tab" id="tab1" defaultChecked></input>
                        <label htmlFor="tab1">Resumen</label>
                        <input type="radio" name="tab" id="tab2" ></input>
                        <label htmlFor="tab2">Detalles</label>
                        <input type="radio" name="tab" id="tab3" ></input>
                        <label htmlFor="tab3" >Capturas</label>
                        <input type="radio" name="tab" id="tab4" ></input>
                        <label htmlFor="tab4">Descarga</label>

                        <div className="tab-content-wrapper">
                            <div id="tab-content-1" className="tab-content">
                                <div className="changelog">
                                    <h1 className="page-title">{this.state.data.data.repository.name}</h1>
                                    <h3 id="authentication">Resumen</h3>
                                    <p>{this.state.data.data.repository.abstract}</p>
                                    <button>¡Quiero usar este proyecto!</button>
                                </div>
                            </div>

                            <div id="tab-content-2" className="tab-content">
                                <div className="changelog">
                                    <h1 className="page-title">Detalles</h1>
                                    <p><span className="bold">Autor: </span><a href={"/profile/" + this.state.data.data.User} target="_blank" rel="noopener noreferrer">{this.state.data.data.User}</a></p>
                                    <p><span className="bold">Semestre realizado: </span>{this.state.data.data.repository.semester}</p>
                                    <p><span className="bold">Tipo de trabajo: </span>{this.state.data.data.repository.type}</p>
                                    <p><span className="bold">Fecha de subida: </span>{this.state.data.data.repository.uploadDate}</p>
                                </div>
                            </div>

                            <div id="tab-content-3" className="tab-content">
                                <div className="changelog">
                                    <h1 className="page-title">Capturas</h1>
                                    {this.state.data.data.repository.helpImages.map((image) => {
                                        return (<img src={image.image} key={Math.random()} alt=""></img>);
                                    })}
                                </div>
                            </div>

                            <div id="tab-content-4" className="tab-content">
                                <div className="changelog">
                                    <h1 className="page-title">Descarga</h1>
                                    <button><a href={this.state.data.data.repository.urlZip}>Descargar el proyecto</a></button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default withRouter(Repository);