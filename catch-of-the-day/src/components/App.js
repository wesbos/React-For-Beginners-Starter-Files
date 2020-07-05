import React, { Component } from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
  // state to get data from the the form Component
  state = {
    fishes: {},
    order: {},
  };

  // wait till app.js is loaded before we start talking to firebase
  componentDidMount() {
    const { params } = this.props.match;
    // console.log("mounted");
    // refs different in firebase than in react
    //anyway, we don't wanna sync the whole database because it may have stuff from other stores. So we give it this path in syncState then some config params, and the state of the fishes component as its state to sync.
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes",
    });
    // and remember this is that easier concatenation method using `` (not '') vs.t +
  }

  // on leaving the page, or reloading the page, stop listening to whatever you were previously listening to:
  componentWillUnmount() {
    base.removeBinding(this.ref);
    // this is why we stored the database connection as an object instead of just hardcoding it or running syncState one time. this.ref is now something wee can use to make the disconnect here.
  }

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
