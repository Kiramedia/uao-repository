import React from 'react';
import './GeneralCards.css';
import { Link } from "react-router-dom";
import GeneralTitle from './GeneralTitle/GeneralTitle';
import GeneralImage from './GeneralImage/GeneralImage';
import GeneralDescription from './GeneralDescription/GeneralDescription';


const GeneralCards = ({ src, uaoRepositoryGeneralTitle, uaoRepositoryGeneralDescription, ruta, date, numAuthors }) => {

    return (
        <div className="o-uao-repository-general-card">

            <Link to={ruta} className="o-uao-repository-link">

                <div className="o-uao-repository-image-card">
                    <GeneralImage src={src} />
                </div>

                <div className="o-uao-repository-general-title">
                    <GeneralTitle uaoRepositoryGeneralTitle={uaoRepositoryGeneralTitle} />
                </div>

                <div className="o-uao-repository-description">
                    <GeneralDescription uaoRepositoryGeneralDescription={uaoRepositoryGeneralDescription} />
                </div>

                <div className="o-uao-repository-bottom-card">
                    <div className="o-uao-repository-date">
                        <p>{date}</p>
                    </div>
                    <div className="o-uao-repository-authors">
                        <p>{numAuthors}</p>
                    </div>
                </div>

            </Link>

        </div>
    );
}
export default GeneralCards;