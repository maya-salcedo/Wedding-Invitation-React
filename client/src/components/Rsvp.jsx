import React from 'react';
import styled from 'styled-components';
//import styled from 'styled-components';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';
import ComponentWrapper from '../elements/StyledContainer';

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
  transition: .3s;
  -webkit-transition: .3s;
  -moz-transition: .3s;
  -o-transition: .3s;
  display: inline-block;
  border: 0.1rem #D5AD6D solid;
  color: #D5AD6D; 

  &:hover {
  color: #f9f3f3;
  background: -webkit-linear-gradient(transparent, transparent),
  -webkit-linear-gradient(top, rgba(163,126,67,1) 0%, rgba(213,173,109,1) 26%, rgba(226,186,120,1) 35%, rgba(226,186,120,1) 45%, rgba(213,173,109,1) 61%, rgba(163,126,67,1) 100%);
}
`;

const Rsvp = ({ history }) => {

  const accept = async () => {
    try {
      history.push('/accept');
    } catch (err) {
      history.push('/unconfirmed-accept');
    }
  }

  const decline = async () => {
    try {
      history.push('/decline');
    } catch (err) {
      history.push('/unconfirmed-decline');
    }
  }


  return (
    <ComponentWrapper>
      <GoldHeadingTwo text="Respond by" />
      <TextWrapper>31 May 2021</TextWrapper>
      <ButtonWrapper onClick={accept}>Accept with pleasure</ButtonWrapper>
      <ButtonWrapper onClick={decline}>Decline with regrets</ButtonWrapper>
    </ComponentWrapper>
  );
}

export default Rsvp;