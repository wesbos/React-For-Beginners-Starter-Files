import React from 'react'
import { Header } from './Header.js'
import { Inventory } from './Inventory.js'
import { Order } from './Order.js'
import { Fish } from './Fish.js'
import sampleFishes from '../sample-fishes.js'
import base from '../base.js'

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }

  componentDidMount() {
    const { match: { params: { storeId } } } = this.props
    this.ref = base.syncState(`${storeId}/fishes/`, {
      context: this,
      state: `fishes`
    })
  }
  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  addFish = fish => {
    const fishes = { ...this.state.fishes }
    fishes[`fish${Date.now()}`] = fish
    this.setState({ fishes })
  }

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes })
  }

  addToOrder = ({ key }) => {
    const { order } = this.state
    order[key] = order[key] + 1 || 1
    this.setState({ order })
  }

  render() {
    const { fishes, order } = this.state
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='probably safe to eat' />
          <ul className='fishes'>
            {Object.keys(fishes).map(name => (
              <Fish
                key={name}
                index={name}
                addToOrder={this.addToOrder}
                {...fishes[name]}
              />
            ))}
          </ul>
        </div>
        <Order fishes={fishes} order={order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    )
  }
}

export { App }
