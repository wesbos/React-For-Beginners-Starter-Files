import React from 'react';
import { formatPrice } from '../helpers';

export const Order = ({ fishes, orders }) => {
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
    const isAvailable = fish.status === 'available';
    if (!isAvailable) {
      return (
        <li key={key}>Sorry {fish ? fish.name : "fish"} is no longer available</li>
      )
    }
    return (
      <li key={key}>
        {count} lbs {fish.name}
        {formatPrice(count * fish.price)}
      </li>
    )
  }

  return (
    <div className="order-wrap">
      <h2>Order</h2>
      <ul className="order">
        {orderIds.map(key => renderOrder(key))}
      </ul>
      <strong>Total: {formatPrice(total)}</strong>
    </div>
  )
}
