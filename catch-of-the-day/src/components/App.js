import React, { Component } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fishes: {},
      // order: {},
    };

    this.addFish = this.addFish.bind(this);
  }

  addFish(fish) {
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;

    this.setState({ fishes });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
