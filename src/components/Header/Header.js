import React from "react";
import "./Header.css";
import RepositoryLogo from "../RepositoryLogo/RepositoryLogo";
import { Link } from 'react-router-dom';
import Searcher from "../Searcher/Searcher";
import Nav from "../Nav/Nav";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.data;
        this.srcLogo = require(`../../resources/img/${props.srcLogo}`);
    };

    render() {
        return (<div className="o-uao-repository-header">
            <div className="o-uao-repository-header-left">
                <Link to="/home"><RepositoryLogo srcLogo={this.srcLogo} /></Link>
                <Searcher />
            </div>
            <div className="o-uao-repository-header-right">
                <Nav/>
            </div>
        </div>)
    };
}

export default Header;