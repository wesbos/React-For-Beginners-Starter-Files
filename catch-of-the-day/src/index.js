// let's go! 

// this first line required in every file
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';


import './css/style.css';

// import components
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';


const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={StorePicker} />
				<Match exactly pattern="/store/:storeId" component={App} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}

render(<Root/>, document.querySelector('#main'));
