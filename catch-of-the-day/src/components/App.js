import React, { useState, useEffect } from 'react';

import { Header } from './Header';
import { Order } from './Order';
import { Inventory } from './Inventory';
import sampleFishes from "../sample-fishes";
import { Fish } from './Fish';
import base from '../base';

export const App = (props) => {
  const [fishes, setFishes] = useState({});
  const [orders, setOrders] = useState({});
  const storeId = props.match.params.storeId;

  useEffect(() => {
    const ref = base.syncState(`${storeId}/fishes`, {
      context: {
        setState: ({ fishes }) => setFishes({ ...fishes }),
        state: { fishes },
      },
      state: 'fishes'
    })

    return () => {
      base.removeBinding(ref);
    }
  }, [])

  console.log(fishes);

  const addFish = fish => {
    setFishes({ ...fishes, fish });
  };

  const loadSampleFishes = () => {
    setFishes(sampleFishes);
  };

  const addToOrder = key => {
    const ordersCopy = { ...orders };
    ordersCopy[key] = ordersCopy[key] + 1 || 1;
    setOrders(ordersCopy);
  };

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
      <Order fishes={fishes} orders={orders} />
      <Inventory addFish={addFish} loadSampleFishes={loadSampleFishes} />
    </div>
  )
}