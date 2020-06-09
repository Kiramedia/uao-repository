import React from "react";
import "./Nav.css";
import NavButtons from "./NavButtons/NavButtons";
import NavIcons from "./NavIcons/NavIcons";
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = { redirect: false, sessionState: false };
    };

    render() {
        return (
            <div className="o-uao-repository-nav">
                {this.sessionUpdate()}
            </div>
        );
    }

    onRouteChanged() {
        console.log("Route change");
    }

    sessionUpdate = () => {
        if (localStorage.getItem("loginToken") && this.state.sessionState === false) {
            var temp = this;

            axios.post("https://ri65k7xp7k.execute-api.sa-east-1.amazonaws.com/Dev1/repository", {
                params: {
                    'user': localStorage.getItem("user"),
                    'token': localStorage.getItem("loginToken")
                }
            }, {
                headers: {
                    'x-api-key': "9wi5yne6fUaV9bCu0euoP86bMdGEyRAM14JlCsBM"
                }
            }).then(function (json) {
                temp.setState({sessionState: json.data});
            })
            .catch((error) => {
                console.log(error);

            })
        }

        if(this.state.sessionState){
            return <NavIcons />;
        }else{
            return <NavButtons />;
        }
    }
}

export default withRouter(Nav);