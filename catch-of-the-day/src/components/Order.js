import React, { Fragment } from "react";
import { formatPrice } from "../helpers";
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class Order extends React.Component {
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === "available";

    // Make sure fish is loaded before continuing
    if (!fish) return null;

    if (!isAvailable) {
      return (
        <CSSTransition classNames="order" key={key} timeout={{ enter: 5000, exit: 5000}}>
          <li key={key}>
            Sorry {fish ? fish.name : "fish"} is no longer available
          </li>
        </CSSTransition>
      );
    }
    return (
      <CSSTransition classNames="order" key={key} timeout={{ enter: 5000, exit: 5000}}>
        <li key={key} index={key}>
          {count} lbs {fish.name}
          <span className="price">{formatPrice(count * fish.price)}</span>
          <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
        </li>
      </CSSTransition>
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
          <TransitionGroup component="ul" className="order">
            {orderIds.map(this.renderOrder)}
          </TransitionGroup>

          <div className="total">
            <strong>{formatPrice(total)}</strong>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Order;
