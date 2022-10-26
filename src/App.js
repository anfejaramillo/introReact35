import logoCargado from "./logo.svg";
import "./css/App.css";
import Nosotros from "./components/Nosotros";
import { Ruta1, Ruta2 } from "./components/Rutas";
import Home from "./components/Home";
import { Link, Route, Routes } from "react-router-dom";

function App() {
    //codigo js
    let numRandom = Math.random();
    return (
        <div className="App">
            {numRandom}
            <ul>
                <li>
                    <Link to="/">Ir a Home</Link>
                </li>
                <li>
                    <Link to="/ruta1">Ir a Ruta 1</Link>
                </li>
                <li>
                    <Link to="/ruta2">Ir a Ruta 2</Link>
                </li>
                <li>
                    <Link to="/nosotros">Ir a Nosotros</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/ruta1" element={<Ruta1 />} />
                <Route path="/ruta2" element={<Ruta2 />} />
                <Route path="/" element={<Home logo={logoCargado} />} />
            </Routes>
        </div>
    );
}

export default App;
