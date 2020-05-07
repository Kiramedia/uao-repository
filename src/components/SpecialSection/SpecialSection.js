import React, { Component } from 'react';
import './SpecialSection.css';
import Paragraph from "../Actuators/ParagraphJ/ParagraphJ";
import Title from '../Actuators/TitleJ/TitleJ';
import ImageCircle from '../ImageCircle/ImageCircle';


class SpecialSection extends Component {
    constructor(props) {
        super(props);
        this.state = { title: props.title, data: props.paragraph, srcImage: props.srcImage };
    }

    render() {
        return (
            <div className="o-uao-repository-special-section-container">
                <div className="o-uao-repository-special-section white-text">
                    <div className="o-special-section-info">
                        <Title infoTitle={this.state.title} />
                        <Paragraph infoParagraph={this.state.data} />
                    </div>
                    <div className="o-special-section-img">
                        <ImageCircle src={this.state.srcImage} />
                    </div>
                </div>
            </div>

        );
    }
}

export default SpecialSection;