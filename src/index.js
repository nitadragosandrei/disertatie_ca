import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Spreadsheet from "./components/Spreadsheet/Spreadsheet";
import * as serviceWorker from "./serviceWorker";
import Sidebar from "./components/Sidebar/Sidebar";
import Draggable from "react-draggable";
import Login from "./components/Login/Login";
import { Amplify } from "aws-amplify";
import config from "./config";
import { AppContext } from "./libs/contextLib";
import Routes from "./Routes";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  },
});

ReactDOM.render(<App></App>, document.getElementById("root"));

serviceWorker.unregister();
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
