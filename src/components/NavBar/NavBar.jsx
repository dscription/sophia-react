import React from 'react';

import {
  Nav,
  NavItem,
  RightTag,
  NavLink,
} from '../../components/StyledComponents/NavComponents';

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ? (
        <Nav>
          <NavItem>
            <NavLink href="">Welcome, {user.name}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="" onClick={handleLogout}>
              Log Out
            </NavLink>
          </NavItem>
        </Nav>
      ) : (
        <Nav>
          <NavItem>
            <NavLink href="/login">Log In</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/signup">Sign Up</NavLink>
          </NavItem>
        </Nav>
      )}
    </>
  );
};

export default NavBar;
