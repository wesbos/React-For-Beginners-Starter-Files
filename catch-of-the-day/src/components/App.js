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
    // take a copy of existing state
    const fishes = { ...this.state.fishes };
    // ... = object spread aka copy of state. see also: deep clone
    fishes[`fish${Date.now()}`] = fish;
    // add our new fish to fishes variable
    this.setState({
      fishes: fishes, // overwrite the state fishes with our new copy of fishes
    });
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
