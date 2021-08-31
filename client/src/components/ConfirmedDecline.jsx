import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';
import ResponseWrapper from '../elements/ResponseWrapper';
import { FlagContext } from './FlagContext';

const ConfirmedDecline = () => {
  const { flag } = useContext(FlagContext);
  const [message, setMessage] = useState();
  const query = flag === 'italy' ? '?it=true' : '';
  const getMessage = async () => {
    const { data } = await axios.get(`/api/confirmed-decline${query}`);
    setMessage(data);
  };
  useEffect(() => {
    getMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag]);

  return (
    <div>
      <GoldHeadingTwo text={message?.decline?.confirmed?.title} />
      <ResponseWrapper>
        <p>{message?.decline?.confirmed?.message}</p>
        <p>{message?.decline?.confirmed?.message1}</p>
      </ResponseWrapper>
    </div>
  );
};
export default ConfirmedDecline;
