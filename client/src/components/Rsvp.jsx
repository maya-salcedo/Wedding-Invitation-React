import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';
import ComponentWrapper from '../elements/StyledContainer';
import { FlagContext } from './FlagContext';

const TextWrapper = styled.p`
  margin-block-end: 2em;
`;

const ButtonWrapper = styled.button`
  cursor: pointer;
  margin: 0.5rem auto 0.5rem auto;
  border-radius: 5px;
  text-decoration: none;
  padding: 0.5rem;
  width: 15rem;
  font-size: 1.1rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  display: inline-block;
  border: 0.1rem #d5ad6d solid;
  color: #d5ad6d;

  &:hover {
    color: #f9f3f3;
    background: -webkit-linear-gradient(transparent, transparent),
      -webkit-linear-gradient(top, rgba(163, 126, 67, 1) 0%, rgba(
              213,
              173,
              109,
              1
            )
            26%, rgba(226, 186, 120, 1) 35%, rgba(226, 186, 120, 1) 45%, rgba(
              213,
              173,
              109,
              1
            )
            61%, rgba(163, 126, 67, 1) 100%);
  }
`;

const Rsvp = ({ history }) => {
  const { flag } = useContext(FlagContext);
  const [message, setMessage] = useState();
  const query = flag === 'italy' ? '?it=true' : '';
  const getMessage = async () => {
    const { data } = await axios.get(`/api/rsvp${query}`);
    setMessage(data);
  };

  useEffect(() => {
    getMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag]);

  const accept = async () => {
    try {
      history.push('/accept');
    } catch (err) {
      history.push('/unconfirmed-accept');
    }
  };

  const decline = async () => {
    try {
      history.push('/decline');
    } catch (err) {
      history.push('/unconfirmed-decline');
    }
  };

  return (
    <ComponentWrapper>
      <GoldHeadingTwo text={message?.instruction} />
      <TextWrapper>{message?.date}</TextWrapper>
      <ButtonWrapper onClick={accept}>{message?.attending}</ButtonWrapper>
      <ButtonWrapper onClick={decline}>{message?.notattending}</ButtonWrapper>
    </ComponentWrapper>
  );
};

export default Rsvp;
