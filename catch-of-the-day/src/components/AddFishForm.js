import React from 'react';
import {Component} from 'react';
import PropTypes from "prop-types";

class AddFishForm extends Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    static propType = {
        addFish: PropTypes.func
    }
    createFish = (e) => {
        //1. Stop submitting
        e.preventDefault();

        const fish = {
            image: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        }
        this.props.addFish(fish);
        e.currentTarget.reset();
    };

    render() {
        return <form className="fish-edit" onSubmit={this.createFish}>
            <input name="name" ref={this.nameRef} type="text" placeholder="Name"/>
            <input name="price" ref={this.priceRef} type="text" placeholder="Price"/>
            <select name="status" ref={this.statusRef}>
                <option value="available">Fresh!</option>
                <option value="available">Sold out!!</option>
            </select>

            <textarea name="desc" ref={this.descRef} placeholder="desc"/>
            <input name="image" type="text" ref={this.imageRef} placeholder="image"/>
            <button type="submit"> + Add Fish</button>
        </form>
    }
}

export default AddFishForm;