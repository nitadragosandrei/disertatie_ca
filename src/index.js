import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Spreadsheet from './components/Spreadsheet/Spreadsheet';
import * as serviceWorker from './serviceWorker';
import Sidebar from './components/Sidebar/Sidebar';


ReactDOM.render(
  <React.StrictMode>
    <Sidebar />,
    <Spreadsheet />

  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
