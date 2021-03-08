import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';
import ResponseWrapper from '../elements/ResponseWrapper';
import { FlagContext } from './FlagContext';

const ConfirmedDecline = () => {
  const {flag} = useContext(FlagContext);
  const [note, setNote] = useState();
  const query = flag === 'italy' ? '?it=true' : '';
  const getNote = async () => {
    const { data } = await axios.get(`http://localhost:9000/confirmed-decline${query}`);
    setNote(data);
  };
  useEffect(() => {
    getNote();
  }, [flag]);

  return (
      <div>
        <GoldHeadingTwo text={note?.decline?.confirmed?.title} />
        <ResponseWrapper>
          <p>{note?.decline?.confirmed?.message}</p>
        </ResponseWrapper>      
      </div>      
  );
}
export default ConfirmedDecline;