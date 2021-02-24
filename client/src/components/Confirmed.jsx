import axios from 'axios';
import React, { useEffect, useState } from 'react';
//import styled from 'styled-components';
//import GoldHeadingTwo from '../elements/GoldHeadingTwo';


const Confirmed = () => {
  const [note, setNote] = useState();
  const getNote = async () => {
    const { data } = await axios.get('http://localhost:9000/confirmed');
    setNote(data);
  };
  useEffect(() => {
    getNote();
  }, []);

  return (
    <div>
      <div>
        <h1>{note?.confirmed?.title}</h1>
        <p>{note?.confirmed?.message}</p>
      </div>
      <div>
        <p> In case you need to cancel your rsvp, please contact us at:</p>
        <p> Email: {note?.contact?.email} </p>
        <p> Phone: {note?.contact?.phone} </p>
        <p> Whatsapp: {note?.contact?.whatsapp} </p>
      </div>
    </div>
  );
}
export default Confirmed;