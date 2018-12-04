import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './StorePicker';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={StorePicker} />
			<Route path="/store/:storeId" component={App} /> 
		</Switch>
	</BrowserRouter>
)

export default Router;