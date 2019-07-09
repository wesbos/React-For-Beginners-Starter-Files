import React, {Fragment} from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="inventory">
          <h2>Inventory</h2>
          <AddFishForm addFish={this.props.addFish}/>
          <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
        </div>
      </Fragment>
    );
  }
}

export default Inventory;
