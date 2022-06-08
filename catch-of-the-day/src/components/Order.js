import React from 'react';
import { formatPrice } from '../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from "prop-types";

export const Order = ({ fishes, orders, removeFromOrder }) => {
  const orderIds = Object.keys(orders);
  const total = orderIds.reduce((prevTotal, key) => {
    const fish = fishes[key];
    const count = orders[key];
    const isAvailable = fish && fish.status === 'available';
    if (isAvailable) {
      return prevTotal + (count * fish.price);
    }
    return prevTotal;
  }, 0);

  const renderOrder = key => {
    const fish = fishes[key];
    const count = orders[key];
    const isAvailable = fish && fish.status === 'available';
    const transitionOptions = {
      classNames: "order",
      key,
      timeout: { enter: 500, exit: 500 }
    };
    // wait until fish loaded
    if (!fish) return null;
    if (!isAvailable) {
      return (
        <CSSTransition {...transitionOptions}>
          <li key={key}>Sorry {fish ? fish.name : "fish"} is no longer available</li>
        </CSSTransition>
      )
    }
    return (
      <CSSTransition {...transitionOptions}>
        <li key={key}>
          <span>
            <TransitionGroup component="span" className="count">
              <CSSTransition classNames="count" key={count} timeout={{ enter: 250, exit: 250 }}>
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>
            lbs {fish.name}
            {formatPrice(count * fish.price)}
            <button onClick={() => removeFromOrder(key)}>&times;</button>
          </span>
        </li>
      </CSSTransition>
    )
  }

  return (
    <div className="order-wrap">
      <h2>Order</h2>
      <TransitionGroup component="ul" className="order">
        {orderIds.map(key => renderOrder(key))}
      </TransitionGroup>
      <strong>Total: {formatPrice(total)}</strong>
    </div>
  )
}

Order.propTypes = {
  fishes: PropTypes.object,
  orders: PropTypes.object,
  removeFromOrder: PropTypes.func
};
