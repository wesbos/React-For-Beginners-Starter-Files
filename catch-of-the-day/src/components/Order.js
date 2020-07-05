import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "available";
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);
    // remember reduce - take in some data and return a total
    return (
      <div className="order-wrap">
        <h2>order</h2>
        <ul>
          <li>{orderIds}</li>
        </ul>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
