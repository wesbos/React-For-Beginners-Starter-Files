import React from "react";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = (event) => {
    event.preventDefault();
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };
    // console.log(fish);
    this.props.addFish(fish);
    // resets the form
    event.currentTarget.reset();
  };
  render() {
    return (
      <div className="AddFishForm">
        <form className="fish-edit" onSubmit={this.createFish}>
          <input
            name="name"
            ref={this.nameRef}
            type="text"
            placeholder="Name"
          />
          <input
            name="price"
            ref={this.priceRef}
            type="text"
            placeholder="Price"
          />
          <select name="status" ref={this.statusRef}>
            <option value="available">Available</option>
            <option value="unavailable">Sold Oot!</option>
          </select>
          <textarea
            name="desc"
            ref={this.descRef}
            type="text"
            placeholder="Desc"
          ></textarea>
          <input
            name="image"
            ref={this.imageRef}
            type="text"
            placeholder="Image"
          />
          <button type="submit">add fish</button>
        </form>
      </div>
    );
  }
}

export default AddFishForm;
