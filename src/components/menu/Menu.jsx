import React from 'react'
import "./menu.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Menu = () => {
  return (
      <Navbar expand="lg" className='menu-bg'>
      <Container>
        <Navbar.Brand href="#home">bwfc</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">product</Nav.Link>
            <Nav.Link href="#link">template</Nav.Link>
            <Nav.Link href="#link">blog</Nav.Link>
            <Nav.Link href="#link">pricing</Nav.Link>
            <a className='sign' href="#">sign in</a>
            <Button variant="primary">start free</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu
