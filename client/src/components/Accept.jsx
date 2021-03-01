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

const Accept = ({ history }) => {

  const [detail, setDetail] = useState({
    fname: "",
    email: "",
    phone: "",
    message: ""
  });

  const [names, setNames] = useState([]);

  const handleChange = (event) => {
    //const {name, value} = event.target;
    //console.log(name);
    //console.log(value);
    setDetail({
      ...detail,
      [event.target.name]: event.target.value
    });
  }

  const addName = async () => {
    if (detail.fname.length === 0) {
      alert("Please enter your name.");
    } else {
      setNames((prevNames) => {
        return [...prevNames, detail.fname];
      });
    }
    setDetail({ fname: "" });
  }

  const deleteName = (id) => {
    setNames(prevNames => {
      return prevNames.filter((nameOfGuest, index) => {
        return index !== id;
      });
    });
  }

  const accept = async () => {
    try {
      //let guests = names;
      //if (!guests.includes(detail.fname) && detail.fname) {
      //  guests.push(detail.fname)
      //}
      await axios.post('http://localhost:9000/accept', {
        Name: "old",
        Phone: detail.phone,
        Email: detail.email,
        Message: detail.message,
        Response: "Accept"
      });
      history.push('/confirmed');
    } catch (err) {
      history.push('/unconfirmed');
    }
  }


  return (
    <ComponentWrapper>
      <GoldHeadingTwo text="RSVP" />
      <p>RSVP by 31 May 2021</p>
      <StyledTable>
        <StyledHeading>
          <tr>
            <StyledNameInput>
              <input name="fname" value={detail.fname} onChange={handleChange} type="text" placeholder="Name" />
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
          <StyledNameInput>
            <input name="email" value={detail.email} onChange={handleChange} type="email" placeholder="Email" />
          </StyledNameInput>
          <StyledNameInput>
            <input name="phone" value={detail.phone} onChange={handleChange} type="number" placeholder="Phone" />
          </StyledNameInput>
          <StyledNameInput>
            <input name="message" value={detail.message} onChange={handleChange} type="text" placeholder="Your message: (optional)" />
          </StyledNameInput>
        </StyledBody>
        <tfoot>
          <tr>
            <td>
              <button onClick={accept}>Joyfully Accept</button>
            </td>
          </tr>
        </tfoot>
      </StyledTable>
    </ComponentWrapper>
  );
}

export default Accept;