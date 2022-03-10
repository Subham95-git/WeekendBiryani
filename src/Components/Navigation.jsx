import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav, Container} from 'react-bootstrap'
import './style/Navigation.css'
import {  Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" className="navbar" variant="dark">
    <Container>
    <Navbar.Brand >Weekend Biryani</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
    </Nav>
    <Nav >
    
    <Link to='/order' className="navitem">Order</Link>
      <Nav.Link className="navitem">Menu</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </>
    )
}
