import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  render() {
    return (
      <div>
        <p>Inventory</p>
        <AddFishForm></AddFishForm>
      </div>
    )
  }
}

export default Inventory;
