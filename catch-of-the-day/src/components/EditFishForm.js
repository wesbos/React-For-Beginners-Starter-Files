import React from 'react';
import PropTypes from "prop-types";

export const EditFishForm = ({ index, fish, updateFish, deleteFish }) => {
  if (!fish) return null;
  const onChange = event => {
    const updatedFish = {
      ...fish,
      [event.currentTarget.name]: event.currentTarget.name === "price" ?
        (event.currentTarget.value.length > 0 ? parseFloat(event.currentTarget.value) : 0) : event.currentTarget.value
    }
    updateFish(index, updatedFish);
  }

  return (
    <div className="fish-edit" >
      <input type="text" name="name" placeholder="name" value={fish.name} onChange={onChange} />
      <input type="string" name="price" placeholder="price" value={fish.price} onChange={onChange} />
      <select name="status" value={fish.status} onChange={onChange}>
        <option value="available">Fresh</option>
        <option value="unavailable">Sold Out</option>
      </select>
      <textarea placeholder="description" value={fish.desc} onChange={onChange} />
      <input type="text" name="image" placeholder="image" value={fish.image} onChange={onChange} />
      <button onClick={() => deleteFish(index)}>Remove Fish</button>
    </div>
  )
}

EditFishForm.propTypes = {
  index: PropTypes.string,
  fish: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    desc: PropTypes.string,
    status: PropTypes.string,
    price: PropTypes.number
  }),
  updateFish: PropTypes.func,
  deleteFish: PropTypes.func
};
