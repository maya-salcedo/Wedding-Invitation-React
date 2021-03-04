import React, { useState } from 'react';
import styled from 'styled-components';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faMinusCircle,  faCheck } from '@fortawesome/free-solid-svg-icons';
import ComponentWrapper from '../elements/StyledContainer';
import FormWrapper, {FormGroupWrapper, ButtonWrapper} from '../elements/FormWrapper';

const ListedName = (props) => {
  const handleClick = () => {
    props.onDelete(props.id);
  }
  return (
    <FormGroupWrapper>
      <li>{props.text} </li>
      <button onClick={handleClick}><FontAwesomeIcon icon={faMinusCircle} /></button>
    </FormGroupWrapper>
    
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
      let guests = names;
      if (!guests.includes(detail.fname) && detail.fname) {
        guests.push(detail.fname);
        console.log(guests);
      }
      await axios.post('http://localhost:9000/accept', {
        Name: guests,
        Phone: detail.phone,
        Email: detail.email,
        Message: detail.message,
        Response: "Accept"
      });
      history.push('/confirmed-accept');
    } catch (err) {
      history.push('/unconfirmed-accept');
    }
  }


  return (
    <ComponentWrapper>
      <GoldHeadingTwo text="RSVP" />
      <p>RSVP by 31 May 2021</p>
      <FormWrapper>
        <FormGroupWrapper>
          <label htmlFor="fname">Your Name:</label>
          <input name="fname" value={detail.fname} onChange={handleChange} type="text" placeholder="Name" />
          <button onClick={addName}>Add</button>
        </FormGroupWrapper>
        
           {names.map((nameOfGuest, index) => (
            <ListedName
              key={index}
              id={index}
              text={nameOfGuest}
              onDelete={deleteName}
            />
          ))}

        <FormGroupWrapper>
          <label htmlFor="email">Email:</label>
          <input name="email" value={detail.email} onChange={handleChange} type="email" placeholder="Email" />
        </FormGroupWrapper>
        <FormGroupWrapper>
          <label htmlFor="phone">Phone:</label>
          <input name="phone" value={detail.phone} onChange={handleChange} type="number" placeholder="Phone" />
          </FormGroupWrapper>
        <FormGroupWrapper>
          <label htmlFor="message">Your message:</label>
          <textarea name="message" type="text" placeholder="Your message: (optional)" rows="3" value={detail.message} onChange={handleChange} />
        </FormGroupWrapper>         
          
      </FormWrapper>
      <button onClick={accept}>Joyfully Accept</button>
    </ComponentWrapper>
  );
}

export default Accept;