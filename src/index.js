import React from 'react'
import ReactDOM from 'react-dom'
import Engine from './engine'
import * as serviceWorker from './serviceWorker'

import './assets/styles/index.module.less'

ReactDOM.render(<Engine />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
