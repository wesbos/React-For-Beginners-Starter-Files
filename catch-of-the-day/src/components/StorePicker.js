import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  render() {
    return (
      //anywhere else outside of jsx syntax comments can be entered the normal
      //way.Like here
      <form className="store-selector">
        {/*this is the format to enter comments in jsx*/}
        <h2>Please enter a store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} />
        <button type="Submit">Visit Store </button>
      </form>
    )
  }

}


export default StorePicker;
