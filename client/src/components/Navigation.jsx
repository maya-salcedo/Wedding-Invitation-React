import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FlagContext } from './FlagContext';
import axios from 'axios';
import Select from 'react-select';

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
  padding: 0.5rem;
`;

const Navigation = () => {
  const {flag, setFlag} = useContext(FlagContext);
  const [message, setMessage] = useState();
  const getOption = (e) => {
    console.log(e);
    setFlag(e.value)
  }  

  const options = [
    { value: "italy", label: <div><StyledImage src="image/italianflag.png" alt="italiano" /></div>},
    { value: "english", label: <div><StyledImage src="image/englishflag.png" alt="english" /></div>}
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      padding: 0,
      backgroundColor: '#fde2e2',
    }),
    control: ( styles) => ({
      ...styles, backgroundColor: '#fff6f6', width: 80, border: 0, boxShadow: 'none'
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.9 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }

  const query = flag === 'italy' ? '?it=true' : '';
  const getMessage = async () => {
    const { data } = await axios.get(`/api/navigation${query}`);
    setMessage(data);
  };

  useEffect(() => {
    getMessage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag]);

  return (
    <div>
      <NavWrapper>
        <NavLink className="nav-link" to="/">{message?.home}</NavLink>
        <NavLink className="nav-link" to="/wedding">{message?.wedding}</NavLink>
        <NavLink className="nav-link" to="/gift">{message?.gifts}</NavLink>
        <NavLink className="nav-link" to="/travel">{message?.travel}</NavLink>
        <NavLink className="nav-link" to="/rsvp">{message?.rsvp}</NavLink>
      </NavWrapper>
      <FlagWrapper>
        <Select onChange={(e)=> getOption(e)} styles={customStyles}  hideSelectedOptions={false} name="flag" id="flag" defaultValue={options[1]} options={options} />
      </FlagWrapper>
    </div>
  );
}

export default React.memo(Navigation);