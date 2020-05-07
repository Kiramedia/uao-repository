import React from "react";
import "./Nav.css";
import NavButtons from "./NavButtons/NavButtons";
import NavIcons from "./NavIcons/NavIcons";
import { withRouter } from 'react-router-dom';;

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = { redirect: false, session: window.$sessionState };
    };

    render(){
        console.log(window.$sessionState);
        return (
            <div className="o-uao-repository-nav">
                {this.sessionUpdate()}
            </div>
        );
    }

    onRouteChanged(){
        console.log("Route change");
    }

    sessionUpdate = () => {
        if (window.$sessionState) {
            return <NavIcons />;
        }else{
            return <NavButtons />;
        }
    }
}

export default withRouter(Nav);