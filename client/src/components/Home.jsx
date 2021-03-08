import React, { useState, useEffect, useContext } from 'react';
import Flower from './image/flower.png';
import styled from 'styled-components';
import axios from 'axios';
import ComponentWrapper from '../elements/StyledContainer';
import { FlagContext } from './FlagContext';

const StyledName = styled.h1`
  font-family: 'Parisienne', cursive;
  font-size: 8rem;
  font-weight: 100;
  padding: 1%;
  margin-bottom: 0%;
  padding-bottom: 1%;
  color: #D5AD6D; /*if no support for background-clip*/
  background: -webkit-linear-gradient(transparent, transparent),
  -webkit-linear-gradient(top, rgba(213,173,109,1) 0%, rgba(213,173,109,1) 26%, rgba(226,186,120,1) 35%, rgba(163,126,67,1) 45%, rgba(145,112,59,1) 61%, rgba(213,173,109,1) 100%);
  background: -o-linear-gradient(transparent, transparent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 1028px) {
    font-size: 6.2rem;
    padding-bottom: 5%;
  }
  > span {
    font-size: 4rem;
    @media (max-width: 1028px) {
     font-size: 3rem;
    }
  }
`;

const StyledText = styled.p`
  margin: 0.1rem 0 0 0;
  font-family: 'EB Garamond', serif;
  font-size: 1.2rem;
`;

const FlowerWrapper = styled.div`
  padding: 1rem;
  > img {
    width: 80%;
    transform: rotate(180deg);
  }
`;

const Home = () => {
  const {flag} = useContext(FlagContext);

  const [couple, setCouple] = useState();
  const query = flag === 'italy' ? '?it=true' : '';
  const getCouple = async () => {
    const { data } = await axios.get(`http://localhost:9000/couple${query}`);
    setCouple(data);
  }
  useEffect(() => {
    getCouple();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag]);

  return (
    <ComponentWrapper>
      <StyledName>
        {couple?.groom}
        <span> & </span>
        {couple?.bride}
      </StyledName>
      <StyledText>{couple?.event}</StyledText>
      <FlowerWrapper>
        <img src={Flower} alt="flower-img" />
      </FlowerWrapper>
    </ComponentWrapper>
  );
}

export default Home;