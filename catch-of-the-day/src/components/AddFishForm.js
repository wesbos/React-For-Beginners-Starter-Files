import React from 'react';

class AddFishForm extends React.Component {

  createFish(event){
    //Prevent the page from refreshing
    event.preventDefault();

    //Gather the submitted values
    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value
    };

    //Pass this object up to the addFish method found in App.js
    this.props.addFish(fish);

    //Reset the form once it has been submitted
    this.fishForm.reset();

  }


  render() {
    return(
      <form ref={(input) => this.fishForm = input } className="fish-edit" onSubmit={(e) => this.createFish(e)}>
        <input  ref={(input) => this.name = input} type="text" className="name" placeholder="Fish Name"/>
        <input  ref={(input) => this.price = input} type="text" className="price" placeholder="Fish Price"/>
        <select ref={(input) => this.status = input} >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>

        <textarea ref={(input) => this.desc = input}  className="desc" placeholder="Description"/>
        <input ref={(input) => this.image = input}  type="text" className="image" placeholder="Image URL"/>
        <button className="submit">+ Add Item</button>
      </form>
    )
  }
}

export default AddFishForm;
