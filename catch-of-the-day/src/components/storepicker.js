import React from "react";

// JSX means we can do this stuff inline and not make react spoit things out with things like createelement
// these comments can use the // format because this is technically Javscript not JSX rn

class StorePicker extends React.Component {
  render() {
    return (
      //this can only return one element with however many children, but not multiple child elements
      //or you can use <React.Fragment> and now spit out as many siblings as you want inside that

      <form className="store-selector">
        {/* this is how you escape JSX and insert some javascript like this comment */}
        <h2>Select a Store</h2>
        <input type="text" required placeholder="Store name" />
        <button type="submit">Visit store</button>
      </form>
    );
  }
}

export default StorePicker;
// react order of ops - you're improting react, making some stuff, and exporting that stuff
