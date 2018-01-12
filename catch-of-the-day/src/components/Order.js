import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { formatPrice } from '../helpers';

class Order extends React.Component {

  static propTypes = {
    fishes: PropTypes.object.isRequired,
    order: PropTypes.object.isRequired,
    removeFromOrder: PropTypes.func.isRequired,
  }

  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const removeButton = <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>

    if(!fish || fish.status === 'unavailable') {
      return <li key={key}>Sorry, {fish ? fish.name : 'fish'} is no longer available!{removeButton}</li>
    }

    return (
      <li key={key}>
        <span>
          <Transition
            component="span"
            className="count"
            transitionName="count"
            timeout={2000}
            in={true}
          >
            {(state) => (
              <span key={count}>{count} {state}</span>
            )}
          </Transition>

          lbs {fish.name} {removeButton}
        </span>
        <span className="price">{formatPrice(count * fish.price)}</span>

      </li>
    )
  }

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      if(isAvailable) {
        return prevTotal + (count * fish.price || 0)
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Your Order</h2>

        <ul
          className="order"
          component="ul"
          transitionName="order"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {orderIds.map(this.renderOrder)}
          <li className="total">
            <strong>Total:</strong>
            {formatPrice(total)}
          </li>
        </ul>

      </div>
    )
  }
}


export default Order;
