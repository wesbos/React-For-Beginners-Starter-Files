import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === "available";

    // Make sure fish have loaded before we continue.
    if (!fish) return null;
    if (!isAvailable) {
      return (
        <li key={key}>{fish ? fish.name : "fish"} is no longer available.</li>
      );
    }
    return (
      <li key={key}>
        {count} lbs {fish.name}
        {formatPrice(count * fish.price)}
        <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
      </li>
    );
  };
  render() {
    const orderIds = Object.keys(this.props.order); // put IDs into an array.
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "available";
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
      </div>
    );
  }
}

export default Order;
