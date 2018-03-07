import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";

class App extends React.Component {
  // Set initial state.
  state = {
    fishes: {},
    order: {}
  };

  // Update fishes state.
  addFish = fish => {
    // Make a copy of existing state.
    const fishes = { ...this.state.fishes };
    // Add new fish to fishes const.
    fishes[`fish${Date.now()}`] = fish;
    // Set new fishes object to state.
    this.setState({ fishes });
  };

  // Load dem sample fishes.
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="greg is cool" />
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
