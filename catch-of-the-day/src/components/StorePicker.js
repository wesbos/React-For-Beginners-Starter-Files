import React from 'react'
import { getFunName } from '../helpers'

class StorePicker extends React.Component{
  // constructor() {             -----------------------this does the same thing as 'onSubmit={this.goToStore.bind(this)}' below
  //   super()
  //   this.goToStore = this.goToStore.bind(this)  ------------good for methods you want to use more than once
  // }
  goToStore(event) {
    event.preventDefault()
    console.log(this.storeInput.value);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        <h2>Please Enter A Store</h2>   { /* this is how you comment in JSX */}
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()}
          ref={(input) => {this.storeInput = input}} />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker
