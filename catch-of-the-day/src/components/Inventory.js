import React, { Component } from "react";
import PropTypes from "prop-types";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";

class Inventory extends Component {
  static propTypes = {
    fishes: PropTypes.string,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    addFish: PropTypes.func,
    loadSampleFishes: PropTypes.func
  };
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(key => (
          <EditFishForm
            key={key}
            index={key}
            fish={this.props.fishes[key]}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
          />
        ))}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load sample fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
