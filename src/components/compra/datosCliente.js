import React, {useState} from "react";
import {useNavigate} from "react-router-dom"

export default function DatosCliente() {
    const jsoCompra = localStorage.getItem("compra2");
    const compra = JSON.parse(jsoCompra);
    const [nombre, setNombre] = useState();
    const [apellidoMaterno, setApellidoMaterno] = useState();
    const [apellidoPaterno, setApellidoPaterno] = useState();
    const [DNI, setDNI] = useState();
    const [fechaNacimiento, setFechaNacimiento] = useState();
    const navigate = useNavigate();
    const usuario = {
        nombre: nombre,
        apellidoMaterno: apellidoMaterno,
        apellidoPaterno: apellidoPaterno,
        DNI: DNI,
        fechaNacimiento: fechaNacimiento
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const jsonUser = JSON.stringify(usuario);
        localStorage.setItem("usuario", jsonUser);
        navigate("/pago")
    }
    const handleNombre = (event) => {
        setNombre(event.target.value);
    }
    const handleApellidoMaterno = (event) => {
        setApellidoMaterno(event.target.value);
    }
    const handleApellidoPaterno = (event) => {
        setApellidoPaterno(event.target.value);
    }
    const handleDNI = (event) => {
        setDNI(event.target.value);
    }
    const handleFechaNacimiento = (event) => {
        setFechaNacimiento(event.target.value);
    }

    return (
        <div>

            <div className="container">
                <div className={""}>
                    <div>{compra.salida}</div>
                    <div>{compra.buss}</div>
                    <div>{compra.fechaSalida}</div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h2>Registro de usuario</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="nombres">Nombres:</label>
                                <input type="text"
                                       className="form-control"
                                       id="nombres"
                                       name="nombres"
                                       required
                                       value={nombre}
                                       onChange={handleNombre}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="apellido_paterno">Apellido paterno:</label>
                                <input type="text"
                                       className="form-control"
                                       id="apellido_paterno"
                                       name="apellido_paterno"
                                       required
                                       value={apellidoMaterno}
                                       onChange={handleApellidoMaterno}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="apellido_materno">Apellido materno:</label>
                                <input type="text"
                                       className="form-control"
                                       id="apellido_materno"
                                       name="apellido_materno"
                                       required
                                       value={apellidoPaterno}
                                       onChange={handleApellidoPaterno}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="dni">DNI:</label>
                                <input type="number"
                                       className="form-control"
                                       id="dni"
                                       name="dni"
                                       required
                                       value={DNI}
                                       onChange={handleDNI}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="fecha_nac">Fecha de nacimiento:</label>
                                <input type="date"
                                       className="form-control"
                                       id="fecha_nac"
                                       name="fecha_nac"
                                       required
                                       value={fechaNacimiento}
                                       onChange={handleFechaNacimiento}/>
                            </div>
                            <br/>
                            <button type="submit" className="btn btn-danger" onClick={handleSubmit}>Registrarse</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}