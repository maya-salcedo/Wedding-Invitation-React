import React, { useState } from 'react';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';
import axios from 'axios';
import ComponentWrapper from '../elements/StyledContainer';
import FormWrapper, {FormGroupWrapper, ButtonWrapper} from '../elements/FormWrapper';


const Decline = ({ history }) => {

  var [detail, setDetail] = useState({
      fname: "",
      email: "",
      phone: "",
      message: ""
  });
  
  const handleChange = (event) => {
    setDetail({
      ...detail,
      [event.target.name]:event.target.value});
  }
  
  const decline = async () => {
      try {
        if (detail.fname.length === 0){
          alert("Please enter your name.");
        } else {
        await axios.post('http://localhost:9000/decline', {
          Name: detail.fname, 
          Phone: detail.phone, 
          Email: detail.email, 
          Message: detail.message,
          Response: "Decline"
        });
        history.push('/confirmed-decline');
      }
    } catch (err) {
      history.push('/unconfirmed-decline');
    }
  }
 
  return (
    <ComponentWrapper>
      <GoldHeadingTwo text="Decline with Regret" />
      <p>Respond by 31 May 2021</p>
      <FormWrapper>
        <FormGroupWrapper>
          <label htmlFor="fname">Your Name:</label>
          <input name="fname" type="text" placeholder="Name" value={detail.fname} onChange={handleChange} />
        </FormGroupWrapper>
        <FormGroupWrapper>
          <label htmlFor="email">Email:</label>
          <input name="email" type="email" placeholder="Email" value={detail.email} onChange={handleChange} />
        </FormGroupWrapper>
        <FormGroupWrapper>
          <label htmlFor="phone">Phone:</label>
          <input name="phone" type="number" placeholder="Phone" value={detail.phone} onChange={handleChange} />
          </FormGroupWrapper>
        <FormGroupWrapper>
          <label htmlFor="message">Your message:</label>
          <textarea name="message" type="text" placeholder="Your message: (optional)" rows="3" value={detail.message} onChange={handleChange} />
        </FormGroupWrapper>         
          
      </FormWrapper>
      <ButtonWrapper onClick={decline} text="Decline" />
    </ComponentWrapper>
  );
}

export default Decline;