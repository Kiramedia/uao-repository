import React from "react";
import "./Searcher.css";
import { Redirect } from 'react-router';

class Searcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = { redirect: false };
    };

    render() {
        return (
            <div className="o-uao-repository-search-container">
                <form className="o-uao-repository-search" onSubmit={this.handleOnClick}>
                    <input className="o-search-input" type="text" name="query" placeholder="Buscar..." autoComplete="off" required/>
                    <button className="o-search-button" type="submit"><img src={require('../../resources/img/search_black.png')} alt=""/></button>
                </form>
                {this.redirect()}
            </div>
        );
    };

    redirect = () => {
        if(this.state.redirect){
            return <Redirect to="/search" />;
        }
    }

    handleOnClick = () => {
        this.setState({ redirect: true });
    }
}

export default Searcher;