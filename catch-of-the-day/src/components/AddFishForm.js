import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { parsePrice } from '../helpers.js'

const AddFishForm = props => {
  const nameRef = useRef()
  const priceRef = useRef()
  const isAvailableRef = useRef()
  const descRef = useRef()
  const imageRef = useRef()

  const createFish = event => {
    event.preventDefault()
    const { addFish } = props
    addFish({
      name: nameRef.current.value,
      price: parsePrice(priceRef.current.value),
      isAvailable: isAvailableRef.current.value === 'available',
      desc: descRef.current.value,
      image: imageRef.current.value
    })
    event.currentTarget.reset()
  }

  return (
    <form className='fish-edit' onSubmit={createFish}>
      <input name='name' ref={nameRef} type='text' placeholder='Name' />
      <input name='price' ref={priceRef} type='text' placeholder='Price' />
      <select name='isAvailable' ref={isAvailableRef}>
        <option value='available'>Fresh</option>
        <option value='unavailable'>Sold Out</option>
      </select>
      <textarea
        name='desc'
        ref={descRef}
        type='text'
        placeholder='Description'
      />
      <input name='image' ref={imageRef} type='text' placeholder='Image' />
      <button type='submit'>+ Add Fish</button>
    </form>
  )
}

AddFishForm.propTypes = {
  addFish: PropTypes.func
}
export { AddFishForm }
