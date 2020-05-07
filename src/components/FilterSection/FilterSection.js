import React from "react";
import "./FilterSection.css";

const FilterSection = ({ children }) => {

    //DATA BINDING
    return (
        <div className="o-uao-repository-filter-section">
            {children}
        </div>
    );
}

export default FilterSection;