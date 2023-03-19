import Logo from "../../assets/logo/logotipo 5.0.svg"

const HeaderTwo = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light text-black">
            <div className="container-fluid">
                <div className="d-flex justify-content-between w-100">
                    <div>
                        <img className={" mx-2 imgLogito"} src={Logo}/>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contáctanos</a>
                            </li>
                            <li className={"nav-item"}>
                                <a className="nav-link" href="#">Rastrear Envío</a>
                            </li>
                            <li className={"nav-item"}>
                                <a className="nav-link" href="#">Acerca de</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default HeaderTwo;