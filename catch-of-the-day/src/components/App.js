import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes";
import base from "../base";

class App extends React.Component {
  constructor() {
    super();

    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.updateFish = this.updateFish.bind(this);
    this.removeFish = this.removeFish.bind(this);
    this.removeFromOrder = this.removeFromOrder.bind(this);


    this.state = {
      fishes: {},
      order: {}
    };
  }

  componentWillMount() {
    //this runs right before the <App> is rendered.
    this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });

    //Check if there is any order in localStorage
    const localStorageRef = localStorage.getItem(
      `order-${this.props.params.storeId}`
    );

    if (localStorageRef) {
      //update our App component's order state
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }
  }

  componentWillUnmount() {
    //this runs just before the <App> is unmounted from the DOM.
    base.removeBinding(this.ref);
  }

  componentWillUpdate(nextProps, nextState) {
    //this runs just before state or props are updated
    localStorage.setItem(
      `order-${this.props.params.storeId}`,
      JSON.stringify(nextState.order)
    );
  }

  addFish(fish) {
    //Copy the current state
    const fishes = { ...this.state.fishes };
    //Set timestamp
    const timestamp = Date.now();
    //Set keyvalue pair on fish
    fishes[`fish-${timestamp}`] = fish;
    //Set State
    this.setState({ fishes });
  }

  updateFish(key, updatedFish) {
    //Copy the current state
    const fishes = { ...this.state.fishes };
    //Overwrite the one fish that has been updated.
    fishes[key] = updatedFish;
    //Set State
    this.setState({ fishes });
  }

  removeFish(key) {
    //Copy the current state
    const fishes = {...this.state.fishes };
    //Delete the specific fish. Note: use null as this is required by Firebase
    fishes[key] = null;
    //Set the State
    this.setState({ fishes });
  }

  removeFromOrder(key) {
    //Copy the current state
    const order = {...this.state.order };
    //Delete the specific fish. Note: no need to use null as this is stored in localStorage
    delete order[key];
    //Set the State
    this.setState({ order });
  }

  addToOrder(key) {
    //Copy the current state
    const order = { ...this.state.order };
    //update the new number of fish to be ordered
    order[key] = order[key] + 1 || 1;
    //Set State
    this.setState({ order });
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="menu-fish">
            {Object.keys(this.state.fishes).map(key =>
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            )}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          params={this.props.params}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          addFish={this.addFish}
          loadSamples={this.loadSamples}
          fishes={this.state.fishes}
          updateFish={this.updateFish}
          removeFish={this.removeFish}
        />
      </div>
    );
  }
}

export default App;
