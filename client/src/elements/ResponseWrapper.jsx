import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 25rem;
  height: auto;
  margin: 2% auto 2% auto;
  text-align: justify;
  padding: 1rem;
  @media (max-width: 1028px) {
    width: 19rem;
  }
  @media (max-width: 400px) {
    width: 17rem;
    padding: 0.8rem;
  }
  @media (max-width: 298px) {
    width: 14rem;
  }
  @media (max-width: 280px) {
    width: 12rem;
  }
  > div {
    padding: 2rem 0 2rem 0;
    font-weight: bold;
  }
`;

const ResponseWrapper = ({children}) => <StyledDiv>{children}</StyledDiv>; 

export default ResponseWrapper;