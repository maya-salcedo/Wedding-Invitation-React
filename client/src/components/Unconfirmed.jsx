import axios from 'axios';
import React, { useEffect, useState } from 'react';
//import styled from 'styled-components';
//import GoldHeadingTwo from '../elements/GoldHeadingTwo';
const Unconfirmed = () => {
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
        <h1>{note?.unconfirmed?.title}</h1>
        <p>{note?.unconfirmed?.message}</p>
      </div>
      <div>
        <p> In case you have technical trouble to confirm your rsvp, please contact us at:</p>
        <p> Email: {note?.contact?.email} </p>
        <p> Phone: {note?.contact?.phone} </p>
        <p> Whatsapp: {note?.contact?.whatsapp} </p>
      </div>
    </div>
  );
}
export default Unconfirmed;