import React from 'react'
import PropTypes from 'prop-types'
// Components
import { Header } from './Header.js'
import { Inventory } from './Inventory.js'
import { Order } from './Order.js'
import { Fish } from './Fish.js'
// Hooks
import { useLocalStorage } from '../hooks/useLocalStorage.js'
import { useFirebase } from '@use-firebase/app'
import { useValue } from '@use-firebase/database'
import { credentials } from '../credentials.js'

// Config
import sampleFishes from '../sample-fishes.js'

const App = props => {
  const { storeId } = props.match.params
  const firebase = useFirebase(credentials)

  const [order, setOrder] = useLocalStorage(storeId, {})
  const [fishes, setFishes] = useValue(firebase, `${storeId}/fishes`, 'value', {})
  const loadedFishes = fishes || {} // because we might get null on first try

  const addFish = fish => {
    setFishes({
      ...fishes,
      [`fish${Date.now()}`]: fish
    })
  }

  const deleteFish = index => {
    setFishes({
      ...fishes,
      [`fish${Date.now()}`]: null
    })
  }

  const updateFish = (index, fish) => {
    setFishes({
      ...fishes,
      [index]: fish
    })
  }

  const loadSampleFishes = () => {
    setFishes(sampleFishes)
  }

  const addToOrder = ({ key }) => {
    setOrder({
      ...order,
      [key]: order[key] + 1 || 1
    })
  }

  const removeFromOrder = index => {
    delete order[index]
    setOrder({ order })
  }

  return (
    <div className='catch-of-the-day'>
      <div className='menu'>
        <Header tagline='probably safe to eat' />
        <ul className='fishes'>
          {Object.keys(loadedFishes).map(name => (
            <Fish
              key={name}
              index={name}
              addToOrder={addToOrder}
              {...fishes[name]}
            />
          ))}
        </ul>
      </div>
      <Order fishes={loadedFishes} order={order} removeFromOrder={removeFromOrder} />
      <Inventory
        fishes={loadedFishes}
        storeId={storeId}
        addFish={addFish}
        updateFish={updateFish}
        deleteFish={deleteFish}
        loadSampleFishes={loadSampleFishes}
      />
    </div>
  )
}

App.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      storeId: PropTypes.string.isRequired
    })
  })
}

export { App }
