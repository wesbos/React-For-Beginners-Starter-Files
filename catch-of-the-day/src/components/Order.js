import React from 'react'
import { formatPrice } from '../helpers.js'

class Order extends React.Component {
  renderOrder = key => {
    const { fishes } = this.props
    const { deleteFishFromOrder } = this.props
    if (!(key in fishes)) return null
    const { name, price, isAvailable } = fishes[key]
    if (!isAvailable) {
      return <li key={key}>Sorry, {name || 'fish'} is no longer available!</li>
    }
    const amount = this.props.order[key]
    return (
      <li key={key}>
        {amount} lbs {name}
        {formatPrice(amount * price)}
        <button onClick={() => deleteFishFromOrder(key)}>🗑</button>
      </li>
    )
  }

  total () {
    const { order, fishes } = this.props
    const orderIds = Object.keys(order)
    return orderIds.reduce((total, orderId) => {
      if (!(orderId in fishes)) return total
      const { price, isAvailable } = fishes[orderId]
      const amount = order[orderId]
      const subtotal = (isAvailable ? amount : 0) * price
      return total + subtotal
    }, 0)
  }

  render () {
    const { order } = this.props
    const orderIds = Object.keys(order)

    return (
      <div className='order-wrap'>
        <h2>Order</h2>
        <ul className='order'>{orderIds.map(this.renderOrder)}</ul>
        <div className='total'>
          Total:
          <strong>{formatPrice(this.total())}</strong>
        </div>
      </div>
    )
  }
}

export { Order }
