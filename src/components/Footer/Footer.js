import React, { Component } from 'react';
import './Footer.css';




class Footer extends Component {

    render() {
        return (

            <footer>
                <aside className="o-uao-footer-options-right">
                    <nav className="o-uao-links">
                        <a className="o-uao-link-1" href="https://uaovirtual.edu.co/">
                            <p>¿Qué es?</p>
                        </a>
                        <div className="uao-footer-right-divisor"></div>
                        <a className="o-uao-link-1" href="https://uaovirtual.edu.co/">
                            <p>Oferta académica</p>
                        </a>
                    </nav>
                    <nav className="uao-networks">
                        <a href="https://www.facebook.com/universidadautonomadeoccidente" target="_blank"  rel="noopener noreferrer">
                            <div className="uao-facebook"></div>
                        </a>
                        <a href="https://twitter.com/lauao" target="_blank"  rel="noopener noreferrer">
                            <div className="uao-twitter"></div>
                        </a>
                        <a href="https://www.youtube.com/user/autonomadeocc" target="_blank"  rel="noopener noreferrer">
                            <div className="uao-youtube"></div>
                        </a>
                    </nav>
                </aside>

                <div className="o-uao-footer-text-left">
                    <div className="legal-text block top-space text-footer-responsive">
                        <p>
                            <strong>Personería jurídica</strong>
                        </p>
                        <p>Res. No. 0618, de la Gobernación del Valle del Cauca, del 20 de febrero de 1970.</p>
                        <p>Universidad Autónoma de Occidente, Res. No. 2766, del Ministerio de Educación Nacional,</p>
                        <p>del 13 de noviembre de 2003.</p>

                    </div>

                    <div className="legal-text bottom-info top-space">
                        <div className="left-text block text-footer-responsive">
                            <p>
                                <strong>Acreditación Institucional de Alta Calidad</strong>, Res. No. 16740, del 24 de agosto de 2017, con vigencia </p>
                            <p>hasta el 2021.</p>
                            <div className="left-text block text-footer-responsive">
                                <p>
                                    <strong>Universidad Vigilada MinEducación.</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>

        );
    }
}

export default Footer;
