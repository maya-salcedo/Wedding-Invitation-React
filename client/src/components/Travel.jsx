import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ComoMap from './image/Lake Como Map.jpg';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';
import ResponseWrapper from '../elements/ResponseWrapper';
import styled from 'styled-components';

const MapWrapper = styled.img`
  padding: 1rem;
  width: 20rem;
  height: auto;
`;

const Travel = () => {
  const [recommendation, setRecommendation] = useState();
  const getRecommendation = async () => {
    const { data } = await axios.get('http://localhost:9000/travel');
    setRecommendation(data);
  };

  useEffect(() => {
    getRecommendation();
  }, []);

  return (
    <div>
      <GoldHeadingTwo text={recommendation?.title} />
      <MapWrapper img src={ComoMap} alt="como-map.img" />
      <ResponseWrapper>
        <p>{recommendation?.text}</p>
      </ResponseWrapper>
    </div>
  );
}

export default Travel;