import React, {Fragment} from 'react';
import { formatPrice} from '../helpers';

class Fish extends React.Component {
  render() {
    // ESX Destructuring! Will be this.props.details.XXX
    const {image, name, desc, price, status} = this.props.details;

    return (
      <Fragment>
        <li className="menu-fish">
          <img src={image} alt={name} />
          <h3 className="fish-name">{name}
            <span className="price">{formatPrice(price)}</span>
          </h3>
          <p>{desc}</p>
          <button>Add to Cart</button>
        </li>
      </Fragment>
    );
  }
}
export default Fish;
