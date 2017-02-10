import React, { Component } from 'react'

class StorePicker extends Component {
  render () {
    return (
      <div>
        <form className='store-selector'>
          <h2>Please Enter A Store</h2>
          <input
            onChange={this.handleInputChange}
            required Placeholder='Store Name'
            type='text'
          />
          <button type='submit'>
            Visit Store
          </button>
        </form>
      </div>
    )
  }
}

export default StorePicker
