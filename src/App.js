import React, { Component } from 'react'
import { BrowserRouter,Router,Switch } from 'react-router-dom'
import login from './pages/Login'
import admin from './pages/Admin'
export default class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <Switch>{/* {只匹配其中的一个} */}
          <Router path='/login' Component={login}></Router>
          <Router path='/admin' Component={admin}></Router>
        </Switch>
      </BrowserRouter>
    )
  }
}


