import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import SampleFishes from '../sample-fishes.js';
import Fish from './Fish.js';


class App extends React.Component{
    constructor(){
        super();
        this.addFish = this.addFish.bind(this);
        this.loadSample = this.loadSample.bind(this);
        this.addToOrder = this.addToOrder.bind(this); 
        this.state ={
            fishes: {},
            order: {}
        }
    }

    addFish(fish){
        const fishes = {...this.state.fishes}
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish;
        this.setState({fishes: fishes});
    }

    loadSample(){
        this.setState({fishes: SampleFishes});
    }

    addToOrder(key){
        const order = {...this.state.order};
        order[key] = order[key] + 1 || 1;
        this.setState({ order });
    }

    render(){
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                    <ul className="list-of-fishes">
                        {
                            Object
                                .keys(this.state.fishes)
                                .map(fish => <Fish 
                                key={fish} index={fish} details={this.state.fishes[fish]} addToOrder={this.addToOrder}
                                />)
                        }
                    </ul> 
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} />
                <Inventory addFish={this.addFish} loadSample={this.loadSample} />
            </div>
        )
    }
}

export default App;

