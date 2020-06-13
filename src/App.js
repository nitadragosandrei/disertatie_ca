import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import * as serviceWorker from "./serviceWorker";
import { Amplify } from "aws-amplify";
import config from "./config";
import { AppContext } from "./libs/contextLib";
import Routes from "./Routes";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  return (
    <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
      <Routes />
      {console.log("App" + isAuthenticated)}
    </AppContext.Provider>
  );
}

export default App;
