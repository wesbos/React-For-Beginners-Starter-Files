import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  render() {
    return (
      <div>
        <p>Inventory</p>
        <AddFishForm addFish={this.props.addFish}></AddFishForm>
        <button onClick={this.props.loadSamples}>Load Inventory</button>
      </div>
    )
  }
}

export default Inventory;
