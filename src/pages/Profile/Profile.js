import React, { Component } from 'react';
import ProfileName from "../../components/Actuators/ProfileName/ProfileName";
import DescriptionProfile from "../../components/Actuators/ParagraphJ/DescriptionProfile";
import GeneralCards from "../../components/GeneralCards/GeneralCards";
import './Profile.css';
import Title from "../../components/Title/Title";
import {dataUser, getDataUser} from '../../components/Funtions/Data';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {data: dataUser};
    };

    componentDidMount(){
        getDataUser(this);
    }

    render() {
        console.log(this.state.data.data.Item);
        return (

            <div className="o-uao-profile-container">
                <div className="o-uao-profile-side-profile">
                    <div className="o-uoa-profile-side-photo">
                        <img src={this.state.data.data.Item.urlImage} className="o-profile-pic" alt="Imagen del perfil"></img>
                    </div>
                    <div className="o-uao-profile-side-name">
                        <ProfileName nameProfile={this.state.data.data.Item.name} careerProfile={this.state.data.data.Item.profession} />
                    </div>
                    <div className="o-uao-profile-side-description">
                        <div className="o-uao-profile-networks">
                            <a href={this.state.data.data.Item.linkLinkedIn} target="_blank" rel="noopener noreferrer">
                                <div className="uao-linkedin"></div>
                            </a>
                            <a href={this.state.data.data.Item.linkGithub} target="_blank" rel="noopener noreferrer">
                                <div className="uao-github"></div>
                            </a>
                            <a href={this.state.data.data.Item.linkYoutube} target="_blank" rel="noopener noreferrer">

                                <div className="uao-youtube"></div>
                            </a>
                        </div>

                        <div className="uao-profile-info">
                            <DescriptionProfile codeProfile={this.state.data.data.Item.codeId} emailProfile={this.state.data.data.Item.email} numProfile={this.state.data.data.Item.cellphoneNumber} />
                        </div>
                    </div>

                </div>

                <div className="o-uao-profile-big-container">
                    <Title uaoRepositoryTitle="Proyectos Destacados"/>
                    <div className="o-uao-big-container-repositorys-featured">
                        {this.favoriteRepositories()}
                    </div>
                    <Title uaoRepositoryTitle="Proyectos Recientes"/>
                    <div className="o-uao-big-container-latest-repositorys">
                        {this.lastRepositories()}
                    </div>
                </div>

            </div>

        );
    }

    favoriteRepositories = () =>{
        if(this.state.data.data.Item.Repositories.length > 0){
            var favoritesJson = [];
            for(var i = 0; i < this.state.data.data.Item.Repositories.length; i++){
                if(this.state.data.data.Item.Repositories[i].favorite){
                    favoritesJson.push(this.state.data.data.Item.Repositories[i]);
                }
            }
            return favoritesJson.map((card)=>{
                return <GeneralCards src={card.urlRepository} uaoRepositoryGeneralTitle={card.name} uaoRepositoryGeneralDescription={card.abstract} ruta={"/repository/"+this.state.data.data.Item.User+"/"+card.name} key={card.name}/>
            })
        }
        
    }

    lastRepositories = () =>{
        if(this.state.data.data.Item.Repositories.length > 0){
            const sortedActivities = this.state.data.data.Item.Repositories.sort((a, b) => new Date(a.uploadDate) - new Date(b.uploadDate));
            return sortedActivities.map((card)=>{
                return <GeneralCards src={card.urlRepository} uaoRepositoryGeneralTitle={card.name} uaoRepositoryGeneralDescription={card.abstract} ruta={"/repository/"+this.state.data.data.Item.User+"/"+card.name} key={card.name}/>
            })
        }
    }
}

export default Profile;