import React from "react";
import "./Login.css";
import RepositoryLogo from "../../components/RepositoryLogo/RepositoryLogo";
import { Link, Redirect } from "react-router-dom";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: "", password: "", errorState: false}
    };

    render() {
        return (
            <div className="o-uao-repository-login">
                <div className="o-uao-repository-login-container">
                    <Link className="o-login-logo" to="/home"><RepositoryLogo srcLogo={require('../../resources/img/logo-repository-login.png')} /></Link>
                    
                    <div className="o-uao-repository-login-form">
                        {this.updateErrorState()}
                        <input className="o-login-input" type="text" name="user" placeholder="Nombre de usuario" onChange={this.updateName} autoComplete="off" required />
                        <input className="o-login-input" type="password" name="user" placeholder="Contraseña" onChange={this.updatePassword} autoComplete="off" required />
                        <a href="">¿Olvidó su nombre de usuario o contraseña?</a>
                        <button className="o-login-button" onClick={this.validate}>Acceder</button>
                    </div>
                    <Link className="o-login-close-button-container" to="/home"><h6 className="o-login-close-button" >X</h6></Link>
                    {this.redirect()}
                </div>
            </div>
        )
    };

    updateName = (val) =>{
        this.setState({name: val.target.value});
    }

    updatePassword = (val) =>{
        this.setState({password: val.target.value});
    }

    updateErrorState(){
        if(this.state.errorState){
            return <h6 className="o-login-error">Datos erróneos. Por favor, inténtelo otra vez.</h6>;
        }
    }

    setStateLogin(params) {
        this.setState({errorState: params.errorState, redirectState: params.redirectState});
    }

    redirect = () =>{
        if(this.state.redirectState){
            return <Redirect to="/home"/>;
        }
    }

    validate = () =>{
        if(this.state.name.toLowerCase() == "kevin.rondon" && this.state.password == "1234"){
            window.$sessionState = true;
            console.log(window.$sessionState);
            return this.setStateLogin({redirectState: true});
        }else{
            return this.setStateLogin({errorState: true});
        }
    }
}

export default Login;