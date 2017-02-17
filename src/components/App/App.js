import React from 'react'
import { Button } from 'reactstrap'
import 'normalize.css'
let styles = require('./App.scss')

import NavBar from '../Navbar/NavBar'

const App = () => (
  <div>
    <NavBar />
    <div className={styles.container}>
      <h1>Volaires - planes</h1>
      <Button color='primary'>primary</Button>{' '}
      <Button color='secondary'>secondary</Button>{' '}
      <Button color='primary' size='lg' block>Block level button</Button>
    </div>
  </div>
)

export default App
