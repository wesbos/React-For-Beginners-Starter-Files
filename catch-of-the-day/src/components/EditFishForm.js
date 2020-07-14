import React from "react";

class EditFishForm extends React.Component {
  render() {
    return (
      <div className="fish-edit">
        <h3>edit fish form</h3>
        <input type="text" name="price"></input>
        <input type="text" name="name"></input>
        <input type="text" name="status"></input>
        <input type="text" name="desc"></input>
        <input type="text" name="image"></input>
      </div>
    );
  }
}

export default EditFishForm;
