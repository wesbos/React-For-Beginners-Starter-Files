import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddFishForm from './AddFishForm';

class Inventory extends Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
      </div>
    );
  }
}

Inventory.propTypes = {
  addFish: PropTypes.func.isRequired,
  loadSampleFishes: PropTypes.func.isRequired,
};

export default Inventory;
