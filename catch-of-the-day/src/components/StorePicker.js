import React from 'react'

class StorePicker extends React.Component {
  render () {
    return (
      <>
        { /* react needs a single element in render returns, so we wrap */ }
        { /* babel is converting <> to <React.Fragment>, I think */ }
        <h1> fishing time </h1>
        <form className='store-selector'>
          <h2> please enter a store </h2>
          <input type='text' required placeholder='name' />
          <button type='submit'>visit store ↣</button>
        </form>
      </>
    )
  }
}

export { StorePicker }
