import React from 'react';
import { formatPrice } from '../helpers'


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

        if(!fish || fish.status === 'unavailable'){
            return <li key={key}>Sorry {fish? fish.name : 'that fish'} is no longer available</li>
        }

        return (
            <li key={key}>
                <span className="name">{fish.name}</span>
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
      }, 0);
      return(
        <div>
            <h2 className="order-wrap">Order</h2>
            <ul className="order">
                {orderIds.map(this.renderOrder)}
                <li className="total">
                    <strong>Total:</strong>
                     {formatPrice(totals)}
                </li>
            </ul>
        </div>
        
      )
    }
}

export default Order;