import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import Spreadsheet from "./components/Spreadsheet/Spreadsheet";
import { AppContext } from "./libs/contextLib";

export default function Routes() {
  const authenticated = React.useContext(AppContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {console.log(authenticated)}
          <Sidebar></Sidebar>
          <Spreadsheet></Spreadsheet>
        </Route>
        <Route exact path="/login">
          <Sidebar></Sidebar>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
