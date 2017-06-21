import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  //FOr this below to refer to the class StorePicker there are two methods.
  //1.
  /*constructor() {
  super(); creates a react component && extends the storepicker component by adding our methods
  this.goToStore = this.goToStore.bind(this);
  goToStore method and sets itself to its own self and then binds it to this which in the
  constructor is the StorePicker component.

}
  */
  //here we are creating a method
  goToStore(event) {
    event.preventDefault();
    console.log('You changed the URL');
    //grab text from box
    console.log(this.storeInput.value);
    // transition from home to store plus storeid
  }
  render() {
    return (
      //anywhere else outside of jsx syntax comments can be entered the normal
      //way.Like here
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        {/*this is the format to enter comments in jsx*/}
        <h2>Please enter a store</h2>
        <input type="text" required placeholder="Store Name"
          defaultValue={getFunName()} ref={(input) => { this.storeInput = input}}/>
        <button type="Submit">Visit Store </button>
      </form>
    )
    //comments
  }

}


export default StorePicker;
