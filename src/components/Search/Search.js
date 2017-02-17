import React from 'react'
import { Col, Container, Row } from 'reactstrap'

let styles = require('./Search.scss')

export default class Search extends React.Component {
  constructor () {
    super()
  }
	
  render () {
    return (
      <div>
        <Row>
					<Col xs={12} className={styles.container}>
						<h2>Hola estoy dentro</h2>
					</Col>
				</Row>
			</div>
    )
  }
}
