import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import { styles } from "./styles.js";
import { App1 } from "./component/app.js"
import { App2 } from "./component/app2.js"

export let list = [];

render( < App1 / > , window.document.getElementById("app"));
render( < App2 / > , window.document.getElementById("container"));
