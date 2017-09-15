import React from 'react';
import AddFishForm from './AddFishForm';;

class Inventory extends React.Component{
    render(){
      return(
      <div>
        <h1>The Inventory</h1>
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSample}>Load Sample Fish</button>
      </div>
      )
    }
}

export default Inventory;