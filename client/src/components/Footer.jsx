import React from 'react';
import styled from 'styled-components';


const StyledFooter = styled.footer`
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 100vw;
  height: 3rem;
  margin: auto;
  font-style: italic;
  > p {
    position: relative; 
    left: -50%;
  }
`;


const Footer = () => {
  return (
    <StyledFooter>
    <p>Copyright © EM 2021</p>
    </StyledFooter>
  );
}

export default Footer;