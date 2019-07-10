import React, { Fragment } from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  // Establish DB connection when we load App
  componentDidMount() {
    const { params } = this.props.match;
    //First reinstate our localstorage
    const localStorageRef = localStorage.getItem(params.storeId);

    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  // Push order data to localstorage
  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

  // Unmount and clear data; prevents mem leaks
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = fish => {
    //1. take a copy of existing state
    const fishes = { ...this.state.fishes };
    //2. Add new fish to fishes var
    fishes[`fish${Date.now()}`] = fish;
    //3. Set new fishes obj to state
    this.setState({
      fishes
    });
  };

  updateFish = (key, updatedFish) => {
    //1. Take a copy fo the current state
    const fishes = { ...this.state.fishes };
    //2. Update that state
    fishes[key] = updatedFish;
    //3. Set that to state
    this.setState({ fishes });
  };

  deleteFish = (key) => {
    // 1. Take a copy state
    const fishes = {...this.state.fishes}
    // 2. Update the state
    fishes[key] = null;
    //3. Update state
    this.setState({fishes});
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    // 1 take copy of state
    const order = { ...this.state.order };
    // 2 add or update
    order[key] = order[key] + 1 || 1;
    // call setState
    this.setState({ order });
  };

  removeFromOrder = key => {
    // 1 take copy of state
    const order = { ...this.state.order };
    // 2 remove item from order
    delete order[key];
    // call setState
    this.setState({ order });

  }

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
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
        />
      </div>
    );
  }
}

export default App;
