import React from "react";

function clickBoton() {
    alert("Boton Clikeado");
}

function changeText(e) {
    console.log(e.target.value);
}

function Ruta1(props) {
    console.log(props);
    return (
        <div>
            <h2>Ruta 1, Bienvenidos!</h2>
            <input type={"button"} value={"Clikeame"} onClick={clickBoton} />
            Usuario
            <input className="m-3" type={"text"} onChange={changeText} />
            Contrasena
            <input className="m-3" type={"text"} onChange={changeText} />
        </div>
    );
}

function Ruta2() {
    return (
        <div>
            <h2>Ruta 2, Bienvenidos!</h2>
            Este es un componente de tipo funcion.
        </div>
    );

    React.createElement("div", {}, [
        React.createElement("h2", {}, "Ruta 2, Bienvenidos!"),
        React.createElement("", {}, "Este es un componente de tipo funcion."),
    ]);
}

export { Ruta1, Ruta2 };
