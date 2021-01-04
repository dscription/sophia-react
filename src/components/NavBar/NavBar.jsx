import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';

const Navigation = ({ user, handleLogout }) => {
  return (
    <>
      {user ? (
        <Navbar
          variant="dark"
          style={{ background: '#536878', borderBottom: '1px solid #5bc0de' }}
        >
          <Navbar.Brand href=""> Sophia</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="">Welcome, {user.name}</Nav.Link>
              <Nav.Link href="" onClick={handleLogout}>
                Log Out
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      ) : (
        <Navbar
          variant="dark"
          style={{
            background: '#536878',
            borderBottom: '1px solid #5bc0de',
          }}
        >
          <Navbar.Brand href=""> Sophia</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/login">Log In</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )}
    </>
  );
};

export default Navigation;
