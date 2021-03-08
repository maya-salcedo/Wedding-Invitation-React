import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FlagContext } from './FlagContext';
import Select from 'react-select';
import EnglishFlag from './image/englishflag.png';
import ItalianFlag from './image/italianflag.png';

const StyledNavBar = styled.div`
  padding-top: 0.75em;
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const options = [
  { value: "italy", label: <img src="./image/italianflag.png" />},
  { value: "english", label: <img src="./image/englishflag.png" />}
];

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
      <Select onChange={(e)=> getOption(e)} name="flag" id="flag" defaultValue="english" options={options} />
    </StyledNavBar>
  );
}

export default React.memo(Navigation);