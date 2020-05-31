import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Spreadsheet from './components/Spreadsheet/Spreadsheet';
import * as serviceWorker from './serviceWorker';
import Sidebar from './components/Sidebar/Sidebar';

ReactDOM.render(
  <div>
    <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />
    <Spreadsheet />
  </div>,

  document.getElementById('root')
);
// function App() {
//   return (
//     <div id="App">
//       <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

//       <div id="page-wrap">
//         <h1>Cool Restaurant 🍔🍕</h1>
//         <h2>Check out our offerings in the sidebar!</h2>
//       </div>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
