import React from 'react';

const Header = (props) => {
 return (
    <header className='top'>
      <h1>
      Catch 
      <span className='ofThe'>
        <span className='of'>of</span>
        <span className='the'>the</span>
      </span>
      Day
      </h1>
    {/*this refers to the component, so here, Header
    and props is the object with all of our data*/}
      <h3 className='tagline'><span>{props.tagline}</span></h3>
    </header>
    )
}

//function Header () {

 


export default Header;