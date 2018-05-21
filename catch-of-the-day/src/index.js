import React from 'react';
import {render} from 'react-dom';
// import StorePicker from './components/StorePicker';
// import App from './components/App';
// store picker and app are used via Router
import Router from "./components/Router";
import "./css/style.css";

render(<Router />, document.getElementById('main'))