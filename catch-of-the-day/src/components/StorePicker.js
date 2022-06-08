import React, { useRef } from "react";
import { getFunName } from "../helpers";
import PropTypes from "prop-types";

export const StorePicker = (props) => {
  const myInput = useRef();

  const goToStore = (event) => {
    event.preventDefault();
    props.history.push(`/store/${myInput.current.value}`);
  };

  return (
    <form className="store-selector" onSubmit={goToStore}>
      <h2>Please Enter A Store</h2>
      <input
        type="text"
        ref={myInput}
        required
        placeholder="Sotre Name"
        defaultValue={getFunName()}
      />
      <button type="submit">Visit Store</button>
    </form>
  );
};

StorePicker.propTypes = {
  history: PropTypes.object
};
