import React from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {/* Get the array keys of fishes, then use .map on each one and pass that to an instance of EditFishForm */}
        {Object.keys(this.props.fishes).map((key) => (
          <EditFishForm
            key={key}
            index={key}
            fish={this.props.fishes[key]}
            updateFish={this.props.updateFish}
          />
        ))}
        {/*  passing the addFish method we got from App.js as a prop */}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load sample fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
