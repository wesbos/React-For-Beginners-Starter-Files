import React from 'react';
import StatusOptions from './StatusOptions';

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
    }

    this.props.addFish(fish);
    //refresh the form
    event.currentTarget.reset();

  }

  render() {
    return (
      <form action="" className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name"/>
        <input name="price" ref={this.priceRef} type="text" placeholder="Price"/>
        <select name="status" ref={this.statusRef} defaultValue="Fresh">
          <StatusOptions/>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Description"></textarea>
        <input name="image" ref={this.imageRef} type="text" placeholder="Add image"/>

        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
