import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import Spreadsheet from "./components/Spreadsheet/Spreadsheet";
import { AppContext } from "./libs/contextLib";
import Signup from "./components/Signup/signup";
import PushForm from "./components/PushForm/PushForm";
import Draggable from "react-draggable";
import { getItems } from "./api/index";
import CustomPaginationActionsTable from "./components/PullTable/PullTable";
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

          <Draggable>
            <div>
              <CustomPaginationActionsTable></CustomPaginationActionsTable>
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
        <Route exact path="/tables">
          <Sidebar></Sidebar>
          <Draggable>
            <div>
              <PushForm />
            </div>
          </Draggable>

          <Draggable>
            <div>
              <CustomPaginationActionsTable></CustomPaginationActionsTable>
            </div>
          </Draggable>
        </Route>
      </Switch>
    </Router>
  );
}
