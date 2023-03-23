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
    const handleSubmit1 = (event) => {
        event.preventDefault();
        setBuss("San Martin de Porres");
        const compritas = JSON.stringify(compra2);
        localStorage.setItem("compra2", compritas);
        navigate("/pago");
    }
    const handleSubmit2 = (event) => {
        event.preventDefault();
        setBuss("Paramonga");
        const comp = JSON.stringify(compra2);
        localStorage.setItem("compra2", comp);
        navigate("/pago");
    }
    return (
        <div>
            <header className={"p-3 bg-dark text-white py-0 mb-4"}>
                <HeaderOne/>
            </header>
            <div className={"container"}>
                <h2>Seleccione una de las opciones: </h2>
                <table className={"rounded-3 p-3 bg-light"}>
                    <thead>
                    <tr>
                        <th>Empresa ZBuss</th>
                        <th>&nbsp;</th>
                        <th className={"text-end"}> S 92</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className={"text-end"}>2:00 pm</td>
                        <td className={""}>salida</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td className={"text-end"}>4:00 pm</td>
                        <td>llegada</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>2 horas</td>
                        <td>&nbsp;</td>
                        <td className={"text-end"}>
                            <button className={"btn btn-danger"}
                                    type={"submit"}
                                    onClick={handleSubmit}>Seleccionar
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <br/>
                <table className={"rounded-3 p-3 bg-light"}>
                    <thead>
                    <tr>
                        <th>Empresa San Martin de Porres</th>
                        <th>&nbsp;</th>
                        <th className={"text-end"}> S 92</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className={"text-end"}>2:00 pm</td>
                        <td className={""}>salida</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td className={"text-end"}>4:00 pm</td>
                        <td>llegada</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>2 horas</td>
                        <td>&nbsp;</td>
                        <td className={"text-end"}>
                            <button className={"btn btn-danger"}
                                    type={"submit"}
                                    onClick={handleSubmit1}>Seleccionar
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <br/>
                <table className={"rounded-3 p-3 bg-light"}>
                    <thead>
                    <tr>
                        <th>Empresa Paramonga</th>
                        <th>&nbsp;</th>
                        <th className={"text-end"}> S 92</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className={"text-end"}>2:00 pm</td>
                        <td className={""}>salida</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td className={"text-end"}>4:00 pm</td>
                        <td>llegada</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>2 horas</td>
                        <td>&nbsp;</td>
                        <td className={"text-end"}>
                            <button className={"btn btn-danger"}
                                    type={"submit"}
                                    onClick={handleSubmit2}>Seleccionar
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <br/>
            </div>
            <Footer/>
        </div>
    );
}