import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';
import ResponseWrapper from '../elements/ResponseWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt  } from '@fortawesome/free-solid-svg-icons';

const UnconfirmedDecline = () => {
  const [note, setNote] = useState();
  const getNote = async () => {
    const { data } = await axios.get('http://localhost:9000/unconfirmed-decline');
    setNote(data);
  };
  useEffect(() => {
    getNote();
  }, []);

  return (
    <div>
      <GoldHeadingTwo text={note?.unconfirmed?.title} />
      <ResponseWrapper>
        <p>{note?.unconfirmed?.message1}</p>
        <p> {note?.unconfirmed?.message2}</p>
      </ResponseWrapper> 
      <ResponseWrapper>
        <p> <FontAwesomeIcon icon={faEnvelope} />  {note?.contact?.email} </p>
        <p> <FontAwesomeIcon icon={faPhoneAlt} />  {note?.contact?.phone} </p>
        <p> <FontAwesomeIcon icon={faWhatsapp} />  {note?.contact?.whatsapp} </p>
      </ResponseWrapper>
    </div>
  );
}
export default UnconfirmedDecline;