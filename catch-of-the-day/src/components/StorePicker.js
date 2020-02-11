import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    //Old way of binding functions below
    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }

    myInput = React.createRef();
    //New way of binding functions below using an arrow function
    goToStore = (event) => {
        //1. Stop from from submitting
        event.preventDefault();
        //2. get text from that input
        const storeName = this.myInput.current.value;
        //3. change page to /store/whatever-they-entered
        this.props.history.push(`/store/${storeName}`)
    }
    
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter a store</h2>
                <input 
                type="text" 
                ref={this.myInput}
                required placeholder="Store Name" 
                defaultValue={getFunName()} />
                <button type="submit">Visit Store -> </button>
            </form>
        ) 
    }
}

export default StorePicker;