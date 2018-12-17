import React from 'react'
import ReactDOM from 'react-dom'
import Engine from './Engine'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Engine />, div)
  ReactDOM.unmountComponentAtNode(div)
})
