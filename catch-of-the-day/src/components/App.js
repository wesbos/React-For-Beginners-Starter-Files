import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
  // Set initial state.
  state = {
    fishes: {},
    order: {}
  };
  addFish = fish => {
    // Make a copy of existing state.
    const fishes = { ...this.state.fishes };
    // Add new fish to fishes const.
    fishes[`fish${Date.now()}`] = fish;
    // Set new fishes object to state.
    this.setState({ fishes });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="greg is cool" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
