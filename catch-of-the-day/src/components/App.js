import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

export default class App extends React.Component{
  state = {
    fishes:{},
    order:{}
  };

  addFish = fish => {
    //1. take a copy of existing state
    const fishes = {...this.state.fishes};
    //2. add new fish to the fishes variable
    fishes[`fish${Date.now()}`] = fish;
    //3. set the new fishes object to state
    this.setState({
      fishes:fishes
    });
  };

  render(){
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline={"Fresh Seafood Market"}/>
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>

    )
  }
}
