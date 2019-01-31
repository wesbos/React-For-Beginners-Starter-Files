import React from 'react'
import PropTypes from 'prop-types'
import { formatPrice } from '../helpers.js'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

class Order extends React.Component {
  renderOrder = key => {
    const { fishes } = this.props
    const { removeFromOrder } = this.props
    if (!(key in fishes)) return null
    const { name, price, isAvailable } = fishes[key]
    const transitionOptions = {
      key,
      classNames: 'order',
      timeout: { enter: 500, exit: 500 }
    }
    if (!isAvailable) {
      return (
        <CSSTransition {...transitionOptions}>
          <li key={key}>Sorry, {name || 'fish'} is no longer available!</li>
        </CSSTransition>
      )
    }
    const count = this.props.order[key]
    return (
      <CSSTransition {...transitionOptions}>
        <li key={key}>
          <span>
            <TransitionGroup component='span' className='count'>
              <CSSTransition
                classNames='count'
                key={count}
                timeout={{ enter: 500, exit: 500 }}
              >
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>
            lbs {name}
            {formatPrice(count * price)}
            <button onClick={() => removeFromOrder(key)}>✘</button>
          </span>
        </li>
      </CSSTransition>
    )
  }

  total () {
    const { order, fishes } = this.props
    const orderIds = Object.keys(order)
    return orderIds.reduce((total, orderId) => {
      if (!(orderId in fishes)) return total
      const { price, isAvailable } = fishes[orderId]
      const count = order[orderId]
      const subtotal = (isAvailable ? count : 0) * price
      return total + subtotal
    }, 0)
  }

  render () {
    const { order } = this.props
    const orderIds = Object.keys(order)

    return (
      <div className='order-wrap'>
        <h2>Order</h2>
        <TransitionGroup component='ul' className='order'>
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>
        <div className='total'>
          Total:
          <strong>{formatPrice(this.total())}</strong>
        </div>
      </div>
    )
  }
}

Order.propTypes = {
  order: PropTypes.object,
  fishes: PropTypes.object,
  removeFromOrder: PropTypes.func
}

export { Order }
