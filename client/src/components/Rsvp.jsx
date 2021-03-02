import React from 'react';
import styled from 'styled-components';
//import styled from 'styled-components';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';
import ComponentWrapper from '../elements/StyledContainer';

const TextWrapper = styled.p`
  margin-block-end: 2em;
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
      <button className="rsvp-button" onClick={accept}>Accept with pleasure</button>
      <button className="rsvp-button" onClick={decline}>Decline with regrets</button>
    </ComponentWrapper>
  );
}

export default Rsvp;