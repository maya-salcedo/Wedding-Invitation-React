import React, { useState } from 'react';
//import {Link} from "react-router-dom";
import styled from 'styled-components';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';
import axios from 'axios';
//import Confirmed from './Confirmed';

const StyledWrapper = styled.div`
  padding: 2%;
  font-family: 'EB Garamond', serif;
  font-size: 1.3rem;
`;

// Styling for ListedName

const ListWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const StyledList = styled.li`
  display: table-row;
  justify-content: center;
`;

const StyledGuestName = styled.span`
  display: table-cell;
  text-align: left;
`;

const StyledDeleteButton = styled.span`
  display: table-cell;
  text-align: right;
`;

const ListedName = (props) => {
  return (
    <ListWrapper>
    <StyledList>
      <StyledGuestName> {props.text} </StyledGuestName>
      <StyledDeleteButton><button>Delete</button></StyledDeleteButton>      
    </StyledList>
    </ListWrapper>
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
    setNames((prevNames) => {   
      return [...prevNames, inputText];
    });
    setInputText("");
  }

  const confirmAttendance = async() => {
    await axios.post('http://localhost:9000/rsvp', {guest_names: names});
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
      <button onClick={confirmAttendance}>Confirm</button>
      </StyledWrapper>
    </div>
  );
}

export default Rsvp;