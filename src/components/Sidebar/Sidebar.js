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

  getItems() {
    let items = [
      <h1><i class="fa fa-contao fa2x"/>oncEng App</h1>,
      <a key="0" className="button-text" href=""><i className="fa fa-fw fa-star-o" /><span >Favorites</span></a>,
      <a key="1" className="button-text" href=""><i className="fa fa-fw fa-bell-o" /><span>Alerts</span></a>,
      <a key="2" className="button-text" href=""><i className="fa fa-fw fa-envelope-o" /><span>Messages</span></a>]
    return items;
  }

  getMenu() {
    const Menu = BurgerMenu[this.state.currentMenu];

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