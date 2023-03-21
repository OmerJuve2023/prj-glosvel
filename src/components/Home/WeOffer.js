import React from "react";
import "../../styles/WeOfferStyles.css";

const WeOffer = () => {
    return (
        <section>
            <div className="section-heading">
                <h3>Características</h3>
            </div>
            <div className="we_offer">
                <div className="bus_demo_photo"></div>
                <div>
                    <div>
                        <h4>¿Por qué Glosvel ?</h4>
                        <h5>Desde 2018, Glosvel quiere revolucionar la industria de viajes. ¿Boletos online en Huacho
                            para viajar?
                            Nadie lo estaba haciendo. Hasta que lo hicimos..</h5>
                        <p>Nuestro nuevo servicio de venta de boletas de buses online ha recibido excelentes críticas
                            por parte de nuestros usuarios. La plataforma es muy fácil de usar y ofrece una forma rápida
                            y segura de comprar boletas de bus desde la comodidad de tu hogar. </p>
                        <p>
                            Estamos muy contentos de
                            poder ofrecer un servicio de alta calidad que ahorra tiempo y esfuerzo a nuestros
                            usuarios.
                        </p>

                    </div>
                    <div className="features-boxes">
                        <div className="features-box">
                            <i className="fa-duotone"></i>
                            <div className="offer_description">
                                <h5 className={"text-white"}>CCTV</h5>
                                <p>Su seguridad es nuestra responsabilidad</p>
                            </div>
                        </div>
                        <div className="features-box">
                            <i className="fa-duotone fa-plug-circle-plus"></i>
                            <div className="offer_description">
                                <h5 className={"text-white"}>Punto de cargador</h5>
                                <p>Punto de cargador móvil disponible cerca de nuestros asientos</p>
                            </div>
                        </div>
                        <div className="features-box">
                            <i className="fa-duotone fa-tv"></i>
                            <div className="offer_description">
                                <h5 className={"text-white"}>Television</h5>
                                <p>Últimas películas, canciones a pedido del cliente</p>
                            </div>
                        </div>
                        <div className="features-box">
                            <i className="fa-duotone fa-blanket"></i>
                            <div className="offer_description">
                                <h5 className={"text-white"}>Manta</h5>
                                <p>Almohadas y mantas ordenadas y limpias</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default WeOffer;