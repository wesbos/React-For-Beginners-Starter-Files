import React from 'react'
import { AddFishForm } from './AddFishForm'


export const Inventory = (props) => (
  <div className="order">
    <h2>Inventory</h2>
    <AddFishForm addFish={props.addFish} />
    <button onClick={props.loadSampleFishes}>Load Sample Fishes</button>
  </div>
)

