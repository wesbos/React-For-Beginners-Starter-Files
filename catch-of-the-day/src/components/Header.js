import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ tagline }) => (
  <header className='top'>
    <h1>
      swig
      <span className='ofThe'>
        <span className='of'>dat</span>
        <span className='the'>boo</span>
      </span>
      swoo
    </h1>
    <h3 className='tagline'>
      <span>{tagline}</span>
    </h3>
  </header>
)

Header.propTypes = {
  tagline: PropTypes.string.isRequired
}

export { Header }
