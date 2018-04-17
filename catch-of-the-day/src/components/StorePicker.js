import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends Component {
  constructor() {
    super();

    this.goToStore = this.goToStore.bind(this);
  }

  myInput = React.createRef();

  // goToStore = event => {
  //   event.preventDefault();

  //   const storeName = this.myInput.value.value;
  //   this.props.history.push(`/store/${storeName}`);
  // };

  goToStore(event) {
    event.preventDefault();

    const storeName = this.myInput.current.value;
    this.props.history.push(`/store/${storeName}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()} />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

StorePicker.propTypes = {
  history: PropTypes.object.isRequired,
};

export default StorePicker;
