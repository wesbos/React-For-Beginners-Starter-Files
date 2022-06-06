import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { StorePicker } from './StorePicker'
import { App } from './App'
import { NotFound } from "./NotFound"

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StorePicker} />
        <Route exact path="/store/:sotreId" component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}
