import React from 'react'
import PropTypes from 'prop-types'
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

Fish.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isAvailable: PropTypes.bool.isRequired,
  addToOrder: PropTypes.func
}

export { Fish }
