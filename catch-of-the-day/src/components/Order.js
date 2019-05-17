import React from 'react';
import {formatPrice} from '../helpers';
import {CSSTransition,TransitionGroup} from 'react-transition-group';

export default class Order extends React.Component{
  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    //make sure the fish is loaded before rendering out
    if (!fish) return null;
    const tally = this.props.order[key];
    const isAvailable = fish.status === "available";
    if(!isAvailable){
      return (
        <CSSTransition classNames="order" key={key} timeout={{enter:500,exit:500}}>
        <li key={key}>
        Sorry {fish ? fish.name : 'fish'} is no longer availabe.
      </li>
      </CSSTransition>
      );
    }
    return (
      <CSSTransition classNames="order" key={key} timeout={{enter:500,exit:500}}>
      <li key={key}>
      <span>
        <TransitionGroup component="span" className="count">
          <CSSTransition classNames="count" key={tally} timeout={{enter:500,exit:500}}>
            <span>{tally}</span>
          </CSSTransition>
        </TransitionGroup>
        lbs {fish.name}
        {formatPrice(tally * fish.price)}
        <button onClick={()=>this.props.removeFromOrder(key)}>&times;</button>
      </span>
    </li>
    </CSSTransition>
    );
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
        <TransitionGroup component="ul" className="order">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>
        <div className="total">
        Total:
        <strong>{formatPrice(orderTotal)}</strong>
        </div>
      </div>
    )
  }
}
