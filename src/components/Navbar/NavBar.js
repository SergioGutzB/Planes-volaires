import React from 'react'
import { Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

let styles = require('./Navbar.scss')
let imgLogoPng = require('../../assets/logo.png')
// let imgLogoSvg = require('../../assets/logo.svg')

export default class NavBar extends React.Component {
  constructor () {
    super()

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render () {
    return (
      <div className={styles.container}>
        <Col md={{ size: 10, offset: 1 }} className={styles.nopadding}>
          <Navbar light fixed toggleable className={styles.navbar}>
            <NavbarToggler className={styles.navbar__toogler} right onClick={this.toggle} />
            <NavbarBrand className={styles.navbar__brand} href='/'><img src={imgLogoPng} alt='Volaires' /></NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className={styles.navbar__nav} navbar>
                <NavItem className={styles.navbar__nav__item}>
                  <NavLink active href='#'>VUELOS</NavLink>
                </NavItem>
                <NavItem className={styles.divider__vertical} />
                <NavItem className={styles.navbar__nav__item}>
                  <NavLink href='#'>HOTELES</NavLink>
                </NavItem>
                <NavItem className={styles.divider__vertical} />
                <NavItem className={styles.navbar__nav__item}>
                  <NavLink href='#'>PLANES</NavLink>
                </NavItem>
                <NavItem className={styles.divider__vertical} />
                <NavItem className={styles.navbar__nav__item}>
                  <NavLink href='#'>VUELO + HOTEL</NavLink>
                </NavItem>
                <NavItem className={styles.divider__vertical} />
                <NavItem className={styles.navbar__nav__item}>
                  <NavLink href='#'>CARROS</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Col>
      </div>
    )
  }
}
