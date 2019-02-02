import React from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase'
import base, { firebaseApp } from '../base.js'
import { Fish } from './Fish.js'
import { AddFishForm } from './AddFishForm.js'
import { EditFishForm } from './EditFishForm.js'
import { Login } from './Login.js'

class Inventory extends React.Component {
  state = {
    uid: null,
    owner: null
  }

  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler(user)
      }
    })
  }

  authHandler = async auth => {
    const { storeId } = this.props
    const {
      user: { uid }
    } = auth
    const store = await base.fetch(storeId, { context: this })

    if (!store.owner) await base.post(`${storeId}/owner`, { data: uid })

    this.setState({ uid, owner: store.owner || uid })
  }

  authenticate = provider => {
    const authProvider = (() => {
      switch (provider) {
        case 'Github':
          return new firebase.auth.GithubAuthProvider()
        default:
          return Error(`unknown auth provider '${provider}'`)
      }
    })()

    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler)
  }

  logout = async () => {
    await firebase.auth().signOut()
    this.setState({ uid: null })
  }

  render () {
    const logout = <button onClick={this.logout}>Log Out!</button>
    const { uid, owner } = this.state

    if (!uid) return <Login authenticate={this.authenticate} />

    if (uid !== owner) {
      return (
        <div>
          <h2>You have no power here!</h2>
          {logout}
        </div>
      )
    }

    const { fishes } = this.props
    const { addFish, updateFish, deleteFish, loadSampleFishes } = this.props

    return (
      <div className='inventory'>
        <h2>Inventory</h2>
        {logout}
        {Object.keys(fishes).map(key => (
          <EditFishForm
            fish={fishes[key]}
            key={key}
            index={key}
            updateFish={updateFish}
            deleteFish={deleteFish}
          />
        ))}
        <AddFishForm addFish={addFish} />
        <button onClick={loadSampleFishes}> Load Sample Fishes</button>
      </div>
    )
  }
}

Inventory.propTypes = {
  fishes: PropTypes.objectOf(PropTypes.shape(Fish.propTypes)),
  addFish: PropTypes.func,
  updateFish: PropTypes.func,
  deleteFish: PropTypes.func,
  loadSampleFishes: PropTypes.func
}

export { Inventory }
