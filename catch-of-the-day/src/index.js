// let's go! 

// this first line required in every file
import React from 'react';
import { render } from 'react-dom';
import './css/style.css';

// import components
import App from './components/App';
import StorePicker from './components/StorePicker';


render(<App/>, document.querySelector('#main'));
