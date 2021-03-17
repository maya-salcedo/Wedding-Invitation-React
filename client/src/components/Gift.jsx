import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';
import ResponseWrapper from '../elements/ResponseWrapper';
import { FlagContext } from './FlagContext';


const Gift = () => {
  const {flag} = useContext(FlagContext);

  const [message, setMessage] = useState();
  const query = flag === 'italy' ? '?it=true' : '';
  const getMessage = async () => {
    const { data } = await axios.get(`/api/gift${query}`);
    setMessage(data);
  };

  useEffect(() => {
    getMessage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag]);

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