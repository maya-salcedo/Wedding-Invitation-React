import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';
import ResponseWrapper from '../elements/ResponseWrapper';


const ConfirmedDecline = () => {
  const [note, setNote] = useState();
  const getNote = async () => {
    const { data } = await axios.get('http://localhost:9000/confirmed-decline');
    setNote(data);
  };
  useEffect(() => {
    getNote();
  }, []);

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