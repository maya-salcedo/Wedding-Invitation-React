import React, { useState } from 'react';
//import styled from 'styled-components';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';
import axios from 'axios';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faUserPlus, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import ComponentWrapper from '../elements/StyledContainer';





const Rsvp = ({ history }) => {

  var [detail, setDetail] = useState({
      fname: "",
      email: "",
      phone: "",
      message: ""
  });
  
  const handleChange = (event) => {
    const {name, value} = event.target;
    setDetail({[name]:value});
  }
  
  const decline = async () => {
    setDetail({
      fname: "",
      email: "",
      phone: "",
      message: "" 
      });
    try {
      await axios.post('http://localhost:9000/decline', {
        Name: detail.fname, 
        Phone: detail.phone, 
        Email: detail.email, 
        Message: detail.message,
        Response: "Decline"
      });
      history.push('/confirmed');
    } catch (err) {
      history.push('/unconfirmed');
    }
  }
 
  return (
    <ComponentWrapper>
      <GoldHeadingTwo text="Decline with Regret" />
      <p>RSVP by 31 May 2021</p>
      <div>
          <label for="fname">Your name:</label>
          <input name="fname" type="text" placeholder="Name" value={detail.name} onChange={handleChange} />
          <label for="email">Email:</label>
          <input name="email" type="email" placeholder="Email" value={detail.email} onChange={handleChange} />
          <label for="phone">Phone:</label>
          <input name="phone" type="number" placeholder="Phone" value={detail.phone} onChange={handleChange} />
          <label for="message">Your message:</label>
          <textarea name="message" type="text" placeholder="Your message(optional)" value={detail.message} onChange={handleChange} />
      </div>
      <button onClick={decline}>Decline</button>
    </ComponentWrapper>
  );
}

export default Rsvp;