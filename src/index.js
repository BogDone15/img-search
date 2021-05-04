import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import Router from "./Router";

const rootElement = document.getElementById("root");
ReactDOM.render(<Router /> ,rootElement);