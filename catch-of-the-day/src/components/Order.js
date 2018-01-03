import React from 'react';
import { formatPrice } from '../helpers'
import CSSTransitionGroup from 'react-addons-css-transition-group'

class Order extends React.Component{
    constructor(){
        super();
        this.renderOrder = this.renderOrder.bind(this);
    }

    renderOrder(key){
        // console.log('hello')
        // const names = Object.keys(this.props.order).map(name => this.props.fishes[name].name)
        // console.log(names)
        // return <p>{names}</p>
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const remove = <button type="submit" onClick={() => this.props.removeOrder(key)}>&times;</button>


        if(!fish || fish.status === 'unavailable'){
            return <li key={key}>Sorry {fish? fish.name : 'that fish'} is no longer available {remove}</li>
        }

        return (
            <li key={key}>
                <span className="name">
                    <CSSTransitionGroup
                    component="span"
                    className="count"
                    transitionName="count"
                    transitionEnterTimeout={250}
                    transitionLeaveTimeout={250}
                    >
                        <span key={count}>{count}</span>
                    </CSSTransitionGroup>
                    lbs {fish.name} {remove}
                    </span>
                <span className="price">{formatPrice(count*fish.price)}</span>
            </li>
        )
    }

    render(){
      const orderIds = Object.keys(this.props.order)
      const totals = orderIds.reduce((prevTotal, key) =>{
          const fish = this.props.fishes[key];
          const count = this.props.order[key];
          const isAvailable = fish && fish.status === 'available';
          if(isAvailable){
              return prevTotal + (count * fish.price || 0); 
          }
          return prevTotal;
      }, 0);
      return(
        <div className="order">
            <h2 className="order-wrap">Order</h2>
            <CSSTransitionGroup 
            className="order"
            component="ul"
            transitionName="order"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
            >
                {orderIds.map(this.renderOrder)}
                <li className="total">
                    <strong>Total:</strong>
                     {formatPrice(totals)}
                </li>
            </CSSTransitionGroup>
        </div>
        
      )
    }
}

export default Order;