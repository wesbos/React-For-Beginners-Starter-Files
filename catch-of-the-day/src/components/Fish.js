import React from 'react';
import { formatPrice } from '../helpers';
import PropTypes from 'prop-types';

const Fish = props => {
  const { details, index } = props;
  const isAvailable = details.status === 'available';
  const buttonText = isAvailable ? 'Add To Order' : 'Sold Out!';
  return (
    <li className="menu-fish">
      <img src={details.image} alt={details.name} />
      <h3 className="fish-name">
        {details.name}
        <span className="price">{formatPrice(details.price)}</span>
      </h3>
      <p>{details.desc}</p>
      <button onClick={() => props.addToOrder(index)} disabled={!isAvailable}>
        {buttonText}
      </button>
    </li>
  );
};

Fish.propTypes = {
  details: PropTypes.object.isRequired,
  index: PropTypes.string.isRequired,
  addToOrder: PropTypes.func.isRequired,
};

export default Fish;
