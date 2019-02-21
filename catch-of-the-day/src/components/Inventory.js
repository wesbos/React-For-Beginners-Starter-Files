import React from 'react'
import PropTypes from 'prop-types'
import { Fish } from './Fish.js'
import { AddFishForm } from './AddFishForm.js'
import { EditFishForm } from './EditFishForm.js'
import { Login } from './Login.js'

const Inventory = props => {
  const { fishes, storeId, firebase } = props
  const { addFish, updateFish, deleteFish, loadSampleFishes } = props

  return (
    <div className='inventory'>
      <h2>Inventory</h2>
      <Login storeId={storeId} firebase={firebase}>
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
      </Login>
    </div>
  )
}

Inventory.propTypes = {
  firebase: PropTypes.object,
  fishes: PropTypes.objectOf(PropTypes.shape(Fish.propTypes)),
  addFish: PropTypes.func,
  updateFish: PropTypes.func,
  deleteFish: PropTypes.func,
  loadSampleFishes: PropTypes.func
}

export { Inventory }
