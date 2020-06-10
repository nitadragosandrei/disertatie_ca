import React from "react";
import { Route, Switch, BrowserRouter as Router  } from "react-router-dom";
import Login from "./components/Login/Login";
import Sidebar from './components/Sidebar/Sidebar';
import Spreadsheet from './components/Spreadsheet/Spreadsheet';

export default function Routes() {
  return (
    <Router>
    <Switch>
      
      <Route exact path="/">
          
        <Sidebar></Sidebar>
        <Spreadsheet></Spreadsheet>
      </Route>
      <Route exact path="/login">
        
        <Sidebar></Sidebar>
        <Login/>
      </Route>
    </Switch>
    </Router>
  );
}
