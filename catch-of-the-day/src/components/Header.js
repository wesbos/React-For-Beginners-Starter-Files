import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ tagline }) => (
  <header className='top'>
    <h1>
      swiggity
      <span className='ofThe'>
        <span className='of'>dat</span>
        <span className='the'>booty</span>
      </span>
      swooty
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
