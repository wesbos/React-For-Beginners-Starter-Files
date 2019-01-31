import React from 'react'
import { AddFishForm } from './AddFishForm.js'
import { EditFishForm } from './EditFishForm.js'
import fishes from '../sample-fishes.js'

class Inventory extends React.Component {
  render () {
    const { fishes } = this.props
    const { addFish, updateFish, deleteFish, loadSampleFishes } = this.props
    return (
      <div className='inventory'>
        <h2>Inventory</h2>
        {Object.keys(fishes).map(key => (
          <EditFishForm
            fish={fishes[key]}
            key={key}
            index={key}
            updateFish={updateFish}
            deleteFish={deleteFish}
          />
        ))}
        <AddFishForm addFish={addFish} />
        <button onClick={loadSampleFishes}> Load Sample Fishes</button>
      </div>
    )
  }
}

export { Inventory }
