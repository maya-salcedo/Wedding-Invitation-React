import React from 'react';
import styled from 'styled-components';


const StyledFooter = styled.footer`
  position: absolute;
  text-align: center;
  bottom: 0;
  width: 95%;
  height: 3rem;
  margin: auto;
  font-style: italic;
  > p {
    text-align: center
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