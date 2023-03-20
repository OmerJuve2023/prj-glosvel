import React from "react";

function MainFilter() {
    return (

        <div className="container-mainFilter">
            <br/>
            <form className={"mx-5"}>
                <div className="row">
                    <div className="col-sm-6 col-md-3 form-group select-field">
                        <label className={"mb-2"} htmlFor="opcion1"><b className={"text-danger"}>Salir
                            desde:</b></label>
                        <select id="opcion1" className="form-control form-control-lg text-muted">
                            <option value="1">Huacho</option>
                            <option value="2">Barranca</option>
                            <option value="3">Chancay</option>
                        </select>
                    </div>
                    <div className="col-sm-6 col-md-3 form-group select-field">
                        <label className={"mb-2"} htmlFor="opcion2"><b className={"text-danger"}>LLegar
                            hacia:</b></label>
                        <select id="opcion2" className="form-control form-control-lg text-muted">
                            <option value="1">Lima (Plaza Norte)</option>
                            <option value="2">Huaral</option>
                            <option value="3">Chancay</option>
                            <option value="3">Barranca</option>
                        </select>
                    </div>
                    <div className="col-sm-6 col-md-3 form-group input-field">
                        <label className={"mb-2"} htmlFor="fecha1"><b className={"text-danger"}>Fecha de
                            salida:</b></label>
                        <input type="date" id="fecha1" className="form-control form-control-lg text-muted"/>
                    </div>
                    <div className="col-sm-6 col-md-3 form-group input-field">
                        <label className={"mb-2"} htmlFor="fecha2"><b className={"text-danger"}>Fecha de
                            retorno (opcional):</b></label>
                        <input type="date" id="fecha2" className="form-control form-control-lg text-muted"/>
                    </div>
                </div>
                <br/>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="submit" className="btn btn-danger btn-lg btn-block w-100 h-100">Buscar</button>
                </div>
                <br/>
            </form>
        </div>


    );
}

export default MainFilter;