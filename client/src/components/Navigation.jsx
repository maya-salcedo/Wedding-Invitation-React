import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNavBar = styled.div`
   padding-top: 0.75em;
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    justify-content: center;
`;

const Navigation = () => {
    return (
       <StyledNavBar>
          <NavLink className="nav-link" to="/">HOME</NavLink>
          <NavLink className="nav-link" to="/wedding">WEDDING</NavLink>
          <NavLink className="nav-link" to="/gift">GIFTS</NavLink>
          <NavLink className="nav-link" to="/travel">TRAVEL</NavLink>
          <NavLink className="nav-link" to="/rsvp">RSVP</NavLink>
       </StyledNavBar>
    );
}
 
export default Navigation;