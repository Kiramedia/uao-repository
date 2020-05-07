import React from "react";
import "./CategoryDescription.css";

const CategoryDescription = ({uaoRepositoryCategoryDescription}) => {
    //DATA BINDING
    return (
        <div className="o-uao-repository-category-description">
            <p>{uaoRepositoryCategoryDescription}</p>
        </div>
    );
}
export default CategoryDescription;