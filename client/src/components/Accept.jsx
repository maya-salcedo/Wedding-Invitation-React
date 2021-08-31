import React, { useState, useEffect, useContext } from 'react';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';
import axios from 'axios';
import ComponentWrapper from '../elements/StyledContainer';
import FormWrapper, { ButtonWrapper } from '../elements/FormWrapper';
import { FlagContext } from './FlagContext';

const Accept = ({ history }) => {
  const { flag } = useContext(FlagContext);

  const [info, setInfo] = useState();
  const query = flag === 'italy' ? '?it=true' : '';

  const getInfo = async () => {
    const { data } = await axios.get(`/api/accept${query}`);
    setInfo(data);
  };

  useEffect(() => {
    getInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag]);

  const [detail, setDetail] = useState({
    fname: '',
    email: '',
    phone: '',
    additional: '',
    message: '',
  });

  const handleChange = (event) => {
    setDetail({
      ...detail,
      [event.target.name]: event.target.value,
    });
  };

  const accept = async () => {
    try {
      if (detail.fname.length === 0) {
        alert('Please enter your name.');
      } else {
        await axios.post('/api/accept', {
          Name: detail.fname,
          Phone: detail.phone,
          Email: detail.email,
          AdditionalGuest: detail.additional,
          Message: detail.message,
          Response: 'Accept',
        });
        history.push('/confirmed-accept');
      }
    } catch (err) {
      history.push('/unconfirmed-accept');
    }
  };

  return (
    <ComponentWrapper>
      <GoldHeadingTwo text={info?.title} />
      <p>{info?.respondByDate}</p>
      <FormWrapper>
        <div>
          <label htmlFor="fname">{info?.yourName}</label>
          <input
            className="name"
            name="fname"
            value={detail.fname}
            onChange={handleChange}
            type="text"
            placeholder={info?.yourName1}
            style={{ textTransform: 'capitalize' }}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            value={detail.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
          />
        </div>
        <div>
          <label htmlFor="phone">{info?.phone}</label>
          <input
            name="phone"
            value={detail.phone}
            onChange={handleChange}
            type="number"
            placeholder={info?.phone1}
          />
        </div>
        <div>
          <label htmlFor="additional">{info?.additionalNames}</label>
          <textarea
            name="additional"
            type="text"
            placeholder={info?.additionalNames1}
            rows="3"
            value={detail.additional}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">{info?.yourMessage}</label>
          <textarea
            name="message"
            type="text"
            placeholder={info?.yourMessage1}
            rows="3"
            value={detail.message}
            onChange={handleChange}
          />
        </div>
      </FormWrapper>
      <ButtonWrapper onClick={accept} text={info?.yourResponse} />
    </ComponentWrapper>
  );
};

export default Accept;
