import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

function MainFilter() {

    const [salida, setSalida] = useState("");
    const [llegada, setLlegada] = useState("");
    const [fechaSalida, setFechaSalida] = useState("");
    const [fechaRetorno, setFechaRetorno] = useState("");
    const navigate = useNavigate();

    const compra = {
        salida: salida,
        llegada: llegada,
        fechaSalida: fechaSalida,
        fechaRetorno: fechaRetorno,
    };

    const handleSalida = (event) => {
        setSalida(event.target.value);
    }
    const handleLlegada = (event) => {
        setLlegada(event.target.value);
    }
    const handFechaSalida = (event) => {
        setFechaSalida(event.target.value);
    }
    const handFechaRetorno = (event) => {
        setFechaRetorno(event.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const jsonCompra = JSON.stringify(compra);
        localStorage.setItem("compra", jsonCompra);
        navigate("/Informacion");

    }
    return (
        <div className="container-mainFilter">
            <br/>
            <form className={"mx-5"}>
                <div className="row">
                    <div className="col-sm-6 col-md-3 form-group select-field">
                        <label className={"mb-2"} htmlFor="opcion1"><b className={"text-danger"}>Salir
                            desde:</b></label>
                        <select id="opcion1"
                                className="form-control form-control-lg text-muted"
                                onChange={handleSalida}
                                value={salida}>
                            <option>Huacho</option>
                            <option>Barranca</option>
                            <option>Chancay</option>
                        </select>
                    </div>
                    <div className="col-sm-6 col-md-3 form-group select-field">
                        <label className={"mb-2"} htmlFor="opcion2"><b className={"text-danger"}>LLegar
                            hacia:</b></label>
                        <select id="opcion2"
                                className="form-control form-control-lg text-muted"
                                value={llegada}
                                onChange={handleLlegada}>
                            <option>Lima (Plaza Norte)</option>
                            <option>Huaral</option>
                            <option>Chancay</option>
                            <option>Barranca</option>
                        </select>
                    </div>
                    <div className="col-sm-6 col-md-3 form-group input-field">
                        <label className={"mb-2"}
                               htmlFor="fecha1"><b className={"text-danger"}>Fecha de
                            salida:</b></label>
                        <input type="date"
                               value={fechaSalida}
                               onChange={handFechaSalida}
                               className="form-control form-control-lg text-muted"/>
                    </div>
                    <div className="col-sm-6 col-md-3 form-group input-field">
                        <label className={"mb-2"}
                               htmlFor="fecha2"><b className={"text-danger"}>Fecha de
                            retorno (opcional):</b></label>
                        <input type="date"
                               className="form-control form-control-lg text-muted"
                               onChange={handFechaRetorno}
                               value={fechaRetorno}/>
                    </div>
                </div>
                <br/>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="submit"
                            className="btn btn-danger btn-lg btn-block w-100 h-100"
                            onClick={handleSubmit}>Buscar
                    </button>
                </div>
                <br/>
            </form>
        </div>

    );
}

export default MainFilter;