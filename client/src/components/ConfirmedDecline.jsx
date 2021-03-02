import axios from 'axios';
import React, { useEffect, useState } from 'react';
//import styled from 'styled-components';
//import GoldHeadingTwo from '../elements/GoldHeadingTwo';


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
        <h1>{note?.decline?.confirmed?.title}</h1>
        <p>{note?.decline?.confirmed?.message}</p>
      </div>      
  );
}
export default ConfirmedDecline;