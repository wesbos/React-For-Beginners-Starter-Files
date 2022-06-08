import React from 'react';
import { formatPrice } from '../helpers';
import PropTypes from "prop-types";

export const Fish = ({ fish, addToOrder, identifier }) => {
  if (!fish) return null;
  const isAvailable = fish.status === 'available';
  return (
    <li className="menu-fish">
      <img src={fish.image} alt={fish.name} />
      <h3 className="fish-name">{fish.name}
        <span className="price">{formatPrice(fish.price)}</span>
      </h3>
      <p>{fish.desc}</p>
      <button
        disabled={!isAvailable}
        onClick={() => addToOrder(identifier)}
      >
        {isAvailable ? "Add To Cart" : "Sold Out"}
      </button>
    </li>
  )
}

Fish.propTypes = {
  fish: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    desc: PropTypes.string,
    status: PropTypes.string,
    price: PropTypes.number
  }),
  addToOrder: PropTypes.func,
  identifier: PropTypes.string
};

