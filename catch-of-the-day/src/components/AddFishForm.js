import React from 'react';

class AddFishForm extends React.Component {
nameRef = React.createRef();
priceRef = React.createRef();
statusRef = React.createRef();
descRef = React.createRef();
imageRef = React.createRef();

	createFish = (event) => {
		// 1. stop the form from submitting
		event.preventDefault();
		const fish = {
			name: this.nameRef.value.value,
			price: parseFloat(this.priceRef.value.value), 
			status: this.statusRef.value.value,
			desc: this.descRef.value.value,
			image: this.imageRef.value.value,
		};
		console.log(fish);
		this.props.addFish(fish);
		// refresh the form
		event.currentTarget.reset();
	};

	render() {
		return (
			<form className="fish-edit" onSubmit={this.createFish}>
				<input name="name	" ref={this.nameRef} type="text" placeholder="Name" data-lpignore="true"/>
				<input name="price" ref={this.priceRef} type="text" placeholder="Price" data-lpignore="true"/>
				<select name="status" ref={this.statusRef} >
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea name="desc" ref={this.descRef} placeholder="Description" />
				<input name="image" ref={this.imageRef} type="text" placeholder="Image" data-lpignore="true"/>
				<button type="submit">+ Add Fish</button>
			</form>	
		)
	}
};

export default AddFishForm;
