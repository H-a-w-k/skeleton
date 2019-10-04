// Must be required before react and react dom!
import "react-hot-loader";
import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { hot } from "react-hot-loader/root";

const HotApp = hot(App);

ReactDom.render(<HotApp />, document.getElementById("main-id"));
