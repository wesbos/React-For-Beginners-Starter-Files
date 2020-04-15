import React from 'react';
import PropTypes from "prop-types";
import {Component} from 'react';
import Header from '../components/Header.js';
import Order from '../components/Order.js';
import Inventory from '../components/Inventory.js';
import sampleFishes from '../sample-fishes';
import '../css/style.css';
import Fish from '../components/Fish.js';
import base from "../base";


class App extends Component {
    state = {
        fishes: {},
        order: {}
    };
    static propsType = {
        match: PropTypes.object
    }
    componentDidMount() {
        const {params} = this.props.match;
        const localStorageRef = localStorage.getItem(params.storeId);
        if (localStorageRef) {
            this.setState({order: JSON.parse(localStorageRef)});
        }
        this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }

    componentDidUpdate() {
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addFish = fish => {
        // 1. Take a copy of the existing state
        const fishes = {...this.state.fishes};
        // 2. Add our new fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish;
        // 3. Set the new fishes object to state
        this.setState({fishes});
    };

    updateFish = (key, updateFish) => {
        //1. take a copy of the current state
        const fishes = {...this.state.fishes};
        //2. Update that state
        fishes[key] = updateFish;
        //3.Set that to state
        this.setState({fishes});
    };
    deleteFish = (key) => {
        //1. take a copy of the current state
        const fishes = {...this.state.fishes};
        //2. Update that state
        fishes[key] = null;
        //3. Update that state
        this.setState({fishes});
    }
    loadSampleFishes = () => {
        this.setState({fishes: sampleFishes})
    };
//Order section
    addToOrder = key => {
        // 1. take a copy of state
        const order = {...this.state.order};
        // 2. Either add to the order, or update the number in our order
        order[key] = order[key] + 1 || 1;
        // 3. Call setState to update our state object
        this.setState({order});
    };
    removeFromOrder = key => {
        // 1. take a copy of state
        const order = {...this.state.order};
        // 2. Delete from that item from order
       delete order[key];
        // 3. Call setState to update our state object
        this.setState({order});
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh seafood market"/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish
                                key={key}
                                index={key}
                                details={this.state.fishes[key]}
                                addToOrder={this.addToOrder}
                            />
                        ))}
                    </ul>
                </div>
                <Order fishes={this.state.fishes}
                       order={this.state.order}
                       removeFromOrder={this.removeFromOrder}
                />
                <Inventory addFish={this.addFish}
                           updateFish={this.updateFish}
                           deleteFish={this.deleteFish}
                           loadSampleFishes={this.loadSampleFishes}
                           fishes={this.state.fishes}
                />
            </div>
        )
    }
}

export default App;