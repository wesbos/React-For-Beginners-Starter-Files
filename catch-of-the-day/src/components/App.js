import React from 'react'
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import SampleFishes from '../sample-fishes.js'


class App extends React.Component{
    constructor(){
        super();
        this.addFish = this.addFish.bind(this);
        this.loadSample = this.loadSample.bind(this);
        this.state ={
            fishes: {},
            order: {}
        }
    }

    addFish(fish){
        const fishes = {...this.state.fishes}
        console.log(fishes)
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish;
        this.setState({fishes: fishes});
    }

    loadSample(){
        console.log('hello')
        this.setState({fishes: SampleFishes})
    }

    render(){
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSample={this.loadSample} />
            </div>
        )
    }
}

export default App;

