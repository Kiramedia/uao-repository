import React from "react";
import "./MenuFilter.css";
import MenuFilterCheckItem from './MenuFilterCheckItem/MenuFilterCheckItem';
import MenuFilterRadioItem from './MenuFilterRadioItem/MenuFilterRadioItem';

class MenuFilter extends React.Component {

    constructor(props) {
        super(props);
        if (props.check) {
            console.log("hye");
            this.state = props.check;
        } else {
            console.log("hey");
            this.state = props.radio;
        }
        this.title = props.title;
        this.showMenu = this.showMenu.bind(this);
        this.state.showMenu = true;
    };

    showMenu(event) {
        event.preventDefault();

        if(this.state.showMenu){
            this.setState({ showMenu: false });
        }else{
            this.setState({ showMenu: true });
        }
    }

    render() {

        return (
            <div className="o-uao-repository-filter">
                <button onClick={this.showMenu}>
                    {this.title} <span>{this.state.showMenu ? ("▲"):("▼")}</span>
                </button>

                {
                    this.state.showMenu
                        ? (
                            this.selector()
                        )
                        : (
                            null
                        )
                }
            </div>
        )
    };

    selector = () => {
        if (this.state.check) {
            return this.state.check.map((checkItemData) => {
                return (
                    <MenuFilterCheckItem label={checkItemData.label}
                    name={checkItemData.name}
                    key={checkItemData.id}  />
                )
            });
        } else {
            console.log(this.state.radio);
            return this.state.radio.map((radioItemData) => {
                return (
                    <MenuFilterRadioItem label={radioItemData.label}
                        name={radioItemData.name}
                        key={radioItemData.id} />
                )
            });
        }
    }
}

export default MenuFilter;