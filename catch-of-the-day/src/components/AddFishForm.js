import React from 'react';
import PropTypes from 'prop-types';

export default class AddFishForm extends React.Component{
  nameRef = React.createRef();
  priceRef  = React.createRef();
  descRef  = React.createRef();
  statusRef = React.createRef();
  imageRef = React.createRef();

  createFish = e => {
    e.preventDefault();
    const fish = {
      name:this.nameRef.current.value,
      price:parseFloat(this.priceRef.current.value),
      desc:this.descRef.current.value,
      image:this.imageRef.current.value,
      status:this.statusRef.current.value
    }
    this.props.addFish(fish);
    //refresh the form
    e.currentTarget.reset();
  };

  render(){
    return (
      <div className="inventory">
        <form className="fish-edit" onSubmit={this.createFish}>
          <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
          <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
          <select name="status" ref={this.statusRef}>
            <option value="available">Fresh!</option>
            <option value="unavailable">Sold Out!</option>
          </select>
          <textarea name="desc" ref={this.descRef} type="text" placeholder="Description" />
          <input name="image"  ref={this.imageRef} type="text" placeholder="Image" />
          <button type="submit">Add Fish</button>
        </form>
      </div>
    );
  }
}

AddFishForm.propTypes = {
  addFish:PropTypes.func
}
