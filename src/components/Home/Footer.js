import React from "react";
import {Link} from "react-router-dom";
import AppStore from "./AppStore";
import Logo from "../../assets/logo/logotipo 5.0.svg"
import "../../styles/FooterStyles.css";

const Footer = () => {
    return (

        <div>
            <AppStore/>
            <footer>
                <div className="footer_sections">
                    <div className="company_info">
                        {/*<img src={Logo} width="180" alt=""/>*/}
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
                    <div>
                        <div className="footer_heading">
                            <h5 className="text-white">Enlaces útiles</h5>
                        </div>
                        <Link to={"/"} className="footer_links">
                            Seguimiento del envío
                        </Link>
                        <br/>
                        <Link to={"/"} className="footer_links">

                            Seguimiento del autobús
                        </Link>
                        <br/>
                        <Link to={"/"} className="footer_links">
                            Nuestros autobuses
                        </Link>
                        <br/>
                        <Link to={"/"} className="footer_links">
                            Inicio de sesión del agente
                        </Link>
                        <br/>
                        <Link to={"/"} className="footer_links">
                            Panel de usuario
                        </Link>
                        <br/>

                        <br/>
                    </div>
                    <div className="footer_links">
                        <div className="footer_heading">
                            <h5 className="text-white">Enlaces útiles</h5>
                        </div>
                        <Link to={"/"} className="footer_links">
                            Consulte nuestra guía de ayuda y seguridad de autobuses
                        </Link>

                        <br/>
                    </div>
                    <div className="footer_links">
                        <div className="footer_heading">
                            <h5 className="text-white">Links importantess</h5>
                        </div>
                        <Link to={"/"} className="footer_links">
                            Política de cookies
                        </Link>
                        <br/>
                        <Link to={"/"} className="footer_links">

                            política de privacidad
                        </Link>
                        <br/>
                        <Link to={"/"} className="footer_links">
                            Términos y condiciones
                        </Link>
                        <br/>
                        <Link to={"/"} className="footer_links">
                            Contáctenos
                        </Link>
                        <br/>
                        <Link to={"/"} className="footer_links">
                            Reclamos
                        </Link>
                        <br/>
                    </div>
                    <div className="footer_newsletter text-center">
                        <div className="pb-4">Encuéntranos</div>
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
                        {/*<div className="container">
                            <ToastContainer />
                        </div>*/}

                    </div>
                </div>

            </footer>
        </div>
    );
}
export default Footer;