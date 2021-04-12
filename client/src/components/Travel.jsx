import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';
import ComponentWrapper from '../elements/StyledContainer';
import ResponseWrapper from '../elements/ResponseWrapper';
import styled from 'styled-components';
import { FlagContext } from './FlagContext';

const MapWrapper = styled.img`
  padding: 1rem;
  width: 30rem;
  height: auto;
  border-radius: 8%;
  margin-left: auto;
  margin-right: auto;
  @media(max-width: 600px){
    width: 20rem;
  }
  @media(max-width: 394px){
    width: 15rem;
    padding: 2rem;
  }
  @media(max-width: 320px){
    width: 10rem;
    padding: 1rem;
  }
`;

const Travel = () => {
  const { flag } = useContext(FlagContext);

  const [recommendation, setRecommendation] = useState();
  const query = flag === 'italy' ? '?it=true' : '';
  const getRecommendation = async () => {
    const { data } = await axios.get(`http://localhost:9000/travel${query}`);
    setRecommendation(data);
  };

  useEffect(() => {
    getRecommendation();
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag]);

  return (
    <ComponentWrapper>
      <GoldHeadingTwo text={recommendation?.title} />
      <MapWrapper img src="image/Lake Como Map.jpg" alt="como-map.img" />
      <ResponseWrapper>
        <p>{recommendation?.text}</p>
      </ResponseWrapper>
    </ComponentWrapper>
  );
}

export default Travel;