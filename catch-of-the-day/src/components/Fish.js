import React from 'react'
import { formatPrice } from '../helpers'

export const Fish = ({ fish: { name, image, desc, status, price }, addToOrder, identifier }) => {
  const isAvailable = status === 'available';
  return (
    <li className="menu-fish">
      <img src={image} alt={name} />
      <h3 className="fish-name">{name}
        <span className="price">{formatPrice(price)}</span>
      </h3>
      <p>{desc}</p>
      <button
        disabled={!isAvailable}
        onClick={() => addToOrder(identifier)}
      >
        {isAvailable ? "Add To Cart" : "Sold Out"}
      </button>
    </li>
  )
}
