import React from 'react'
import natwestlogo from './assets/natwestlogo.svg';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';

export default function Header() {
  return (    
      <div className='header'>
      <Navbar bg="#5A2870" expand="lg">
      <Container className='container'>
        <Navbar.Brand >Bank App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav >            
            <NavDropdown title="Products" id="navbarScrollingDropdown" className='navbarScrollingDropdown'>
              <NavDropdown.Item href="#action3" className='dropdown'>Mortgages</NavDropdown.Item>
              <NavDropdown.Item href="#action4" className='dropdown'>Cards</NavDropdown.Item>
              <NavDropdown.Item href="#action4" className='dropdown'>Overdrafts</NavDropdown.Item>              
            </NavDropdown>
            <Nav.Link href="#">Climate</Nav.Link>
            <Nav.Link href="#">Ukraine Refugee</Nav.Link>
            <Button className="btn">Login</Button>
          </Nav>          
        </Navbar.Collapse>
        <Navbar >
            
        </Navbar>
      </Container>
    </Navbar>

    
    </div>
   
  )
}
