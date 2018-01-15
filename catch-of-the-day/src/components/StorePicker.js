import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  goToStore(event) {
    event.preventDefault();
    console.log('You Changed the URL');
    // first grab the text from the box
    const storeId = this.storeInput.value;
    // second we're going to transition from / to /store/:storeId
    this.props.history.push(`/store/${storeId}`);
  }

  render() {
    // Any where else
    return (
      <form className="store-selector" onSubmit={e => this.goToStore(e)}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
          ref={input => {
            this.storeInput = input;
          }}
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
