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
        <p>{message?.account?.instruction}</p>
        <p>{message?.account?.name}</p>
        <p>{message?.account?.number}</p>
        <p>{message?.account?.bic}</p>
      </ResponseWrapper>
    </div>
  );
}

export default Gift;