import React from 'react'
import { formatPrice } from '../helpers.js'

class Fish extends React.Component {
  addToOrder = () => {
    const { index } = this.props
    const { addToOrder } = this.props
    addToOrder({ key: index })
  }

  render () {
    const { name, image, desc, price, isAvailable } = this.props

    return (
      <li className='menu-fish'>
        <img src={image} alt={name} />
        <h3 className='fish-name'>
          {name}
          <span className='price'>{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={this.addToOrder}>
          {isAvailable ? 'Add to Order' : 'Sold Out!'}
        </button>
      </li>
    )
  }
}

export { Fish }
