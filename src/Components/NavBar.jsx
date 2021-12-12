import React from 'react'
import PropTypes from 'prop-types';
import Rate from './Rate';
import { Link } from "react-router-dom";
import {  Navbar, Container, Nav, Form, Button, NavDropdown, FormControl} from 'react-bootstrap';
import Home from './Pages/Home';

const NavBar = ({ handleSearch, setRatingSearch, ratingSearch }) => {

    
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#"><h1><i>Vues</i></h1></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Link to= "/">
        <Nav.Link href="#action1">Home</Nav.Link>
        </Link>
       
        <Nav.Link href="#action2">TV Series</Nav.Link>
        <NavDropdown title="Genre" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Adventure</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Children
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Rate
          className='star-rating'
          starIndex={setRatingSearch}
          rating={ratingSearch}
        />
        
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={handleSearch}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

NavBar.propTypes = {
    handleSearch: PropTypes.func.isRequired,
  };

export default NavBar;