import React from "react";
import "./Search.css";
import { withRouter } from 'react-router-dom';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = { search: decodeURIComponent(props.location.search.replace("?query=", "")).split("+").join(" ") };
    };

    render() {

        return (
            <div className="o-uao-repository-content">
                <h1>Search {this.state.search}</h1>
            </div>
        )
    };
}

export default withRouter(Search);