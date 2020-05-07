import React from "react";
import "./Home.css";

class Home extends React.Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="o-uao-repository-content">
                {this.props.children}
            </div>
        )
    };
}

export default Home;