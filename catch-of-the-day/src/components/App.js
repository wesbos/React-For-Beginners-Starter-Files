import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
// import AddFishForm from './AddFishForm'

class App extends React.Component {
  constructor() {
    super() //can't use the keyword 'this' until super is called
    this.addFish = this.addFish.bind(this)
    this.state = {
      fishes: {},
      order: {}
    }
  }

  addFish(fish) {
    const fishes = {...this.state.fishes} //... spread operator - takes every item from object and copies it to this object
    const timeStamp = Date.now()
    fishes[`fish-${timeStamp}`] = fish
    this.setState({ fishes })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
        <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish}/>
      </div>
    )
  }
}

export default App
