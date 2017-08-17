import React from 'react'
import AddFishForm from './AddFishForm'
import base from '../base'

class Inventory extends React.Component {
  constructor() {
    super()
    this.renderInventory = this.renderInventory.bind(this)
    this.renderLogin = this.renderLogin.bind(this)
    this.authenticate = this.authenticate.bind(this)
    this.authHandler = this.authHandler.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      uid: null,
      owner: null
    }
  }

  handleChange(e, key) {
    const fish = this.props.fishes[key]
    const updatedFish = {
      ...fish,
      [e.target.name]: e.target.value
    }
    this.props.updateFish(key, updatedFish)
  }

  authenticate(provider) {
    console.log(`Trying to login with ${provider}`)
    base.authWithOAuthPopup(provider, this.authHandler)
  }

  authHandler(err, authData) {
    console.log('Auth Data', authData)
  }

  renderLogin() {
    return(
      <nav className="login">
        <h2>Inventory</h2>
        <p>Sign in to manage your store's inventory</p>
        <button className="github" onClick={() => this.authenticate('github')} >Log In with GitHub</button>
        <button className="facebook" onClick={() => this.authenticate('facebook')} >Log In with Facebook</button>
        <button className="twitter" onClick={() => this.authenticate('twitter')} >Log In with Twitter</button>
      </nav>
    )
  }

  renderInventory(key) {
    const fish = this.props.fishes[key]
    return (
      <div className="fish-edit" key={key}>
        <input type="text" name="name" value={fish.name} placeholder="Fish Name"
          onChange={(e) => this.handleChange(e, key)} />

        <input type="text" name="price" value={fish.price} placeholder="Fish Price"
          onChange={(e) => this.handleChange(e, key)} />

        <select type="text" name="status" value={fish.status} placeholder="Fish Status"
          onChange={(e) => this.handleChange(e, key)} >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold OUt!</option>
        </select>

        <textarea type="text" name="desc" value={fish.desc} placeholder="Fish Description"
          onChange={(e) => this.handleChange(e, key)} >
        </textarea>

        <input type="text" name="image" value={fish.image} placeholder="Fish Image"
          onChange={(e) => this.handleChange(e, key)} />
        <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
      </div>
    )
  }

  render() {
    const logout = <button>Log Out</button>
    //check if they are not logged in at all
    if(!this.state.uid) {
      return <div>{this.renderLogin()}</div>
    }

    //check if they are the store owner
    if(this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry you are not the owner of this store!</p>
          {logout}
        </div>
      )
    }

    return (
      <div>
        <h2>Inventory</h2>
        {logout}
        {Object.keys(this.props.fishes).map(this.renderInventory)}

        <AddFishForm addFish={this.props.addFish}/>
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    )
  }
}

Inventory.propTypes = {
  fishes: React.PropTypes.object.isRequired,
  updateFish: React.PropTypes.func.isRequired,
  removeFish: React.PropTypes.func.isRequired,
  addFish: React.PropTypes.func.isRequired,
  loadSamples: React.PropTypes.func.isRequired
}

export default Inventory
