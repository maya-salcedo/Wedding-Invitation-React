import React, { useState, useEffect, useContext } from 'react';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';
import axios from 'axios';
import ComponentWrapper from '../elements/StyledContainer';
import FormWrapper, {FormGroupWrapper, ButtonWrapper} from '../elements/FormWrapper';
import { FlagContext } from './FlagContext';

const Decline = ({ history }) => {
  const {flag} = useContext(FlagContext);

  const [message, setMessage] = useState();
  const query = flag === 'italy' ? '?it=true' : '';
  const getMessage = async () => {
    const { data } = await axios.get(`http://localhost:9000/decline${query}`);
    setMessage(data);
  };

  useEffect(() => {
    getMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag]);

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
      <GoldHeadingTwo text={message?.title} />
      <p>{message?.respondByDate}</p>
      <FormWrapper>
        <FormGroupWrapper>
          <label htmlFor="fname">{message?.yourName}</label>
          <input name="fname" type="text" placeholder={message?.yourName1} value={detail.fname} onChange={handleChange} />
        </FormGroupWrapper>
        <FormGroupWrapper>
          <label htmlFor="email">Email:</label>
          <input name="email" type="email" placeholder="Email" value={detail.email} onChange={handleChange} />
        </FormGroupWrapper>
        <FormGroupWrapper>
          <label htmlFor="phone">{message?.phone}</label>
          <input name="phone" type="number" placeholder={message?.phone1} value={detail.phone} onChange={handleChange} />
          </FormGroupWrapper>
        <FormGroupWrapper>
          <label htmlFor="message">{message?.yourMessage}</label>
          <textarea name="message" type="text" placeholder={message?.yourMessage1} rows="3" value={detail.message} onChange={handleChange} />
        </FormGroupWrapper>         
          
      </FormWrapper>
      <ButtonWrapper onClick={decline} text={message?.yourResponse} />
    </ComponentWrapper>
  );
}

export default Decline;