import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import StorePicker from "./StorePicker";
import App from "./App";
import NotFound from "./NotFound";


//stateless functional component
const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={StorePicker}/>
			<Route exact path="/store/:storeId" component={App}/>
			<Route exact component={NotFound}/>
		</Switch>
	</BrowserRouter>
);


export default Router;