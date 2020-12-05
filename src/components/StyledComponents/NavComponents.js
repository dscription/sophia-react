import styled from 'styled-components'

export const Nav = styled.div`
display: flex;
padding: 10px;
background-color: black;
height: 40px;
position: relative;
width: 100%;
`
export const NavItem = styled.div`
line-height: 40px;
padding-left: 20px;
`;

export const RightTag = styled.div`
  line-height: 40px;
  padding-left: 20px;
  padding-right: 40px;
  position: absolute;
  right: 0;
`;

export const NavLink = styled.a`
  color: white;
`