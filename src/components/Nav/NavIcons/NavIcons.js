import React from "react";
import "./NavIcons.css";
import NavIconItem from "./NavIconItem/NavIconItem";
import { NOTIFICATION, REPOSITORY } from "../../../contants/icons";
import { Link } from "react-router-dom";
import {dataUser, getDataUser} from '../../Funtions/Data';

class NavIcons extends React.Component {
    constructor(props) {
        super(props);
        this.state = { link: props.link, srcIcon: props.srcIcon, height: props.height, subMenu: false, data: dataUser };
    };

    componentDidMount(){
        getDataUser(this);
    }

    render() {
        return (
            <div className="o-uao-repository-nav-icons">
                <NavIconItem srcIcon={NOTIFICATION} height="20px" />
                <NavIconItem srcIcon={REPOSITORY} height="20px">
                    <div className="o-sub-menu">
                        <Link to={""} className="o-sub-menu-item">Crear repositorio</Link>
                    </div>
                </NavIconItem>
                <NavIconItem srcIcon={this.state.data.data.Item.urlImage} height="32px">
                    <div className="o-sub-menu">
                        <Link to={`/profile/${localStorage.getItem("user")}`} className="o-sub-menu-item">Mi perfil</Link>
                        <Link to={`/myrepositories/${localStorage.getItem("user")}`} className="o-sub-menu-item">Mis repositorios</Link>
                        <a href="/" onClick={this.closeSession} className="o-sub-menu-item">Cerrar sesión</a>
                    </div>
                </NavIconItem>
            </div>
        );
    }

    closeSession = () => {
        localStorage.clear();
    }
}

export default NavIcons;