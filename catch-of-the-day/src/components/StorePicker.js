import React from "react";
import {getFunName} from "../helpers";


class StorePicker extends React.Component{
	//alternative way to bind this to react component
	// constructor(){
	// 	super();
	// 	this.goToStore = this.goToStore.bind(this);
	// }

	myInput = React.createRef();
	
	//use this syntax to reference "this" in a custom method
	goToStore = (event) => {
		
		//1. Stop Form From Submitting
		event.preventDefault();
		//2. Get Text From The Input;
		const storeName = this.myInput.current.value;
		//3. Change The Page to /store/whatever-they-entered --> PUSH STATE TO CHANGE URL WITHOUT LOSING ANYTHING IN MEMORY
		this.props.history.push(`/store/${storeName}`);


	}  
	render(){
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please Enter A Store</h2>
				<input type="text"  ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()}/>
				<button type="submit"> Visit Store </button> 
			</form>
		)
	}
}
 
export default StorePicker;