import React from 'react';
import PropTypes from "prop-types";

export const Login = (props) => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Sign in to manage your store&apos;s inventory</p>
    <button
      type="button"
      className="github"
      onClick={() => props.authenticate("Github")}
    >
      Log In With Github
    </button>
    <button
      type="button"
      className="facebook"
      onClick={() => props.authenticate("Facebook")}
    >
      Log In With Facebook
    </button>
  </nav>
)

Login.propTypes = {
  authenticate: PropTypes.func
};
