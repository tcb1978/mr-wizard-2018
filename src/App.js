import React, { Component } from 'react'
import './App.css'
import routes from './routes/routes'
import Aux from './hoc/Aux'

class App extends Component {
  render() {
    return (
      <Aux>
        {routes}
      </Aux>
    )
  }
}

export default App
