import React from 'react';
//import styled from 'styled-components';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';
import ComponentWrapper from '../elements/StyledContainer';



const Rsvp = ({ history }) => {

  const accept = async () => {
    try {
      history.push('/accept');
    } catch (err) {
      history.push('/unconfirmed');
    }
  }

  const decline = async () => {
    try {
      history.push('/decline');
    } catch (err) {
      history.push('/unconfirmed');
    }
  }


  return (
    <ComponentWrapper>
      <GoldHeadingTwo text="Respond by" />
      <p>31 May 2021</p>
      <button onClick={accept}>Accept with pleasure</button>
      <button onClick={decline}>Decline with regrets</button>
    </ComponentWrapper>
  );
}

export default Rsvp;