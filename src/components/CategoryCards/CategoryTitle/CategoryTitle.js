import React from "react";
import "./CategoryTitle.css";

const CategoryTitle = ({uaoRepositoryCategoryTitle}) => {

    //DATA BINDING
    return (
        <div>
            <p className="o-uao-repository-category-title">{uaoRepositoryCategoryTitle}</p>
        </div>
        
    );
}
export default CategoryTitle;