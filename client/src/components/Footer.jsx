import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  height: 2rem;
  > p {
    font-style: italic;
    font-size: 0.9rem;
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