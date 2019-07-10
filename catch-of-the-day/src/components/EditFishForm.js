import React, { Fragment } from "react";
import AddFishForm from "./AddFishForm";
import StatusOptions from "./StatusOptions";

class EditFishForm extends React.Component {
  handleChange = event => {
    //1. Take a copy of the curremt fish
    const updatedFish = {
      ...this.props.fish,

      //computed property names (ES6)
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    return (
      <Fragment>
        <div className="fish-edit">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleChange}
            value={this.props.fish.name}
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            onChange={this.handleChange}
            value={this.props.fish.price}
          />
          <select
            name="status"
            onChange={this.handleChange}
            value={this.props.fish.status}
          >
            <StatusOptions />
          </select>
          <textarea
            name="desc"
            placeholder="Desc"
            onChange={this.handleChange}
            value={this.props.fish.desc}
          />
          <input
            type="text"
            name="image"
            placeholder="Image"
            onChange={this.handleChange}
            value={this.props.fish.image}
          />
          <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
        </div>
      </Fragment>
    );
  }
}

export default EditFishForm;
