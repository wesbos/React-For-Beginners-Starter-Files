import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import PropTypes from 'prop-types';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

export default class App extends React.Component{
  state = {
    fishes:{},
    order:{}
  };

  static propTypes = {
    match:PropTypes.object
  };

  componentDidMount(){
      const {params} = this.props.match;
      //re-instate local storage
      const localStorageRef = localStorage.getItem(params.storeId);
      //console.log(localStorageRef);
      if(localStorageRef){
        //console.log(JSON.parse(localStorageRef));
        this.setState({order:JSON.parse(localStorageRef)});
      }
      this.ref = base.syncState(`${params.storeId}/fishes`,{
        context:this,
        state:"fishes"
      });
  }

  componentDidUpdate(){
    //console.log(this.state.order);
    localStorage.setItem(this.props.match.params.storeId,JSON.stringify(this.state.order));
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

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

  loadSampleFishes = () => {
    this.setState({fishes:sampleFishes});
  };

  addToOrder = (key) => {
    //get a copy of state
    const order = {...this.state.order};
    //add to order or update the number
    order[key] = order[key] + 1 || 1;
    //call setState to update the state
    this.setState({order});
  };

  removeFromOrder = (key) => {
    const order = {...this.state.order};
    delete order[key];
    this.setState({order});
  }

  updateFish = (key, updatedFish) => {
    const fishes = {...this.state.fishes};
    fishes[key] = updatedFish;
    this.setState({fishes:fishes});
  };

  deleteFish = (key) => {
    //1. copy of state
    const fishes = {...this.state.fishes};
    fishes[key] = null; //or else firebase won't delete it
    this.setState({fishes});
  };

  render(){
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline={"Fresh Seafood Market"}/>
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key =>
              <Fish key={key} details={this.state.fishes[key]} index={key} addToOrder={this.addToOrder}/>
            )}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} removeFromOrder={this.removeFromOrder}/>
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} fishes={this.state.fishes} updateFish={this.updateFish} deleteFish={this.deleteFish} storeId={this.props.match.params.storeId}/>
      </div>

    )
  }
}
