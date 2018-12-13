import React, { Component } from 'react'
import { observer } from 'mobx-react'

import './App.css'

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">React</header>
      </div>
    )
  }
}

export default App
