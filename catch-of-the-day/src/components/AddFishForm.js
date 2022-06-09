import React, { useRef } from 'react';
import PropTypes from "prop-types";

export const AddFishForm = ({ addFish }) => {
  const nameRef = useRef();
  const priceRef = useRef();
  const statusRef = useRef();
  const descRef = useRef();
  const imageRef = useRef();

  const createFish = (event) => {
    event.preventDefault();
    const fish = {
      name: nameRef.current.value,
      price: priceRef.current.value.length > 0 ? parseFloat(priceRef.current.value) : 0,
      status: statusRef.current.value,
      desc: descRef.current.value,
      image: imageRef.current.value
    };
    const isEmpty = Object.values(fish).some(x => x === null || x === "");
    if (!isEmpty) {
      addFish(fish);
      event.currentTarget.reset();
    }
  }

  return (
    <form className="fish-edit" onSubmit={createFish}>
      <input ref={nameRef} type="text" name="name" placeholder="name" />
      <input ref={priceRef} type="text" name="price" placeholder="price" />
      <select ref={statusRef} name="status">
        <option value="available">Fresh</option>
        <option value="unavailable">Sold Out</option>
      </select>
      <textarea ref={descRef} placeholder="description" />
      <input ref={imageRef} type="text" name="image" placeholder="image" />
      <button type="submit">+ Add Fish</button>
    </form>
  )
}

AddFishForm.propTypes = {
  addFish: PropTypes.func.isRequired
};
