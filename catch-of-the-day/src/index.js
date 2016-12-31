import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import App from './components/App'
import { render } from 'react-dom';
import './css/style.css';


import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern='/' component={StorePicker}/>
                <Match exactly pattern='/store/:storeId' component={App}/>
                <Miss component={NotFound}/>
            </div>
        </BrowserRouter>

    ) 
}
// render (component, where in HTML it should be put)
render(<Root/>, document.querySelector('#main'));

// Routing if I;m on a store page, show me app component

