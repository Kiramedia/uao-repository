import React from "react";
import "./MenuFilter.css";
import MenuFilterCheckItem from './MenuFilterCheckItem/MenuFilterCheckItem';

class MenuFilter extends React.Component {

    constructor(props) {
        super(props);
        if (props.check) {
            this.state = props.check;
        } else {
            this.state = props.radio;
        }
        this.title = props.title;
        this.showMenu = this.showMenu.bind(this);
        this.state.showMenu = true;
    };

    showMenu(event) {
        event.preventDefault();

        if (this.state.showMenu) {
            this.setState({ showMenu: false });
        } else {
            this.setState({ showMenu: true });
        }
    }

    render() {
        return (
            <div className="o-uao-repository-filter">
                <button onClick={this.showMenu}>
                    {this.title} <span>{this.state.showMenu ? ("▲") : ("▼")}</span>
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
                        key={checkItemData.id} />
                )
            });
        } else {

            return (<div className="o-uao-repository-radio">
                <label>
                    <input id="radio" type="radio" name="orden" value="Categoria" onChange={this.onHandleChange} defaultChecked />
                    <span className="checkmark"></span>
                Categoría
            </label>
                <label>
                    <input id="radio" type="radio" name="orden" value="Fecha" onChange={this.onHandleChange} />
                    <span className="checkmark"></span>
                Fecha
            </label>
                <label>
                    <input id="radio" type="radio" name="orden" value="Nombre" onChange={this.onHandleChange} />
                    <span className="checkmark"></span>
                Nombre
            </label>
                <label>
                    <input id="radio" type="radio" name="orden" value="Cantidad" onChange={this.onHandleChange} />
                    <span className="checkmark"></span>
                Cantidad participantes
            </label>
            </div>);
        }
    }

    onHandleChange = (e) => {
        this.props.parentCallback(e.target.value);
        this.setState({ value: e.target.value });
    }
}

export default MenuFilter;