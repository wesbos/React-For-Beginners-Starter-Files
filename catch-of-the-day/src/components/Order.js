import React, { Fragment } from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === "available";

    // Make sure fish is loaded before continuing
    if (!fish) return null;

    if (!isAvailable) {
      return (
        <li key={key}>
          Sorry {fish ? fish.name : "fish"} is no longer available
        </li>
      );
    }
    return (
      <li key={key} index={key}>
        {count} lbs {fish.name}
        {formatPrice(count * fish.price)}
        <button onClick={() => this.props.removeFromOrder(this.props.index)}>x</button>
      </li>
    );
  };

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

    return (
      <Fragment>
        <div className="order-wrap">
          <h2>Order</h2>
          <ul className="order">{orderIds.map(this.renderOrder)}</ul>

          <div className="total">
            <strong>{formatPrice(total)}</strong>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Order;
