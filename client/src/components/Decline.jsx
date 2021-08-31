import React, { useState, useEffect, useContext } from 'react';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';
import axios from 'axios';
import ComponentWrapper from '../elements/StyledContainer';
import FormWrapper, { ButtonWrapper } from '../elements/FormWrapper';
import { FlagContext } from './FlagContext';

const Decline = ({ history }) => {
  const { flag } = useContext(FlagContext);

  const [info, setInfo] = useState();
  const query = flag === 'italy' ? '?it=true' : '';
  const getInfo = async () => {
    const { data } = await axios.get(`/api/decline${query}`);
    setInfo(data);
  };

  useEffect(() => {
    getInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag]);

  var [detail, setDetail] = useState({
    fname: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (event) => {
    setDetail({
      ...detail,
      [event.target.name]: event.target.value,
    });
  };

  const decline = async () => {
    try {
      if (detail.fname.length === 0) {
        alert('Please enter your name.');
      } else {
        await axios.post('/api/decline', {
          Name: detail.fname,
          Phone: detail.phone,
          Email: detail.email,
          Message: detail.message,
          Response: 'Decline',
        });
        history.push('/confirmed-decline');
      }
    } catch (err) {
      history.push('/unconfirmed-decline');
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
            name="fname"
            type="text"
            placeholder={info?.yourName1}
            value={detail.fname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={detail.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">{info?.phone}</label>
          <input
            name="phone"
            type="number"
            placeholder={info?.phone1}
            value={detail.phone}
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
      <ButtonWrapper onClick={decline} text={info?.yourResponse} />
    </ComponentWrapper>
  );
};

export default Decline;
