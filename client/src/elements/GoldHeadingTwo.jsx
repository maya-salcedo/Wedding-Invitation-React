import React from 'react';
import styled from 'styled-components';

const StyledHeading2 = styled.h2`
  color: #D5AD6D; /*if no support for background-clip*/
  background: -webkit-linear-gradient(transparent, transparent),
  -webkit-linear-gradient(top, rgba(213,173,109,1) 0%, rgba(213,173,109,1) 26%, rgba(226,186,120,1) 35%, rgba(163,126,67,1) 45%, rgba(145,112,59,1) 61%, rgba(213,173,109,1) 100%);
  background: -o-linear-gradient(transparent, transparent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bolder;
  font-family: 'Parisienne', cursive;
  font-size: 3rem;
  margin-top: 0;
`;

const StyledFailedHeading = styled.h2`
  color: #fa1e0e;
  font-weight: bold;
  font-size: 2rem;
`;

const GoldHeadingTwo = ({ text }) => <StyledHeading2>{text}</StyledHeading2>;
export const FailedHeading = ({ text }) => <StyledFailedHeading>{text}</StyledFailedHeading>;


export default GoldHeadingTwo;