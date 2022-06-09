import React, { useState, useEffect, useMemo } from 'react';

import { Header } from './Header';
import { Order } from './Order';
import { Inventory } from './Inventory';
import sampleFishes from "../sample-fishes";
import { Fish } from './Fish';
import { firebaseApp } from '../base';
import PropTypes from "prop-types";

export const App = (props) => {
  const storeId = props.match.params.storeId;
  const [fishes, setFishes] = useState({});
  const [orders, setOrders] = useState(localStorage.getItem(storeId) ? JSON.parse(localStorage.getItem(storeId)) : {});
  const memorizedFishes = useMemo(() => fishes, [fishes]);
  const memorizedOrders = useMemo(() => orders, [orders]);

  useEffect(() => {
    firebaseApp.database().ref(`${storeId}/fishes`).on('value', snapshot => {
      if (snapshot.val()) {
        setFishes(snapshot.val());
      }
    });
  }, []);

  useEffect(() => {
    firebaseApp.database().ref(`${storeId}/fishes`).update(memorizedFishes);
  }, [memorizedFishes]);

  useEffect(() => {
    localStorage.setItem(storeId, JSON.stringify(memorizedOrders));
  }, [memorizedOrders])


  const addFish = fish => {
    const fishesCopy = { ...fishes };
    fishesCopy[`fish${Date.now()}`] = fish;
    setFishes(fishesCopy);
  };

  const updateFish = (key, updatedFish) => {
    const fishesCopy = { ...fishes };
    fishesCopy[key] = updatedFish;
    setFishes(fishesCopy);
  };

  const deleteFish = key => {
    const fishesCopy = { ...fishes };
    fishesCopy[key] = null;
    setFishes(fishesCopy);
    removeFromOrder(key);
  }

  const loadSampleFishes = () => {
    setFishes(sampleFishes);
  };

  const addToOrder = key => {
    const ordersCopy = { ...orders };
    ordersCopy[key] = ordersCopy[key] + 1 || 1;
    setOrders(ordersCopy);
  };

  const removeFromOrder = key => {
    const ordersCopy = { ...orders };
    delete ordersCopy[key];
    setOrders(ordersCopy);
  }

  return (
    <div className="catch-of-the-day">
      <div className="menu">
        <Header tagline="Fresh Seafood Market" />
        <ul className="fishes">
          {Object.keys(fishes).map(key => (
            <Fish key={key} fish={fishes[key]} addToOrder={addToOrder} identifier={key} />
          ))}
        </ul>
      </div>
      <Order
        fishes={fishes}
        orders={orders}
        removeFromOrder={removeFromOrder}
      />
      <Inventory
        fishes={fishes}
        addFish={addFish}
        updateFish={updateFish}
        deleteFish={deleteFish}
        loadSampleFishes={loadSampleFishes}
        storeId={storeId}
      />
    </div>
  )
}

App.propTypes = {
  match: PropTypes.object
};