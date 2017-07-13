import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import base from '../base';

class App extends React.Component {
  constructor() {
    super();

    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    // initial state
    this.state = {
      fishes: {},
      order: {},
    };
  }

  componentWillMount() {
    // this runs right before our app is rendered
    this.ref = base.syncState(`${this.props.params.storeID}/fishes`,
      {
        context: this,
        state: 'fishes',
    })

    const localStorageRef = localStorage.getItem(`order-${this.props.params.storeID}`);
    if(localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef),
      });
    }
  }

  componenetWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`order-${this.props.params.storeID}`, JSON.stringify(nextState.order));
  }

  addFish(fish){
    // update state - it's best practice to take a copy of your state (for performance)
    const fishes = {...this.state.fishes};
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // set state
    this.setState({fishes: fishes})
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes,
    })
  }

  addToOrder(key) {
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({order})
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="list-of-fishes">
            {
              Object
                .keys(this.state.fishes)
                .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)
            }
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} fishes={this.state.fishes} />
      </div>
    )
  }
}

export default App;