import React, { useState } from 'react';
import styled from 'styled-components';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';
import axios from 'axios';

const StyledWrapper = styled.div`
  padding: 2%;
  font-family: 'EB Garamond', serif;
  font-size: 1.3rem;
`;

const StyledListWrapper = styled.div`
  margin-left: 5%; 
  margin-right: 5%;
`;

const StyledList = styled.li`
  list-style-type: none;
  padding: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  text-transform: capitalize;
`;

const StyledButton = styled.button`
  display: inline-block;
  position: relative;
  right: 1;
  padding: 2%;
`;

const ListedName = (props) => {
  return (
    <StyledListWrapper>
      <StyledList> {props.text} </StyledList>
      <StyledButton><span>Delete</span></StyledButton>       
    </StyledListWrapper>
  );
}

const Rsvp = () => {
  var [inputText, setInputText] = useState("");
  const [names, setNames] = useState([]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  const addName = async() => {
    await axios.post('http://localhost:9000/rsvp', {guest_name: inputText});
    setNames((prevNames) => {   
      return [...prevNames, inputText];
    });
    setInputText("");
  }

  return (
    <div>
      <GoldHeadingTwo text="RSVP" />
      <p>RSVP by 31 May 2021</p>
      <StyledWrapper>
      <div>
        <input value={inputText} onChange={handleChange} type="text" placeholder="Name" />
        <button onClick={addName}><span>Add</span></button>
      </div>
      <div>
        <ol>
        {names.map((nameOfGuest,index) => (
          <ListedName
            key={index}
            id={index}
            text={nameOfGuest}
          />       
        ))}
        </ol>       
      </div>
      <button>Confirm</button>
      </StyledWrapper>
    </div>
  );
}

export default Rsvp;