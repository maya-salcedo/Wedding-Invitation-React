import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: 1fr;
  padding: 0 2rem;
  @media(max-width: 415px){
    padding: 0 1rem;
  }
  @media(max-width: 365px){
    padding: 0 0.5rem;
  }
`;

const ComponentWrapper = ({ children }) => <StyledDiv>{children}</StyledDiv>;

export default ComponentWrapper;
