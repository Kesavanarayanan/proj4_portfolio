import React from 'react';
import {Container,Navbar,Nav} from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
  <>
  <Navbar collapseOnSelect expand="lg" >
  <Container className="nav-slide mt-lg-4 ml-lg-5 pl-lg-5 pb-lg-3" >
  <Navbar.Brand className='brand-color mr-lg-5 pr-lg-3 pr-xl-5' href="/">Its<span>.mee</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto ml-lg-5 pl-lg-5">
      <Nav.Link className="nav-links pr-lg-5" href="/">Home</Nav.Link>
      <Nav.Link className="nav-links pr-lg-5  " href="/About">About me</Nav.Link>
      <Nav.Link className="nav-links pr-lg-5  " href="/Edu">Education</Nav.Link>
      <Nav.Link className="nav-links pr-lg-5 " href="/Resumesm">Resume</Nav.Link>
      <Nav.Link className="nav-links pr-lg-5  " href="/Contactsm">Contact me</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
 );
 
};

export default Header;
