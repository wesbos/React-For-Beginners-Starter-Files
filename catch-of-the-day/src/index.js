import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match, Miss } from 'react-router'
import './css/style.css'

import App from './components/App'
import StorePicker from './components/StorePicker' //eslint-disable-line
import NotFound from './components/NotFound'

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker} />
        <Match exactly pattern="/store/:storeId" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'))
