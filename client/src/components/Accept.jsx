import React, { useState, useEffect } from 'react';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';
import axios from 'axios';
import ComponentWrapper from '../elements/StyledContainer';
import FormWrapper, {FormGroupWrapper, ButtonWrapper} from '../elements/FormWrapper';

const Accept = ({ history }) => {

  const [message, setMessage] = useState();
  const getMessage = async () => {
    const { data } = await axios.get('http://localhost:9000/accept');
    setMessage(data);
  };

  useEffect(() => {
    getMessage();
  }, []);

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
      <GoldHeadingTwo text={message?.title} />
      <p>{message?.respondByDate}</p>
      <FormWrapper>
        <FormGroupWrapper>
          <label htmlFor="fname">{message?.yourName}</label>
          <input className="name" name="fname" value={detail.fname} onChange={handleChange} type="text" placeholder={message?.yourName1} />
        </FormGroupWrapper>
        <FormGroupWrapper>
          <label htmlFor="email">Email:</label>
          <input name="email" value={detail.email} onChange={handleChange} type="email" placeholder="Email" />
        </FormGroupWrapper>      
        <FormGroupWrapper>
          <label htmlFor="phone">{message?.phone}</label>
          <input name="phone" value={detail.phone} onChange={handleChange} type="number" placeholder={message?.phone1} />
          </FormGroupWrapper>
          <FormGroupWrapper>
          <label htmlFor="additional">{message?.additionalNames}</label>
          <textarea name="additional" type="text" placeholder={message?.additionalNames1} rows="3" value={detail.additional} onChange={handleChange} />
        </FormGroupWrapper>
        <FormGroupWrapper>
          <label htmlFor="message">{message?.yourMessage}</label>
          <textarea name="message" type="text" placeholder={message?.yourMessage1} rows="3" value={detail.message} onChange={handleChange} />
        </FormGroupWrapper>         
          
      </FormWrapper>
      <ButtonWrapper onClick={accept} text={message?.yourResponse} />
    </ComponentWrapper>
  );
}

export default Accept;