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
  margin-left: auto;
  margin-right: auto;
`;

const StyledHeading = styled.thead`
  text-transform: capitalize;
`;

const StyledNameInput = styled.td`
  text-align: left;

`;

const StyledAddButton = styled.td`
  text-align: right;
`;

const StyledBody = styled.tbody`
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
    <tr>
      <StyledGuestName> {props.text} </StyledGuestName>
      <StyledDeleteButton>
        <button onClick={handleClick}>
        <FontAwesomeIcon icon={faMinusCircle} />
        </button>
      </StyledDeleteButton>
    </tr>
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
    if (inputText.length === 0){
      alert("Please enter your name.");
    } else { setNames((prevNames) => {
      return [...prevNames, inputText];
    }); 
    } 
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
        <StyledHeading>
          <tr>
            <StyledNameInput>
              <input value={inputText} onChange={handleChange} type="text" placeholder="Name" minLength="1" />
            </StyledNameInput>
            <StyledAddButton>
              <button onClick={addName}>
                <FontAwesomeIcon icon={faUserPlus} />
              </button>
            </StyledAddButton>
          </tr>
        </StyledHeading>
        <StyledBody>
          {names.map((nameOfGuest, index) => (
            <ListedName
              key={index}
              id={index}
              text={nameOfGuest}
              onDelete={deleteName}
            />
          ))}
        </StyledBody>
        
        <tfoot>
        <tr>
            <td>
              {names.length > 0 && <button onClick={confirmAttendance}>Confirm</button>}
            </td>
          </tr>  
        </tfoot>  
      </StyledTable>
    </ComponentWrapper>
  );
}

export default Rsvp;