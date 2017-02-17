import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import { render } from 'react-dom'
import { install } from 'offline-plugin/runtime'

// require('./base.scss')
import App from './components/App/App'

render(<App />, document.getElementById('app'))

if (process.env.NODE_ENV === 'production') {
  install()
}
