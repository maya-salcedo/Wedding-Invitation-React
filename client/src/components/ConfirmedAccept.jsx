import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt  } from '@fortawesome/free-solid-svg-icons';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';
import ResponseWrapper from '../elements/ResponseWrapper';
import { FlagContext } from './FlagContext';

const ConfirmedAccept = () => {
  const {flag} = useContext(FlagContext);
  const [note, setNote] = useState();
  const query = flag === 'italy' ? '?it=true' : '';
  const getNote = async () => {
    const { data } = await axios.get(`/confirmed-accept${query}`);
    setNote(data);
  };
  useEffect(() => {
    getNote();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag]);

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