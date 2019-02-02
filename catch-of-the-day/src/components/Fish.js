import React from 'react'
import PropTypes from 'prop-types'
import { formatPrice } from '../helpers.js'

const Fish = props => {
  const { name, image, desc, price, isAvailable, index } = props

  return (
    <li className='menu-fish'>
      <img src={image} alt={name} />
      <h3 className='fish-name'>
        {name}
        <span className='price'>{formatPrice(price)}</span>
      </h3>
      <p>{desc}</p>
      <button
        disabled={!isAvailable}
        onClick={() => props.addToOrder({ key: index })}
      >
        {isAvailable ? 'Add to Order' : 'Sold Out!'}
      </button>
    </li>
  )
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
