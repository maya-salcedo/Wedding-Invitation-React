import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';
import ComponentWrapper from '../elements/StyledContainer';
import ResponseWrapper from '../elements/ResponseWrapper';
import styled from 'styled-components';
import { FlagContext } from './FlagContext';

const MapWrapper = styled.div`
  > img {
    padding: 1rem;
    width: 20rem;
    height: auto;
    border-radius: 8%;
  }
`;

const Travel = () => {
  const { flag } = useContext(FlagContext);

  const [recommendation, setRecommendation] = useState();
  const query = flag === 'italy' ? '?it=true' : '';
  const getRecommendation = async () => {
    const { data } = await axios.get(`/api/travel${query}`);
    setRecommendation(data);
  };

  useEffect(() => {
    getRecommendation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag]);

  return (
    <ComponentWrapper>
      <GoldHeadingTwo text={recommendation?.title} />
      <MapWrapper>
        <img src="image/comolake.jpg" alt="como-map.img" />
      </MapWrapper>
      <ResponseWrapper>
        <p>{recommendation?.text}</p>
      </ResponseWrapper>
    </ComponentWrapper>
  );
};

export default Travel;
