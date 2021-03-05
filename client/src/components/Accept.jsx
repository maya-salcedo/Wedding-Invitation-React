import React, { useState } from 'react';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';
import axios from 'axios';
import ComponentWrapper from '../elements/StyledContainer';
import FormWrapper, {FormGroupWrapper, ButtonWrapper} from '../elements/FormWrapper';

const Accept = ({ history }) => {

  const [detail, setDetail] = useState({
    fname: "",
    email: "",
    phone: "",
    additional: "",
    message: ""
  });

  const handleChange = (event) => {
    setDetail({
      ...detail,
      [event.target.name]: event.target.value
    });
  }

  const accept = async () => { 
    try 
      {
        if (detail.fname.length === 0){
          alert("Please enter your name.");
        } else {
        await axios.post('http://localhost:9000/accept', {
          Name:detail.fname,
          Phone: detail.phone,
          Email: detail.email,
          Additional: detail.additional,
          Message: detail.message,
          Response: "Accept"
        });
        history.push('/confirmed-accept');
      }
      } catch (err) {
        history.push('/unconfirmed-accept');
      }
  }



  return (
    <ComponentWrapper>
      <GoldHeadingTwo text="Joyfully Accept" />
      <p>Respond by 31 May 2021</p>
      <FormWrapper>
        <FormGroupWrapper>
          <label htmlFor="fname">Your Name:</label>
          <input className="name" name="fname" value={detail.fname} onChange={handleChange} type="text" placeholder="Name" />
        </FormGroupWrapper>
        <FormGroupWrapper>
          <label htmlFor="email">Email:</label>
          <input name="email" value={detail.email} onChange={handleChange} type="email" placeholder="Email" />
        </FormGroupWrapper>      
        <FormGroupWrapper>
          <label htmlFor="phone">Phone:</label>
          <input name="phone" value={detail.phone} onChange={handleChange} type="number" placeholder="Phone" />
          </FormGroupWrapper>
          <FormGroupWrapper>
          <label htmlFor="additional">Additional Guest Names:</label>
          <textarea name="additional" type="text" placeholder="Name(s):" rows="3" value={detail.additional} onChange={handleChange} />
        </FormGroupWrapper>
        <FormGroupWrapper>
          <label htmlFor="message">Your message:</label>
          <textarea name="message" type="text" placeholder="Your message: (optional)" rows="3" value={detail.message} onChange={handleChange} />
        </FormGroupWrapper>         
          
      </FormWrapper>

      <ButtonWrapper onClick={accept} text="Accept" />
    </ComponentWrapper>
  );
}

export default Accept;