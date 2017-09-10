import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }
  goToStore(event) {
    event.preventDefault();
    console.log("Url changed");
    const storeId = this.storeInput.value;
    console.log(this.storeInput.value);
    this.context.router.transitionTo("/store/${storeId}")
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        <h2>Enter a store</h2>
        <input type="text" placeholder="Name..." defaultValue={getFunName()} ref= { (input) => { this.storeInput = input } }/>
        <button type="submit"> Visit Store</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}
export default StorePicker;
