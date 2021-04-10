import React, { useState, useEffect, useContext } from 'react';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';
import axios from 'axios';
import ComponentWrapper from '../elements/StyledContainer';
import FormWrapper, { FormGroupWrapper, ButtonWrapper } from '../elements/FormWrapper';
import { FlagContext } from './FlagContext';

const Accept = ({ history }) => {
  const { flag } = useContext(FlagContext);
  const [message, setMessage] = useState();
  const [detail, setDetail] = useState({
    fname: "",
    email: "",
    phone: "",
    additional: "",
    detailMessage: ""
  });

  const query = flag === 'italy' ? '?it=true' : '';
  const getMessage = async () => {
    const { data } = await axios.get(`http://localhost:9000/accept${query}`);
    setMessage(data);
  };

  useEffect(() => {
    getMessage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag]);

  const handleChange = (event) => {
    setDetail({
      ...detail,
      [event.target.name]: event.target.value
    });
  }

  const {
    fname,
    phone,
    email,
    additional,
    detailMessage
  } = detail;

  const {
    title,
    respondByDate,
    yourName,
    yourName1,
    phone1,
    additionalNames,
    yourMessage,
    yourMessage1,
    yourResponse,
    additionalNames1
  } = message;

  const accept = async () => { 
    try 
      {
        if (fname.length === 0){
          alert("Please enter your name.");
        } else {
        await axios.post('http://localhost:9000/accept', {
          Name: fname,
          Phone: phone,
          Email: email,
          Additional: additional,
          Message: message,
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
      <GoldHeadingTwo text={title} />
      <p>{respondByDate}</p>
      <FormWrapper>
        <FormGroupWrapper>
          <label htmlFor="fname">{yourName}</label>
          <input className="name" name="fname" value={fname} onChange={handleChange} type="text" placeholder={yourName1} style={{textTransform: 'capitalize'}} />
        </FormGroupWrapper>
        <FormGroupWrapper>
          <label htmlFor="email">Email:</label>
          <input name="email" value={email} onChange={handleChange} type="email" placeholder="Email" />
        </FormGroupWrapper>      
        <FormGroupWrapper>
          <label htmlFor="phone">{phone}</label>
          <input name="phone" value={phone} onChange={handleChange} type="number" placeholder={phone1} />
          </FormGroupWrapper>
          <FormGroupWrapper>
          <label htmlFor="additional">{additionalNames}</label>
          <textarea name="additional" type="text" placeholder={additionalNames1} rows="3" value={additional} onChange={handleChange} />
        </FormGroupWrapper>
        <FormGroupWrapper>
          <label htmlFor="message">{yourMessage}</label>
          <textarea name="message" type="text" placeholder={yourMessage1} rows="3" value={detailMessage} onChange={handleChange} />
        </FormGroupWrapper>         
          
      </FormWrapper>
      <ButtonWrapper onClick={accept} text={yourResponse} />
    </ComponentWrapper>
  );
}

export default Accept;