import React from 'react';

class Header extends React.Component{
    render(){
        return(
        <header className='top'>
            <h1>Breads 
                <span className='ofThe'>
                    <span className='of'> of</span>
                    <span className='the'> the</span>    
                </span> Gods</h1>
            <h3 className='tagline'>
                <span>Fresh Baked Daily</span>
            </h3>
        </header>
        )
    }
}

export default Header;