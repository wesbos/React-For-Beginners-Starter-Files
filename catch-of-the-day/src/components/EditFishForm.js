import React from 'react'
import PropTypes from 'prop-types'
import { Fish } from './Fish.js'
import { formatPrice, parsePrice } from '../helpers.js'

class EditFishForm extends React.Component {
  handleChange = event => {
    const { name, value } = event.currentTarget
    const { fish, index } = this.props
    const { updateFish } = this.props

    const updatedFish = {
      ...fish,
      [name]: name === 'price' ? parsePrice(value) : value
    }
    updateFish(index, updatedFish)
  }
  render () {
    const {
      index,
      fish: { name, price, isAvailable, desc, image }
    } = this.props
    const { deleteFish } = this.props
    return (
      <form className='fish-edit'>
        <input
          name='name'
          ref={this.nameRef}
          type='text'
          placeholder='Name'
          value={name}
          onChange={this.handleChange}
        />
        <input
          name='price'
          ref={this.priceRef}
          type='text'
          placeholder='Price'
          value={formatPrice(price)}
          onChange={this.handleChange}
        />
        <select
          name='isAvailable'
          ref={this.isAvailableRef}
          value={isAvailable ? 'available' : 'unavailable'}
          onChange={this.handleChange}
        >
          <option value='available'>Fresh</option>
          <option value='unavailable'>Sold Out</option>
        </select>
        <textarea
          name='desc'
          ref={this.descRef}
          type='text'
          placeholder='Description'
          value={desc}
          onChange={this.handleChange}
        />
        <input
          name='image'
          ref={this.imageRef}
          type='text'
          placeholder='Image'
          value={image}
          onChange={this.handleChange}
        />
        <button onClick={() => deleteFish(index)}>Remove Fish</button>
      </form>
    )
  }
}

EditFishForm.propTypes = {
  index: PropTypes.string,
  fish: PropTypes.shape(Fish.propTypes),
  updateFish: PropTypes.func,
  deleteFish: PropTypes.func
}

export { EditFishForm }
