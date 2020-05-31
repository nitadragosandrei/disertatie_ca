import React, { Component } from 'react';
import BurgerMenu from 'react-burger-menu';
import MenuWrap from './MenuWrap';
import '@fortawesome/react-fontawesome'; 
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Sidebar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      currentMenu: 'elastic',
      side: 'left'
    };
  }

  changeMenu(menu) {
    this.setState({currentMenu: menu});
  }
  changeSide(side) {
    this.setState({side});
  }

  handleLogInClick = () => {
    if (this.state.isLoggedIn){
      //banuiesc ca aici logica log out
      console.log("LogOut");
    }
    //banuiesc ca aici logica log in
    else console.log("LogIn");
    
    this.setState(state => ({
      isLoggedIn : !state.isLoggedIn
    }));
  
 
  
  }

  getItems() {
    let items = [
      <h1 key= "header"><i className="fa fa-contao "/>oncEng App</h1>,
      <button key="0" className="button-text bm-button" href=""><i className="fa fa-fw fa-home" /><span >Home</span></button>,
      <button key="1" className="button-text bm-button" href=""><i className="fa fa-fw fa-bell-o" /><span>Alerts</span></button>,
      <button key="2" className="button-text bm-button" href=""><i className="fa fa-fw fa-envelope-o" /><span>Messages</span></button>,
      <button key="3" onClick={this.handleLogInClick} className="button-text bm-button-logout" href="">{ this.state.isLoggedIn ? <span>Logout</span> :<span>Log In</span>  }</button>
    ]
    return items;
  }

  getMenu() {
    let Menu = BurgerMenu[this.state.currentMenu];

    return (
      <MenuWrap wait={20} side={this.state.side}>
        <Menu id={this.state.currentMenu} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right={this.state.side === 'right'}>
          {this.getItems()}
        </Menu>
      </MenuWrap>
    );
  }

  render() {
    return (
      <div id="outer-container" style={{height: '100%'}}>
        {this.getMenu()}
         <main id="page-wrap">
        </main>
      </div>
    );
  }
}
export default Sidebar;