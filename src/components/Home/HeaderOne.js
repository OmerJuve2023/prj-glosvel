import {useEffect, useState} from "react";

const HeaderOne = () => {

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 0);
        return function cleanup() {
            clearInterval(timer);
        };
    });
    const [date, setDate] = useState(new Date());
    return (
        <div className={"headerOne my-0"}>
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <div className={"text-start mb-0"}>
                        <li><p
                            className="nav-link px-2 text-white text-center mb-0"><b>{date.toLocaleDateString()}</b></p>
                            <p className={"text-decoration-none text-center text-white mb-0"}>{date.toLocaleTimeString()}</p>
                        </li>

                    </div>
                </div>
                <div className="text-end mb-0">
                    <div className={"mb-0"}>
                        <p className="text-decoration-none text-white mb-0"><b> Rastrear Envío | Rastrear reserva</b>
                        </p>
                        <p className="text-decoration-none text-white text-center mb-0"><b>+51 - 930 829 173</b></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HeaderOne;