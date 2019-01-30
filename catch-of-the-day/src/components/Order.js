import React from 'react'
import { formatPrice } from '../helpers.js'

class Order extends React.Component {
  renderOrder = key => {
    const { name, price, isAvailable } = this.props.fishes[key]
    if (!isAvailable) {
      return <li key={key}>Sorry, {name || 'fish'} is no longer available!</li>
    }
    const amount = this.props.order[key]
    return (
      <li key={key}>
        {amount} lbs {name}
        {formatPrice(amount * price)}
      </li>
    )
  }
  render() {
    const { order, fishes } = this.props
    const orderIds = Object.keys(order)
    const total = orderIds.reduce((total, orderId) => {
      const { price, isAvailable } = fishes[orderId]
      const amount = order[orderId]
      const subtotal = (isAvailable ? amount : 0) * price
      return total + subtotal
    }, 0)

    return (
      <div className='order-wrap'>
        <h2>Order</h2>
        <ul className='order'>
          {orderIds.map(this.renderOrder)}
        </ul>
        <div className='total'>
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    )
  }
}

export { Order }
