import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';
import ResponseWrapper from '../elements/ResponseWrapper';


const Gift = () => {
  const [message, setMessage] = useState();
  const getMessage = async () => {
    const { data } = await axios.get('http://localhost:9000/gift');
    setMessage(data);
  };

  useEffect(() => {
    getMessage();
  }, []);

  return (
    <div>
      <GoldHeadingTwo text={message?.title} />
      <ResponseWrapper>
      <p> {message?.message}</p>
      </ResponseWrapper>
        

      <ResponseWrapper>
        <p>Here's how you can get the money to us: </p>
        <p> Name: {message?.account?.name}</p>
        <p> Account#: {message?.account?.number}</p>
        <p> BIC: {message?.account?.bic}</p>
      </ResponseWrapper>
    </div>
  );
}

export default Gift;