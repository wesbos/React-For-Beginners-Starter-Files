import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import SampleFishes from '../sample-fishes.js';
import Fish from './Fish.js';
import base from '../base';


class App extends React.Component{
    constructor(){
        super();
        this.addFish = this.addFish.bind(this);
        this.loadSample = this.loadSample.bind(this);
        this.addToOrder = this.addToOrder.bind(this); 
        this.updateFish = this.updateFish.bind(this); 
        this.removeFish = this.removeFish.bind(this); 
        this.removeOrder = this.removeOrder.bind(this); 
        
        
        this.state ={
            fishes: {},
            order: {}
        }
    }

    componentWillMount(){
        this.ref = base.syncState(`${this.props.params.storeId}/fishes`
        , {
            context: this,
            state: 'fishes'
        })
        const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);
        if(localStorageRef){
            this.setState({
                order: JSON.parse(localStorageRef)
            })
        }
    }

    componentWillUnmount(){
        base.removeBinding(this.ref)
    }

    componentWillUpdate(nextProps, nextState){
        localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order))
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

    updateFish(key, updateFish){
        const fishes = {...this.state.fishes};
        fishes[key] = updateFish;
        this.setState({ fishes })
    }

    removeFish(key){
        const fishes = {...this.state.fishes};
        //must set to null due to firebase compatibility
        fishes[key] = null;
        this.setState({ fishes })
    }

    removeOrder(key){
        const order = {...this.state.order};
        delete order[key];
        this.setState({ order })
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
                <Order 
                fishes={this.state.fishes} 
                order={this.state.order} 
                params={this.props.params}
                removeOrder={this.removeOrder}
                />
                <Inventory 
                addFish={this.addFish} 
                loadSample={this.loadSample}
                fishes={this.state.fishes}
                updateFish={this.updateFish}
                removeFish={this.removeFish}
                 />
            </div>
        )
    }
}

export default App;

