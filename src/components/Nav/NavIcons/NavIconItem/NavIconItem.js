import React from "react";
import "./NavIconItem.css";

class NavIconItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = { srcIcon: props.srcIcon, height: props.height, subMenu: false};
    };

    render(){
        return (
            <div className="o-uao-repository-nav-icons-item" onClick={this.changeSubMenuState}>
                <img src={this.props.srcIcon} alt="" height={this.state.height}/>
                {this.validateSubMenu()}
            </div>
        );
    }

    validateSubMenu = () =>{
        if(this.state.subMenu){
            return this.props.children;
        }
    }

    changeSubMenuState = () =>{
        if(this.state.subMenu){
            this.setState({subMenu: false});
        }else{
            this.setState({subMenu: true});
        }
    }
}

export default NavIconItem;