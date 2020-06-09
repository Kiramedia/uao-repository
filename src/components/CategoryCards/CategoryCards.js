import React from 'react';
import './CategoryCards.css';
import { Link } from "react-router-dom";
import CategoryTitle from './CategoryTitle/CategoryTitle';
import CategoryImage from './CategoryImage/CategoryImage';
import CategoryDescription from './CategoryDescription/CategoryDescription';


const CategoryCards = ({ src, uaoRepositoryCategoryTitle, uaoRepositoryCategoryDescription, link }) => {

    return (
        <div className="o-uao-repository-category-card">

            <Link to={link} className="o-uao-repository-category-link">

                <div className="o-uao-repository-category-title">
                    <CategoryTitle uaoRepositoryCategoryTitle={uaoRepositoryCategoryTitle} />
                </div>

                <div className="o-uao-repository-image-category-card">
                    <CategoryImage src={src} />
                </div>

                <div className="o-uao-repository-category-description">
                    <CategoryDescription uaoRepositoryCategoryDescription={uaoRepositoryCategoryDescription} />
                </div>

            </Link>

        </div>
    );
}
export default CategoryCards;