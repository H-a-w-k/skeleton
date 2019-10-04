// Must be required before react and react dom!
import "react-hot-loader";
import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { hot } from "react-hot-loader/root";
import "bootstrap";
import "bootstrap/scss/bootstrap.scss";

let HotApp = App;
if (module.hot) {
  // If devserver is hot, we wrap it
  HotApp = hot(App);
}

ReactDom.render(<HotApp />, document.getElementById("main-id"));
