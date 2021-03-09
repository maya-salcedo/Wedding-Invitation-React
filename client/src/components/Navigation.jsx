import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FlagContext } from './FlagContext';
import Select from 'react-select';
import EnglishFlag from './image/englishflag.png';
import ItalianFlag from './image/italianflag.png';


const StyledImage = styled.img`
  width: 30px;
  height: 25px;
`;

const NavWrapper = styled.div`
  padding-top: 0.75em;
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const FlagWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const Navigation = () => {
  const {setFlag} = useContext(FlagContext)
  const getOption = (e) => {
    console.log(e);
    setFlag(e.value)
  }  

  const options = [
    { value: "italy", label: <div><StyledImage src={ItalianFlag} alt="italiano" /></div>},
    { value: "english", label: <div><StyledImage src={EnglishFlag} alt="english" /></div>}
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      padding: 0,
      backgroundColor: '#fde2e2',
    }),
    control: ( styles) => ({
      ...styles, backgroundColor: 'transparent', width: 80, border: 0, boxShadow: 'none'
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }

  return (
    <div>
      <NavWrapper>
        <NavLink className="nav-link" to="/">HOME</NavLink>
        <NavLink className="nav-link" to="/wedding">WEDDING</NavLink>
        <NavLink className="nav-link" to="/gift">GIFTS</NavLink>
        <NavLink className="nav-link" to="/travel">TRAVEL</NavLink>
        <NavLink className="nav-link" to="/rsvp">RSVP</NavLink>
      </NavWrapper>
      <FlagWrapper>
        <Select onChange={(e)=> getOption(e)} styles={customStyles}  hideSelectedOptions={false} name="flag" id="flag" defaultValue={options[1]} options={options} />
      </FlagWrapper>
    </div>
  );
}

export default React.memo(Navigation);