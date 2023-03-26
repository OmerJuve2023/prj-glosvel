import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import Informacion from "./components/compra/informacion";
import Pago from "./components/compra/pago";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/informacion"} element={<Informacion/>}/>
                    <Route path={"/pago"} element={<Pago/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
