import React, {Component} from 'react'
import Login from './pages/Login.jsx'
import { HashRouter, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import Graphics from './pages/Graphics.jsx'

class App extends Component {
  render() {
    return(

      <HashRouter>
        <div>
          <Route exact path = "/" component = { Login } />
          <Route exact path = "/dashboard" component = { Dashboard } />
          <Route exact path = "/graphics" component = { Graphics } />
        </div>
      </HashRouter>
    )
  }
}

module.exports = App