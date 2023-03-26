import HeaderOne from "../Home/HeaderOne";
import React, {useState} from "react";
import Footer from "../Home/Footer";
import "../../styles/InformacionStyles.css";
import {useNavigate} from "react-router-dom";

export default function Informacion() {
    const jsonCompra = localStorage.getItem("compra");
    const compra = JSON.parse(jsonCompra);
    const navigate = useNavigate();
    const [buss, setBuss] = useState("");

    const compra2 = {
        salida: compra.salida,
        llegada: compra.llegada,
        fechaSalida: compra.fechaSalida,
        fechaRetorno: compra.fechaRetorno,
        buss: buss
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setBuss("Zbuss");
        const compras = JSON.stringify(compra2);
        localStorage.setItem("compra2", compras);
        navigate("/pago");
    }

    return (
        <div>
            <header className={"p-3 bg-dark text-white py-0 mb-4"}>
                <HeaderOne/>
            </header>
            <div className="container">
                <form>
                    <div className="form-group mb-3">
                        <div className={"container container-fluid"}>
                            <h2>Seleccione una de las opciones: </h2>
                            <div className={"rounded-3 p-3 bg-light mb-3"}>
                                <div className={"row "}>
                                    <div className={"col-6 h5"}>Empresa ZBuss</div>
                                    <div className={"col-6 text-end"}><b> S./ 20.00</b></div>
                                    <div className={"col-6 text-end"}>2:00 pm</div>
                                    <div className={"col-6 text-start"}>salida</div>
                                    <div className={"col-6 text-end"}>4:00 pm</div>
                                    <div className={"col-6 text-start"}>llegada</div>
                                    <div className={"col-6"}>2 horas</div>
                                    <div className={"col-6 text-end"}>
                                        <button className={"btn btn-danger"}
                                                type={"submit"}
                                                onClick={handleSubmit}>Seleccionar
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={"rounded-3 p-3 bg-light mb-3"}>
                                <div className={"row mb-4"}>
                                    <div className={"col-6 h5"}>Empresa San Martín de Porres</div>
                                    <div className={"col-6 text-end"}><b> S./ 20.00</b></div>
                                    <div className={"col-6 text-end"}>2:00 pm</div>
                                    <div className={"col-6 text-start"}>salida</div>
                                    <div className={"col-6 text-end"}>4:00 pm</div>
                                    <div className={"col-6 text-start"}>llegada</div>
                                    <div className={"col-6"}>2 horas</div>
                                    <div className={"col-6 text-end"}>
                                        <button className={"btn btn-danger"}
                                                type={"submit"}
                                                onClick={handleSubmit}>Seleccionar
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={"rounded-3 p-3 bg-light"}>
                                <div className={"row mb-4"}>
                                    <div className={"col-6 h5"}>Empresa Paramonga</div>
                                    <div className={"col-6 text-end"}><b> S./ 20.00</b></div>
                                    <div className={"col-6 text-end"}>2:00 pm</div>
                                    <div className={"col-6 text-start"}>salida</div>
                                    <div className={"col-6 text-end"}>4:00 pm</div>
                                    <div className={"col-6 text-start"}>llegada</div>
                                    <div className={"col-6"}>2 horas</div>
                                    <div className={"col-6 text-end"}>
                                        <button className={"btn btn-danger"}
                                                type={"submit"}
                                                onClick={handleSubmit}>Seleccionar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>


            <Footer/>
        </div>
    );
}