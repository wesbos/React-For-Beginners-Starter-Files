import React from 'react';
import AddFishForm from './AddFishForm';
import memoize from 'lodash.memoize';

class Inventory extends React.Component {
  constructor() {
    super()
    this.renderInventory = this.renderInventory.bind(this);
  }
  //use lodash.memoize
  handleChange=memoize((key) => (e) =>  {
    //Find the current fish object
    const fish = this.props.fishes[key];
    //copy the fish state and update it with new data
    const updatedFish = {
      ...fish,
      [e.target.name]: e.target.value
    }
    //Send the updated fish up to the App component via props
    this.props.updateFish(key, updatedFish);
  })

  renderInventory(key) {
    //Map through all of the fish objects passed down in the props
    const fish = this.props.fishes[key];
    //return form for each fish, fill it with a default value & set an onChange handler to listen for updates
    return(
       <div className="fish-edit" key={key}>
         <input type="text" name="name" defaultValue={fish.name} onChange={this.handleChange(key)}/>
         <input type="text" name="price" defaultValue={fish.price} onChange={this.handleChange(key)}/>
         <select type="text" name="status" defaultValue={fish.status} onChange={this.handleChange(key)}>
           <option value="available">Fresh!</option>
           <option value="unavailable">Sold Out!</option>
         </select>
         <textarea type="text" name="desc" defaultValue={fish.desc} onChange={this.handleChange(key)}></textarea>
         <input type="text" name="image" defaultValue={fish.image} onChange={this.handleChange(key)}/>
         <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
       </div>
    )
  }

  render() {
    return(
      <div>
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <AddFishForm addFish={this.props.addFish}/>
        <button onClick={this.props.loadSamples}>Add Sample Fish</button>
      </div>

    )
  }
}

export default Inventory;
