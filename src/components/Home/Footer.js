import React from "react";
import {Link} from "react-router-dom";
import AppStore from "./AppStore";
import Logo from "../../assets/logo/logotipo 5.0.svg"
import "../../styles/FooterStyles.css";
import {MDBCol, MDBContainer, MDBRow, MDBFooter} from "mdbreact";


const Footer = () => {
    return (

        /*<footer>
            <div className="footer_sections container">
                <div className="company_info">
                    <img src={Logo} width="180" alt=""/>
                    <p className={"text-white"}>
                        Glosvel ofrece los mejores autobuses de primera clase para viajes cortos y largos. Tenemos
                        los mejores clientes en la ciudad de Huacho.
                    </p>
                    <br/>
                    <Link className={"text-decoration-none text-white h5"}>Email Id: rafaelxdale@gmail.com</Link>
                    <p>
                        <Link className={"text-decoration-none text-white h5"} to={"/"}>Contacto : +51 - 932 583
                            958</Link>
                    </p>
                    <div className="location_map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1957.5286695476464!2d-77.59712219122065!3d-11.109104627718828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9106dfa2cd2be13d%3A0xb7811d6fa8780e26!2sTerminal%20Huacho!5e0!3m2!1ses!2spe!4v1679377069180!5m2!1ses!2spe"
                            width="600"
                            height="200"
                            loading="lazy"
                            title={"google map"}></iframe>
                    </div>
                </div>
                <ul>
                    <div className="footer_heading">
                        <h5 className="text-white">Enlaces útiles</h5>
                    </div>
                    <li to={"/"} className="text-decoration-none text-white">
                        Seguimiento del envío
                    </li>
                    <li to={"/"} className="text-decoration-none text-white">
                        Seguimiento del autobús
                    </li>

                    <li to={"/"} className="text-decoration-none text-white">
                        Nuestros autobuses
                    </li>
                </ul>
                <div>
                    <div className="footer_heading">
                        <h5 className="text-white">Enlaces útiles</h5>
                    </div>
                    <li to={"/"} className="text-decoration-none text-white">
                        Consulte nuestra guía de ayuda y seguridad de autobuses
                    </li>
                    <li to={"/"} className="text-decoration-none text-white">
                        Inicio de sesión del agente
                    </li>
                    <li to={"/"} className="text-decoration-none text-white">
                        Panel de usuario
                    </li>
                </div>
                <div className="footer_links">
                    <div className="footer_heading">
                        <h5 className="text-white">Links importantess</h5>
                    </div>
                    <li to={"/"} className="text-decoration-none text-white">
                        Política de cookies
                    </li>
                    <li to={"/"} className="text-decoration-none text-white">

                        política de privacidad
                    </li>
                    <li to={"/"} className="text-decoration-none text-white">
                        Términos y condiciones
                    </li>
                    <li to={"/"} className="text-decoration-none text-white">
                        Contáctenos
                    </li>
                    <li to={"/"} className="text-decoration-none text-white">
                        Reclamos
                    </li>
                </div>
                 <div className="footer_newsletter text-center">
                    <div className="pb-4">Encuéntranos</div>
                    <Link><i className="fa-brands fa-facebook font-20"></i> &nbsp;</Link>
                    <Link><i className="fa-brands fa-facebook font-20"></i> &nbsp;</Link>
                    <Link><i className="fa-brands fa-twitter font-20"></i> &nbsp;</Link>
                    <Link><i className="fa-brands fa-youtube font-20"></i> &nbsp;</Link>
                    <Link><i className="fa-brands fa-instagram font-20"></i> &nbsp;</Link>
                    <label className=" Newsletter_heading block mb-2">Mandar Info</label>
                    <input
                        type="email"
                        className="Filter_input"
                        placeholder="email"
                        required
                    />
                    <button className="Newsletter_button">Enviar</button>
                </div>
            </div>
            <div className="footer_bottom_poster text-center">
                <div>Todos los derechos reservados @2023</div>
            </div>
        </footer>*/
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
                    <div className="footer-col">
                        <div>
                            <img className={" mx-2 imgLogito "} src={Logo}/>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
export default Footer;