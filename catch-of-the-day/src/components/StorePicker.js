import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  goToStore(evt){
    //first grab the text from the input box
    // second we're going to transition from / to /store/:storeId
    evt.preventDefault();
    this.context.router.transitionTo(`/store/${this.storeInput.value}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={(e) => {this.goToStore(e)}}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
        <button type="submit">Visit Store -></button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object,
}

export default StorePicker;