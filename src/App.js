import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import * as serviceWorker from "./serviceWorker";
import { Amplify } from "aws-amplify";
import config from "./config";
import { AppContext } from "./libs/contextLib";
import Routes from "./Routes";
import {Auth} from "aws-amplify";

function App() {
  const [isAuthenticated , userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  useEffect(() => {
    onLoad();
  }, []);
  
  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  
    setIsAuthenticating(false);
  }
  return (
    <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
      <Routes />
    </AppContext.Provider>
  );
}

export default App;
