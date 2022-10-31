import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

let container = (
    <div style={{ border: "3px solid red" }}>
        <h2>Hola Titulo</h2>
        <div>Cuerpo del mensaje</div>
        <div>
            <h4>Footer del mensaje</h4>
        </div>
    </div>
);

let titleElement = React.createElement("h2", {}, "Hola Titulo");
let bodyElement = React.createElement("div", {}, "Cuerpo del mensaje");
let footerElement = React.createElement(
    "div",
    {},
    React.createElement("h4", {}, "Footer del mensaje")
);

let container2 = React.createElement(
    "div",
    {
        style: { border: "3px solid blue" },
    },
    [titleElement, bodyElement, footerElement]
);

root.render(
    <div>
        {container}
        {container2}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </div>
);
// JSX -> Combina JS con XML (HTML), siempre que escriba XML
// debo de generar un solo padre del XML escrito.

// function formatName(user) {
//     return user.firstName + " " + user.lastName;
// }

// function getSaludo(user) {
//     if (user) {
//         return <h1>Hello, {formatName(user)}!</h1>;
//     }
//     return <h1>Hello, Stranger.</h1>;
// }

// const user = {
//     firstName: "Harper",
//     lastName: "Perez",
// };

// const element = <h1>Hi , {getSaludo(user)}!</h1>;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);

reportWebVitals();
