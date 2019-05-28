import React from "react";
import {formatPrice} from "../helpers";

class Order extends React.Component{
	
renderOrder = (key) =>{

	const fish = this.props.fishes[key];
	const count = this.props.order[key];
	const isAvailable = fish && fish.status === "available";
	//make sure fish is loaded from local storage before we continue
	if (!fish) {return null;}
	if (!isAvailable) {
		return <li> Sorry {fish ? fish.name : "fish"} is no longer available</li>
	}
	return <li>
		{count} lbs. {fish.name} 
		{formatPrice(count * fish.price)}
	</li>
}
	render(){
		const orderIds = Object.keys(this.props.order);
		const total = orderIds.reduce((prevTotal, key)=>{
			const fish = this.props.fishes[key];
			const count = this.props.order[key];
			const isAvailable = fish && fish.status === "available";
			if (isAvailable) {
				return prevTotal + (count * fish.price);
			}
			return prevTotal;
		},0);
		return (
			<div className="order-wrap">
				<ul className="order">{orderIds.map(this.renderOrder)}</ul>
				<div>
				Total
					<strong>{formatPrice(total)}</strong>
				</div>
			</div>
		)
	}
}

export default Order;