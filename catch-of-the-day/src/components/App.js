import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";


class App extends React.Component{
	state = {
		fishes: {},
		order:{}
	};
	addFish = (fish) => {
		//always update state with these steps
		//1. Take a copy/snapshot of existing state
		const fishes = {...this.state.fishes};
		//2. Add new instance to that variable
		fishes[`fish${Date.now()}`] = fish;
		//3. Set new fishes object to state
		this.setState({
			fishes:fishes
		});

	}
	render(){
		return(
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market"/>
				</div>
				<Order/>
				<Inventory addFish={this.addFish}/>
			</div>
		);
	}
}

export default App;