import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: 1fr;
`;

const ComponentWrapper = ({ children }) => <StyledDiv>{children}</StyledDiv>;



export default ComponentWrapper;
