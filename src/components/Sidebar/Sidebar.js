import React, { Component } from 'react';
import BurgerMenu from 'react-burger-menu';
import MenuWrap from './MenuWrap';
import './Sidebar.css';

class Sidebar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentMenu: 'slide',
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
      <a key="0" href=""><i className="fa fa-fw fa-star-o" /><span className="button-text">Favorites</span></a>,
      <a key="1" href=""><i className="fa fa-fw fa-bell-o" /><span>Alerts</span></a>,
      <a key="2" href=""><i className="fa fa-fw fa-envelope-o" /><span>Messages</span></a>,
      <a key="3" href=""><i className="fa fa-fw fa-comment-o" /><span>Comments</span></a>,
      <a key="4" href=""><i className="fa fa-fw fa-bar-chart-o" /><span>Analytics</span></a>,
      <a key="5" href=""><i className="fa fa-fw fa-newspaper-o" /><span>Reading List</span></a>
    ];

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