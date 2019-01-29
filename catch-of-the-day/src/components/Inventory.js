import React from 'react'
import { AddFishForm } from './AddFishForm.js'

class Inventory extends React.Component {
  render () {
    const { addFish } = this.props
    return (
      <div className='inventory'>
        <h2>Inventory</h2>
        <AddFishForm addFish={addFish} />
      </div>
    )
  }
}

export { Inventory }
