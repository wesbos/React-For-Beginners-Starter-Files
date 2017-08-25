import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // constructor () {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }



  goToStore(e) {
    e.preventDefault();
    // Grab text from box
    const storeToVisit = this.storeInput.value;
    // Transition to store/:storeId
    this.context.router.transitionTo(`/store/${storeToVisit}`)
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        { /* PS: This comment can't go above the form opening tag. Dang JSX. */ }
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder='Store Name' defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>
        <button type="submit">Visit Store -></button>
      </form>
    )
  }
}

// Surface the router from the parent with ContextTypes
StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
