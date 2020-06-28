import React from "react";
import AddFishForm from "./AddFishForm";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {/* passing the addFish method we got from App.js as a prop */}
        <AddFishForm addFish={this.props.addFish} />
      </div>
    );
  }
}

export default Inventory;
