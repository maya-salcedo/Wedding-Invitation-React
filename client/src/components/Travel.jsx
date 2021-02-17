import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';

const Travel = () => {
  const [recommendation, setRecommendation] = useState();
  const getRecommendation = async () => {
    const { data } = await axios.get('/travel');
    setRecommendation(data);
  };

  useEffect(() => {
    getRecommendation();
  }, []);

  return (
    <div>
      <GoldHeadingTwo text={recommendation?.title} />
      <p>{recommendation?.text}</p>
    </div>
  );
}

export default Travel;