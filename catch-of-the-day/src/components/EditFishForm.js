import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value,
    };

    this.props.updateFish(this.props.editFishId, updatedFish);
  }

  render() {
    return (
      <div className="fish-edit">
        <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name} />
        <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price} />
        <select type="text" name="status" onChange={this.handleChange} value={this.props.fish.status}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc} />
        <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image} />
        <button onClick={() => this.props.deleteFish(this.props.editFishId)}>Remove Fish</button>
      </div>
    );
  }
}

EditFishForm.propTypes = {
  updateFish: PropTypes.func.isRequired,
  fish: PropTypes.object.isRequired,
  editFishId: PropTypes.string.isRequired,
  deleteFish: PropTypes.func,
};

EditFishForm.defaultProps = {
  deleteFish: () => {},
};

export default EditFishForm;
