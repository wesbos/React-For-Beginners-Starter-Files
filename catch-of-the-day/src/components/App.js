import React from 'react'
import { Header } from './Header.js'
import { Inventory } from './Inventory.js'
import { Order } from './Order.js'

const App = () => (
  <div className='catch-of-the-day'>
    <div className='menu'>
      <Header tagline='probably safe to eat' />
    </div>
    <Order />
    <Inventory />
  </div>
)

export { App }
