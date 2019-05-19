import React from 'react';
import PropTypes from 'prop-types';

export default class Header extends React.Component{
  render(){
    return (
      <header className="top">
        <h1>Catch
          <span className="ofThe">
          <span className="of">of</span>
          <span className="the">the</span>
        </span>
         Day</h1>
        <h3 className="tagline">
          <span>{this.props.tagline}</span>
        </h3>
      </header>
    )
  }
}

Header.propTypes = {
  tagline: PropTypes.string.isRequired
}
