import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	myInput = React.createRef();
	goToStore = event => {
		// 1. stop the form from submitting
		event.preventDefault();
		// 2. get the text from that input
		const storeName = this.myInput.value.value;
		// 3. change the page to /store/whatever-they-entered
		this.props.history.push(`/store/${storeName}`)
	}
	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
			{/*This is a store picker!!*/}
				<h2>Please Enter a Store</h2>
				<input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()}/>
				<button type="submit">Visit Store -></button>
			</form>
		)		
	}
}

export default StorePicker;