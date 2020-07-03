import React, { Component } from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

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

  loadSampleFishes = () => {
    // console.log("loading sample");
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = (key) => {
    // take a copy of state
    const order = { ...this.state.order };
    // add to the order or update the number
    order[key] = order[key] + 1 || 1;
    // call setState to update our state to order(in state) == order(my local variable).
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="derpaderp" quantity={400} cool="true" />
          {/* props being passed in, note that number props need curly braces */}
          <ul className="fishes">
            {Object.keys(this.state.fishes).map((key) => (
              <Fish
                key={key}
                fishNumber={key}
                // passing the key lets each button have a prop it can use to pass back when its clicked
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
