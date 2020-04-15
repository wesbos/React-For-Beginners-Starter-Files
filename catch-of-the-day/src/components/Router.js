import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import StorePicker from "./StorePicker.js"
import App from "./App.js"
import NotFound from "./NotFound"

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StorePicker}/>
            <Route path="/store/:storeId" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>

);

export default Router;
