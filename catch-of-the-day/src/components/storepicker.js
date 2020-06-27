import React from "react";
import { getFunName } from "../helpers";

// JSX means we can do this stuff inline and not make react spoit things out with things like createelement
// these comments can use the // format because this is technically Javscript not JSX rn

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (event) => {
    //  prevent form from submitting and reloading the page
    event.preventDefault();
    //  get input text (this was myInput.value but new version of react it's current.value)

    const storeName = this.myInput.current.value;
    // console.log(this.myInput.current.value);

    // change the page URL to store/storeID
    this.props.history.push(`/store/${storeName}`);
    // so we're not really changing pages, we're still the same app, we're just telling react to load some new components, so it's *fassst*
  };

  render() {
    return (
      //this can only return one element with however many children, but not multiple child elements
      //or you can use <React.Fragment> and now spit out as many siblings as you want inside that

      <form className="store-selector" onSubmit={this.goToStore}>
        {/* this is how you escape JSX and insert some javascript like this comment */}
        <h2>Select a Store</h2>

        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store name"
          defaultValue={getFunName()}
        />
        {/* in react need to use defaultValue  */}
        <button type="submit">Visit store</button>
      </form>
    );
  }
}

export default StorePicker;
// react order of ops - you're improting react, making some stuff, and exporting that stuff
