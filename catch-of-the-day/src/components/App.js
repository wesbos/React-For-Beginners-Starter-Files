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
    // reinstate localStorage
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    // refs different in firebase than in react
    //anyway, we don't wanna sync the whole database because it may have stuff from other stores. So we give it this path in syncState then some config params, and the state of the fishes component as its state to sync.
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes",
    });
    // remember this is that easier concatenation method using `` (not '') vs. +
  }

  componentDidUpdate() {
    // use the storeId as the key so we know that this is the key for this particular store.
    // Remember that localStorage wants stings, not objects. We use JSONs.stringify to turn an object into a string before setItem().
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
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

  updateFish = (key, updatedFish) => {
    //take a copy of the current state (its state not props because this is where the state •lives*)
    const fishes = { ...this.state.fishes };
    // update that part of state
    fishes[key] = updatedFish;
    // set that to this.state
    this.setState({ fishes });
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

  // removeFromOrder = (key) => {
  //   const order = { ...this.state.order };
  //   order[key] = null;
  //   this.setState({ order });
  // };
  // not sure if this works

  deleteFish = (key) => {
    const fishes = { ...this.state.fishes };
    // because of firebase, we need to set it to null
    fishes[key] = null;
    this.setState({ fishes });
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
