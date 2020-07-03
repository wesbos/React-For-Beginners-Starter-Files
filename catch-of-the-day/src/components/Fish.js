import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  render() {
    const { image, name, price, desc, status } = this.props.details;
    // ES6 destructuring ^^ better way to declare a bunch of variables at once.
    const isAvailable = status === "available";

    return (
      <li className="menu-fish">
        <img src={image} alt={image} />
        <h3 className="fish-name">
          {name}
          <span classname="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable}>
          {isAvailable ? "Add to Order" : "Sold out"}
        </button>
      </li>
    );
  }
}

export default Fish;
