import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { FailedHeading } from '../elements/GoldHeadingTwo';
import ResponseWrapper from '../elements/ResponseWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FlagContext } from './FlagContext';

const UnconfirmedDecline = () => {
  const { flag } = useContext(FlagContext);
  const [note, setNote] = useState();
  const query = flag === 'italy' ? '?it=true' : '';
  const getNote = async () => {
    const { data } = await axios.get(`/api/unconfirmed-decline${query}`);
    setNote(data);
  };
  useEffect(() => {
    getNote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag]);

  return (
    <div>
      <FailedHeading text={note?.unconfirmed?.title} />
      <ResponseWrapper>
        <p>{note?.unconfirmed?.message1}</p>
        <p> {note?.unconfirmed?.message2}</p>
      </ResponseWrapper>
      <ResponseWrapper>
        <p>
          {' '}
          <FontAwesomeIcon icon={faEnvelope} /> {note?.contact?.email}{' '}
        </p>
        <p>
          {' '}
          <FontAwesomeIcon icon={faPhoneAlt} /> {note?.contact?.phone}{' '}
        </p>
        <p>
          {' '}
          <FontAwesomeIcon icon={faWhatsapp} /> {note?.contact?.whatsapp}{' '}
        </p>
      </ResponseWrapper>
    </div>
  );
};
export default UnconfirmedDecline;
