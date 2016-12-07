import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
    
    // constructor(){
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }
    
    goToStore(event){
        event.preventDefault();
        console.log('You changed the URL');
        // first grab the text from the box
        console.log(this.storeInput.value);
        // second transition to store
    }

    render(){
        return(
            <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
                <h2>Please enter a store</h2>
                <input type="text" required placeholder="Store Name" 
                    defaultValue={ getFunName() } ref={(input) => {this.storeInput = input}} />
                <button type="submit">Visit Store →</button>
            </form>
        )
    }
}

export default StorePicker;