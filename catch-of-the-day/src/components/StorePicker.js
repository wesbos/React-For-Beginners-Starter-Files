import React, { Fragment } from 'react';

class StorePicker extends React.Component {
  render(){
    return (
      <Fragment>
        { /* this is a comment */}
        <form className="store-selector">
          <h2>Please Enter A Store </h2>
          <input type="text" required placeholder="Store Name"/>
          <button type="submit">Visit Store</button>
        </form>
      </Fragment>
    )
  }
}

export default StorePicker;
