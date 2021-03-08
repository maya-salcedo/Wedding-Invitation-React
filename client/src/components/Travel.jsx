import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ComoMap from './image/Lake Como Map.jpg';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';
import ResponseWrapper from '../elements/ResponseWrapper';
import styled from 'styled-components';
import { FlagContext } from './FlagContext';

const MapWrapper = styled.img`
  padding: 1rem;
  width: 20rem;
  height: auto;
`;

const Travel = () => {
  const {flag} = useContext(FlagContext);

  const [recommendation, setRecommendation] = useState();
  const query = flag === 'italy' ? '?it=true' : '';
  const getRecommendation = async () => {
    const { data } = await axios.get(`http://localhost:9000/travel${query}`);
    setRecommendation(data);
  };

  useEffect(() => {
    getRecommendation();
  }, [flag]);

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