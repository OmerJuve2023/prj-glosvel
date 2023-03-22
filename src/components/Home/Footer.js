import React from "react";
import Logo from "../../assets/logo/logotipo 5.0.svg"
import "../../styles/FooterStyles.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container align-items-center">
                <div className="row">

                    <div className="footer-col">
                        <h4>Enlaces útiles</h4>
                        <ul>
                            <li><a href="#">Seguimiento del envío</a></li>
                            <li><a href="#">Seguimiento del autobús</a></li>
                            <li><a href="#">Nuestros autobuses</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Links importantes</h4>
                        <ul>
                            <li><a href="#"> Consulte nuestra guía de ayuda y seguridad de autobuses</a></li>

                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Política</h4>
                        <ul>
                            <li><a href="#">Política de cookies</a></li>
                            <li><a href="#">Política de privacidad</a></li>
                            <li><a href="#">Términos y condiciones</a></li>
                            <li><a href="#">Contáctenos</a></li>
                        </ul>
                    </div>
                    <div className="">
                        <div>
                            <img className={" mx-2 imgLogito "} src={Logo}/>
                        </div>
                    </div>
                    <div className="footer_bottom_poster text-center text-white h5">
                        <div>Todos los derechos reservados @2023</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;