import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt  } from '@fortawesome/free-solid-svg-icons';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';
import ResponseWrapper from '../elements/ResponseWrapper';

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
      <GoldHeadingTwo text={note?.confirmed?.title} />
      <ResponseWrapper>
        <p>{note?.confirmed?.message1}</p>
        <div>
          <p>{note?.confirmed?.information?.date}</p>
          <p>{note?.confirmed?.information?.place}</p>
        </div>
        <p>{note?.confirmed?.message2}</p>
      </ResponseWrapper>
      <ResponseWrapper>
        <p> <FontAwesomeIcon icon={faEnvelope} />  {note?.contact?.email} </p>
        <p> <FontAwesomeIcon icon={faPhoneAlt} />  {note?.contact?.phone} </p>
        <p> <FontAwesomeIcon icon={faWhatsapp} />  {note?.contact?.whatsapp} </p>
      </ResponseWrapper>
    </div>
  );
}
export default ConfirmedAccept;