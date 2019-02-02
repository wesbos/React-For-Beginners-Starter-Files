import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { formatPrice } from '../helpers.js'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Order = props => {
  const [total, setTotal] = useState(0)
  const { order, fishes } = props
  const orderIds = Object.keys(order)

  // Update total price. passing [order, fishes] doesn't work but thats ok
  useEffect(() => {
    setTotal(
      orderIds.reduce((total, orderId) => {
        if (!(orderId in fishes)) return total
        const { price, isAvailable } = fishes[orderId]
        const count = order[orderId]
        const subtotal = (isAvailable ? count : 0) * price
        return total + subtotal
      }, 0)
    )
  })

  const renderOrder = key => {
    const { removeFromOrder } = props
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
    const count = props.order[key]
    return (
      <CSSTransition {...transitionOptions}>
        <li key={key}>
          <span>
            <TransitionGroup component='span' className='count'>
              <CSSTransition
                classNames='count'
                key={count}
                timeout={transitionOptions.timeout}
              >
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>
            lbs {name}
            <span className='price'>{formatPrice(count * price)}</span>
            <button onClick={() => removeFromOrder(key)}>✘</button>
          </span>
        </li>
      </CSSTransition>
    )
  }

  return (
    <div className='order-wrap'>
      <h2>Order</h2>
      <TransitionGroup component='ul' className='order'>
        {orderIds.map(renderOrder)}
      </TransitionGroup>
      <div className='total'>
        Total:
        <strong>{formatPrice(total)}</strong>
      </div>
    </div>
  )
}

Order.propTypes = {
  order: PropTypes.object,
  fishes: PropTypes.object,
  removeFromOrder: PropTypes.func
}

export { Order }
