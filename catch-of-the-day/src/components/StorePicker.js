import React from 'react';

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        { /* PS: This comment can't go above the form opening tag. Dang JSX */ }
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder='Store Name'/>
        <button type="submit">Visit Store -></button>
      </form>
    )
  }
}

export default StorePicker
