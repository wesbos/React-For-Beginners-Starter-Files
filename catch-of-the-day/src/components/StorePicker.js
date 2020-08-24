import React from "react";

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
        <input 
          type="text" 
          requred="true" 
          placeholder="Store name" 
        />
        <button type="submit"> Visit store</button>
      </form>
    );
  }
}

export default StorePicker;
