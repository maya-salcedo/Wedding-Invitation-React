import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';

const BankDetailsWrapper = styled.div`
    margin: 2rem 0 2rem;
`;

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
      <div>
        <GoldHeadingTwo>{message?.title}</GoldHeadingTwo>
        <p> {message?.message}</p>
      </div>
      <BankDetailsWrapper>
        <p>Here's how you can get the money to us: </p>
        <p> Name: {message?.account?.name}</p>
        <p> Account Number: {message?.account?.number}</p>
        <p> BIC: {message?.account?.bic}</p>
      </BankDetailsWrapper>
    </div>
  );
}

export default Gift;