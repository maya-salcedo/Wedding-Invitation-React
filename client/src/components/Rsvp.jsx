import React, { useState } from 'react';
import styled from 'styled-components';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import ComponentWrapper from '../elements/StyledContainer';



// Styling for ListedName

const StyledTable = styled.table`
  table-layout: auto;
  width: 1rem;
  margin-left: auto;
  margin-right: auto;
`;

const StyledRow = styled.tr`
  list-style-type: none;
  text-transform: capitalize;
`;

const StyledGuestName = styled.td`
  text-align: left; 
`;

const StyledDeleteButton = styled.td`
  text-align: right;
`;

const ListedName = (props) => {
  const handleClick = () => {
    props.onDelete(props.id);
  }
  return (
       <StyledRow>
        <StyledGuestName> {props.text} </StyledGuestName>
        <StyledDeleteButton>
          <button onClick={handleClick}>
          <FontAwesomeIcon icon={faMinusCircle} />
          </button></StyledDeleteButton>
      </StyledRow>
  );
}

const Rsvp = ({ history }) => {
  var [inputText, setInputText] = useState("");
  const [names, setNames] = useState([]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  const addName = async () => {
    setNames((prevNames) => {
      return [...prevNames, inputText];
    });
    setInputText("");
  }

  const confirmAttendance = async () => {
    try {
      await axios.post('http://localhost:9000/rsvp', { guest_names: names });
      history.push('/confirmed');
    } catch (err) {
      history.push('/unconfirmed');
    }
  }

  const deleteName = (id) => {
    setNames(prevNames => {
      return prevNames.filter((nameOfGuest, index) => {
        return index !== id;
      });
    });
  }

  return (
    <ComponentWrapper>
      <GoldHeadingTwo text="RSVP" />
      <p>RSVP by 31 May 2021</p>
      <StyledTable>
        <StyledRow>
          <StyledGuestName>
            <input value={inputText} onChange={handleChange} type="text" placeholder="Name" />
          </StyledGuestName>
          <StyledDeleteButton>
            <button onClick={addName}>
            <FontAwesomeIcon icon={faUserPlus} />
            </button>
          </StyledDeleteButton>
        </StyledRow>
        <StyledRow>
          <StyledGuestName>
            <ol>
                {names.map((nameOfGuest, index) => (
                  <ListedName
                    key={index}
                    id={index}
                    text={nameOfGuest}
                    onDelete={deleteName}
                  />
                ))}
              </ol>
          </StyledGuestName>
        </StyledRow>     
        <StyledRow>
            <button onClick={confirmAttendance}>Confirm</button>
          </StyledRow>    
      </StyledTable>
    </ComponentWrapper>
  );
}

export default Rsvp;