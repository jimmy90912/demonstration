import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  {Link}  from 'react-router-dom';


class Header extends React.Component{
  render(){
    return(
      <section id='header'>
        <Navbar expand="lg" className="header-navbar" bg='light' >
          {/* the most basic structure of navibar */}
          <Container>
            <Navbar.Brand className='brand'></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle' />
           
            <Navbar.Collapse id="basic-navbar-nav" className='collapse'>
              <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                <p className='navitem'>Home</p>
              </Nav.Link>
              <Nav.Link as={Link} to="/service1">
                <p className='navitem'>Services</p>
              </Nav.Link>
              <Nav.Link as={Link} to="/Renovation">
                <p className='navitem'> Renovation</p>
              </Nav.Link>
              <Nav.Link as={Link} to="/Import">
                <p className='navitem'> Services</p>
              </Nav.Link>
              <Nav.Link as={Link} to="/Explore">
                <p className='navitem'>Explore</p>
              </Nav.Link>
              <Nav.Link as={Link} to="/Contact">
                <p className='navitem'>Contact Us</p>
              </Nav.Link>
              
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </section>
      
    )
  }
}

export default Header