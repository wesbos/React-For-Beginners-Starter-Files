import React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
class Header extends Component {
    render() {
        return (
            <>
                <header className="top">
                    <h1>Catch
                        <span className='ofThe'>
                        <span className='of'>of</span>
                        <span className="the">The</span>
                         </span>day
                    </h1>
                    <h3 className="tagLine">
                        <span>{this.props.tagline}</span>
                    </h3>

                </header>
            </>
        )
    }
}

export default Header;