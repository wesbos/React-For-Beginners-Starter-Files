import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
  // Set initial state.
  state = {
    fishes: {},
    order: {}
  };

  // Sync data with Firebase when user loads app.
  componentDidMount() {
    const params = this.props.match.params;
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  // Clean up Firebase when user leaves app.
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

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

  // Add fishes to order.
  addToOrder = key => {
    // Make a copy of existing state.
    const order = { ...this.state.order };
    // Either add to order, or update the quanity.
    order[key] = order[key] + 1 || 1;
    // Set the order total to state.
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
