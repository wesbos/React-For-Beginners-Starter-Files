import React from 'react';
import {Component} from 'react'
import {getFunName} from "../helpers";
import PropTypes from "prop-types";
class StorePicker extends Component {
    myInput= React.createRef();
    static propTypes = {
        history: PropTypes.object
    }
    goToStore = event => {
        event.preventDefault();
        const storeName = this.myInput.current.value;
        this.props.history.push(`/store/${storeName}`);
    }
render(){
    return (
        <form className='store-selector' onSubmit={this.goToStore}>
            <h2>Please Enter A Store</h2>
            <input
                type="text"
                ref={this.myInput}
                required
                placeholder="Store Name"
                defaultValue={getFunName()}
            />
            <button type='submit'>Visit Store</button>
        </form>
    )
}
}

export default StorePicker;