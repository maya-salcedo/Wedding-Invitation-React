import axios from 'axios';
import React, { useEffect, useState } from 'react';
//import styled from 'styled-components';
//import GoldHeadingTwo from '../elements/GoldHeadingTwo';


const ConfirmedAccept = () => {
  const [note, setNote] = useState();
  const getNote = async () => {
    const { data } = await axios.get('http://localhost:9000/confirmed-accept');
    setNote(data);
  };
  useEffect(() => {
    getNote();
  }, []);

  return (
    <div>
      <div>
        <h1>{note?.confirmed?.title}</h1>
        <p>{note?.confirmed?.message1}</p>
        <p>{note?.confirmed?.information?.date}</p>
        <p>{note?.confirmed?.information?.place}</p>
        <p>{note?.confirmed?.message2}</p>
      </div>
      <div>
        <p> Email: {note?.contact?.email} </p>
        <p> Phone: {note?.contact?.phone} </p>
        <p> Whatsapp: {note?.contact?.whatsapp} </p>
      </div>
    </div>
  );
}
export default ConfirmedAccept;