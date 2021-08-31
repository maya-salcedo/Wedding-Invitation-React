import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';
import ResponseWrapper from '../elements/ResponseWrapper';
import { FlagContext } from './FlagContext';

const ConfirmedAccept = () => {
  const { flag } = useContext(FlagContext);
  const [message, setMessage] = useState();
  const query = flag === 'italy' ? '?it=true' : '';
  const getMessage = async () => {
    const { data } = await axios.get(`/api/confirmed-accept${query}`);
    setMessage(data);
  };
  useEffect(() => {
    getMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag]);

  return (
    <div>
      <GoldHeadingTwo text={message?.confirmed?.title} />
      <ResponseWrapper>
        <p>{message?.confirmed?.message1}</p>
        <div>
          <p>
            {message?.confirmed?.information?.date} <br />
            {message?.confirmed?.information?.place}
          </p>
        </div>
        <p>{message?.confirmed?.message2}</p>
      </ResponseWrapper>
      <ResponseWrapper>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> {message?.contact?.email} <br />
          <FontAwesomeIcon icon={faPhoneAlt} /> {message?.contact?.phone} <br />
          <FontAwesomeIcon icon={faWhatsapp} /> {message?.contact?.whatsapp}
        </p>
      </ResponseWrapper>
    </div>
  );
};
export default ConfirmedAccept;
