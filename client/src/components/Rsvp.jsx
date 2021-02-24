import React, { useState } from 'react';
import styled from 'styled-components';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';
import axios from 'axios';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
//import teal from '@material-ui/core/colors/teal';


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
  list-style-type: none;
  text-transform: capitalize;
  > span {
    display: table-cell;
  }
`;

const StyledGuestName = styled.span`
  text-align: left; 
`;

const StyledDeleteButton = styled.span`
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

  return (
    <div>
      <GoldHeadingTwo text="RSVP" />
      <p>RSVP by 31 May 2021</p>
      <StyledWrapper>
        <div>
          <input value={inputText} onChange={handleChange} type="text" placeholder="Name" />
          <Fab onClick={addName} size="small" color="secondary"><AddIcon /></Fab>
        </div>
        <div>
          <ol>
            {names.map((nameOfGuest, index) => (
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