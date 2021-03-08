import React from 'react';
import styled from 'styled-components';
import Flower from './image/flower.png';

const StyledFooter = styled.footer`
  position: absolute;
  text-align: center;
  bottom: 0;
  width: 95%;
  height: 3rem;
  margin: auto;
  > p {
    text-align: center
  }
`;


const Footer = () => {
  return (
    <StyledFooter>
    <p>© EM 2021</p>
    </StyledFooter>
  );
}

export default Footer;