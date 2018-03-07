import React, {Component} from 'react'
import Login from './pages/Login.jsx'
import { HashRouter, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'

class App extends Component {
  render() {
    return(

      <HashRouter>
        <div>
          <Route exact path = "/" component = { Login } />
          <Route exact path = "/dashboard" component = { Dashboard } />
        </div>
      </HashRouter>
    )
  }
}

module.exports = App