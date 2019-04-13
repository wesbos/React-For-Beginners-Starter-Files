import React from 'react';

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
          <span>Fresh Daily</span>
        </h3>
      </header>
    )
  }
}
