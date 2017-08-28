import React from 'react';

class AddFishForm extends React.Component {
  createFish(e) {
    e.preventDefault();
    console.log("Yay")
  }

  render() {
    return (
      <form className="fish-edit" onSubmit={(e) => this.createFish(e)}>
        <input type="text" placeholder="Fish Name"/>
        <input type="text" placeholder="Fish Price"/>
        <select>
          <option value="avaliable">Fresh!</option>
          <option value="unavaliable">Sold Out!</option>
        </select>
        <textarea type="text" placeholder="Fish Desc"></textarea>
        <input type="text" placeholder="Fish Image"/>
        <button type="submit"></button>
      </form>
    )
  }
}

export default AddFishForm;
