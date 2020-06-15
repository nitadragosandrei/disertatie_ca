import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import Spreadsheet from "./components/Spreadsheet/Spreadsheet";
import { AppContext } from "./libs/contextLib";
import Signup from "./components/Signup/signup";
import PushForm from "./components/PushForm/PushForm";
import Draggable from "react-draggable";

export default function Routes() {
  const authenticated = React.useContext(AppContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Sidebar></Sidebar>
          <Spreadsheet></Spreadsheet>
          <Draggable>
            <div>
              <PushForm />
            </div>
          </Draggable>
        </Route>
        <Route exact path="/signup">
          <Sidebar></Sidebar>
          <Signup />
        </Route>
        <Route exact path="/login">
          <Sidebar></Sidebar>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
