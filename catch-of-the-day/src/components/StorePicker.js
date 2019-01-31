import React from 'react'
import PropTypes from 'prop-types'
import { getFunName } from '../helpers.js'

class StorePicker extends React.Component {
  storeInput = React.createRef()

  goToStore = event => {
    const {
      storeInput: {
        current: { value: storeName }
      },
      props: { history }
    } = this
    event.preventDefault()
    history.push(`/store/${storeName}`)
  }

  render () {
    return (
      <>
        {/* react needs a single element in render returns, so we wrap */}
        {/* babel is converting <> to <React.Fragment>, I think */}
        <h1> fishing time </h1>
        <form className='store-selector' onSubmit={this.goToStore}>
          <h2> please enter a store </h2>
          <input
            ref={this.storeInput}
            type='text'
            required
            placeholder='store name'
            defaultValue={getFunName()}
          />
          <button type='submit'>visit store ↣</button>
        </form>
      </>
    )
  }
}
StorePicker.propTypes = {
  history: PropTypes.object
}

export { StorePicker }
