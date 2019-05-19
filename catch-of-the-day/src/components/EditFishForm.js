import React from 'react';
import PropTypes from 'prop-types';

export default class EditFishForm extends React.Component {
  handleChange = (e) => {
    //update the fish
    const updatedFish = {
      ...this.props.fish,
      [e.currentTarget.name]:e.currentTarget.value
    };
    this.props.updateFish(this.props.index,updatedFish);
  }

  render(){
    return (
      <div className="fish-edit">
        <input type="text" name="name" value={this.props.fish.name} onChange={this.handleChange}/>
        <input type="text" name="price" value={this.props.fish.price} onChange={this.handleChange}/>
        <select type="text" name="status" value={this.props.fish.status} onChange={this.handleChange} >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea type="text" name="desc" value={this.props.fish.desc} onChange={this.handleChange}/>
        <input type="text" name="image" value={this.props.fish.image} onChange={this.handleChange}/>
        <button onClick={()=> this.props.deleteFish(this.props.index)}>Remove Fish</button>
      </div>

    );
  }
};

EditFishForm.propTypes = {
  index:PropTypes.string,
  fish:PropTypes.shape({
    image:PropTypes.string,
    name:PropTypes.string,
    desc:PropTypes.string,
    status:PropTypes.string,
    price:PropTypes.number
  }),
  updateFish:PropTypes.func
}
