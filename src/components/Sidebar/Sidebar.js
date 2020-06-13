import React, { Component, createContext, useState } from "react";
import BurgerMenu from "react-burger-menu";
import MenuWrap from "./MenuWrap";
import "@fortawesome/react-fontawesome";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { AppContext } from "../../libs/contextLib";

export default function Sidebar() {
  const [currentMenu, setcurrentMenu] = useState("elastic");
  const [side, setSide] = useState("left");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const authenticated = React.useContext(AppContext);
  function handleLogout() {
    authenticated.userHasAuthenticated(false);
  }
  function getItems() {
    let items = [
      <h1 key="header">
        <i className="fa fa-contao " />
        oncEng App
      </h1>,
      <div>
        {authenticated.isAuthenticated ? (
          <Link to="/">
            <button
              key="0"
              onClick={handleLogout}
              className="button-text bm-button-logout"
            >
              Log Out
            </button>
          </Link>
        ) : (
          <div>
            <Link to="/signup">
              <button key="1" className="button-text bm-button-signup">
                Sign up
              </button>
            </Link>

            <Link to="/login">
              <button key="2" className="button-text bm-button-logout" href="">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>,
    ];
    return items;
  }
  function getMenu() {
    let Menu = BurgerMenu[currentMenu];

    return (
      <MenuWrap wait={20} side={side}>
        <Menu
          id={currentMenu}
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          right={side === "right"}
        >
          {getItems()}
        </Menu>
      </MenuWrap>
    );
  }
  return (
    <div id="outer-container" style={{ height: "100%" }}>
      {getMenu()}
      <main id="page-wrap"></main>
    </div>
  );
}
