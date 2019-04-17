import React from 'react';
import { getFunName } from '../helpers';
import {Redirect} from 'react-router-dom';

export default class StorePicker extends React.Component{
  myInput = React.createRef();

  goToStore = event => {
    //stop the form from submiting
    event.preventDefault();
    //get the text from the input
    const storeName = this.myInput.current.value;
    //console.log(storeName);
    //change the page to /store/whatever was entered
    this.props.history.push(`/store/${storeName}`);
  }

  render(){
    return (
    <form className="store-selector" onSubmit={this.goToStore}>
      <h2>Please enter a store</h2>
      <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={this.myInput} />
      <button type="submit">Visit Store</button>
    </form>
    )
  }
}
