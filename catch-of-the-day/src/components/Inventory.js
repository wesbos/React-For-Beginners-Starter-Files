import React from 'react'
import PropTypes from 'prop-types'
import { Fish } from './Fish.js'
import { AddFishForm } from './AddFishForm.js'
import { EditFishForm } from './EditFishForm.js'

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

Inventory.propTypes = {
  fishes: PropTypes.objectOf(PropTypes.shape(Fish.propTypes)),
  addFish: PropTypes.func,
  updateFish: PropTypes.func,
  deleteFish: PropTypes.func,
  loadSampleFishes: PropTypes.func
}

export { Inventory }
