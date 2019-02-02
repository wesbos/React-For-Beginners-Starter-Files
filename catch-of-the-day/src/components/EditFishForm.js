import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Fish } from './Fish.js'
import { formatPrice, parsePrice } from '../helpers.js'

const EditFishForm = props => {
  const nameRef = useRef()
  const priceRef = useRef()
  const isAvailableRef = useRef()
  const descRef = useRef()
  const imageRef = useRef()

  const handleChange = event => {
    const { name, value } = event.currentTarget
    const { fish, index } = props
    const { updateFish } = props

    const updatedFish = {
      ...fish,
      [name]: name === 'price' ? parsePrice(value) : value
    }
    updateFish(index, updatedFish)
  }

  const {
    index,
    fish: { name, price, isAvailable, desc, image }
  } = props
  const { deleteFish } = props
  return (
    <form className='fish-edit'>
      <input
        name='name'
        ref={nameRef}
        type='text'
        placeholder='Name'
        value={name}
        onChange={handleChange}
      />
      <input
        name='price'
        ref={priceRef}
        type='text'
        placeholder='Price'
        value={formatPrice(price)}
        onChange={handleChange}
      />
      <select
        name='isAvailable'
        ref={isAvailableRef}
        value={isAvailable ? 'available' : 'unavailable'}
        onChange={handleChange}
      >
        <option value='available'>Fresh</option>
        <option value='unavailable'>Sold Out</option>
      </select>
      <textarea
        name='desc'
        ref={descRef}
        type='text'
        placeholder='Description'
        value={desc}
        onChange={handleChange}
      />
      <input
        name='image'
        ref={imageRef}
        type='text'
        placeholder='Image'
        value={image}
        onChange={handleChange}
      />
      <button onClick={() => deleteFish(index)}>Remove Fish</button>
    </form>
  )
}

EditFishForm.propTypes = {
  index: PropTypes.string,
  fish: PropTypes.shape(Fish.propTypes),
  updateFish: PropTypes.func,
  deleteFish: PropTypes.func
}

export { EditFishForm }
