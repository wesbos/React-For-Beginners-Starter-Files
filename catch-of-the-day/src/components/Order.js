import React from 'react';
import {formatPrice} from '../helpers';

export default class Order extends React.Component{
  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    //make sure the fish is loaded before rendering out
    if (!fish) return null;
    const tally = this.props.order[key];
    const isAvailable = fish.status === "available";
    if(!isAvailable){
      return (<li key={key}>
        Sorry {fish ? fish.name : 'fish'} is no longer availabe.
      </li>);
    }
    return (<li key={key}>
    {tally} lbs {fish.name}

    {formatPrice(tally * fish.price)}
    </li> );
  };

  render(){
    const orderIds = Object.keys(this.props.order);
    const orderTotal = orderIds.reduce((total,key)=>{
      const fish = this.props.fishes[key];
      const tally = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      if(isAvailable) {
        return total + fish.price*tally;
      }
      return total;
    },0);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">
          {orderIds.map(this.renderOrder)}
        </ul>
        <div className="total">
        Total:
        <strong>{formatPrice(orderTotal)}</strong>
        </div>
      </div>
    )
  }
}
