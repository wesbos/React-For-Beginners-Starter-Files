import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { formatPrice } from "../helpers";

class Order extends React.Component {
  static propTypes = {
    fishes: PropTypes.object.isRequired,
    order: PropTypes.object.isRequired,
    removeFromOrder: PropTypes.func.isRequired
  };

  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const removeButton = (
      <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
    );

    if (!fish || fish.status === "unavailable") {
      return (
        <li key={key}>
          Sorry, {fish ? fish.name : "fish"} is no longer available!{
            removeButton
          }
        </li>
      );
    }

    return (
      <li key={key}>
        <span>
          <TransitionGroup component="span" className="count">
            <CSSTransition
              key={count}
              classNames="count"
              timeout={{ enter: 250, exit: 250 }}
            >
              <span>{count}</span>
            </CSSTransition>
          </TransitionGroup>
          lbs {fish.name} {removeButton}
        </span>
        <span className="price">{formatPrice(count * fish.price)}</span>
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
        return prevTotal + (count * fish.price || 0);
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Your Order</h2>

        <TransitionGroup component="ul" className="order">
          {orderIds.map(key => (
            <CSSTransition
              classNames="order"
              key={key}
              timeout={{ enter: 250, exit: 250 }}
            >
              {this.renderOrder(key)}
            </CSSTransition>
          ))}
        </TransitionGroup>

        <div className="total">
          <strong>Total:</strong>
          {formatPrice(total)}
        </div>
      </div>
    );
  }
}

export default Order;
