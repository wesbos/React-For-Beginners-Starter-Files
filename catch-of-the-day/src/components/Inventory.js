import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import firebase from "firebase";

import { AddFishForm } from './AddFishForm';
import { EditFishForm } from './EditFishForm';
import { Login } from './Login';
import base, { firebaseApp } from '../base';

export const Inventory = ({ fishes, addFish, updateFish, deleteFish, loadSampleFishes, storeId }) => {
  const [userId, setUserId] = useState(null);
  const [storeOwner, setStoreOwner] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        authHandler(user);
      }
    })
  }, []);

  const authHandler = async (authData) => {
    setUserId(authData.uid);
    const store = await base.fetch(storeId, { context: null });
    if (!store.owner) {
      await base.post(`${storeId}/owner`, {
        data: authData.uid
      });
      setStoreOwner(authData.uid)
    } else {
      setStoreOwner(store.owner);
    }
  }
  const authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`];
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then((res) => authHandler(res.user));
  }

  const logout = async () => {
    await firebase.auth().signOut();
    setUserId(null);
    setStoreOwner(null);
  }

  const LogOut = () => (
    <button type="button" onClick={logout}>Log Out!</button>
  )

  if (!userId) {
    return <Login authenticate={authenticate} />
  }

  if (userId && storeOwner && userId !== storeOwner) {
    return (
      <div>
        <p>Sorry you are not the owner!</p>
        <LogOut />
      </div>
    )
  }

  return (
    <div className="inventory">
      <h2>Inventory</h2>
      <LogOut />
      {Object.keys(fishes).map(key =>
        <EditFishForm
          key={key}
          index={key}
          fish={fishes[key]}
          updateFish={updateFish}
          deleteFish={deleteFish}
        />
      )}
      <AddFishForm addFish={addFish} />
      <button onClick={loadSampleFishes}>Load Sample Fishes</button>
    </div>
  )
}


Inventory.propTypes = {
  fishes: PropTypes.object,
  addFish: PropTypes.func,
  updateFish: PropTypes.func,
  deleteFish: PropTypes.func,
  loadSampleFishes: PropTypes.func
};