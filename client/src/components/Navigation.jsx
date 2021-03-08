import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FlagContext } from './FlagContext';

const StyledNavBar = styled.div`
  padding-top: 0.75em;
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const Navigation = () => {
  const {setFlag} = useContext(FlagContext)
  const getOption = (e) => {
    setFlag(e.target.value)
  }  


  return (
    <StyledNavBar>
      <NavLink className="nav-link" to="/">HOME</NavLink>
      <NavLink className="nav-link" to="/wedding">WEDDING</NavLink>
      <NavLink className="nav-link" to="/gift">GIFTS</NavLink>
      <NavLink className="nav-link" to="/travel">TRAVEL</NavLink>
      <NavLink className="nav-link" to="/rsvp">RSVP</NavLink>
      <select onChange={(e)=> getOption(e)} name="flag" id="flag" defaultValue="english">
        <option value="italy">Italian</option>
        <option value="english" >English</option>
      </select>
    </StyledNavBar>
  );
}

export default React.memo(Navigation);