import React from "react";
import "./CategoryImage.css";

const CategoryImage = ({ src }) => (
        <img className="o-uao-repository-image-category-card" src={src} alt="Imagen de las categorías"></img>
);

export default CategoryImage;