import React, { Component } from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

class App extends React.Component {
  // state to get data from the the form Component
  state = {
    fishes: {},
    order: {},
  };
  addFish = (fish) => {
    console.log("adding a fish");
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="derpaderp" quantity={400} cool="true" />
          {/* props being passed in, note that number props need curly braces */}
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
