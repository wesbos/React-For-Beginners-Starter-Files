import React from 'react';

const Header = ( props) => (
        <header className='top'>
            <h1>Breads 
                <span className='ofThe'>
                    <span className='of'> of</span>
                    <span className='the'> the</span>    
                </span> Gods</h1>
            <h3 className='tagline'>
                <span>{props.tagline}</span>
            </h3>
        </header>
)


export default Header;