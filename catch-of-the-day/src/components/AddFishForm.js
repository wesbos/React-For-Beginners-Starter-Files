import React from "react";

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    
    createFish = event => {
        // 1. stop the from from submitting
        event.preventDefault();
        console.log("fucking please work");
    };
    render () {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
                <input name="price" ref={this.priceRef} type="text" placeholder="Price" /> 
                <select name="status" ref={this.statusRef}>
                  <option value="available">Fresh!</option>
                  <option value="unavailable">Sold Out!</option>
                </select>

                <textarea name="desc" ref={this.descRef} placeholder="Desc" /> 
                <input name="image" ref={this.imageRef} type="text" placeholder="Image" />
                <button type="submit">+ Add Fish</button>
            </form>
        );
    }
}
export default AddFishForm;
