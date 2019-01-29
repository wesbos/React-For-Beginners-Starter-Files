import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { App } from './App.js'
import { StorePicker } from './StorePicker.js'
import { NotFound } from './NotFound.js'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={StorePicker} />
      <Route exact path='/store/:storeId' component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export { Router }
