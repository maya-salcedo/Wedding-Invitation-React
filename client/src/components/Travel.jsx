import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';

const StyledTitle = styled(GoldHeadingTwo)`
    padding-bottom: 3%;
`;


 
const Travel = () => {

    const [recommendation, setRecommendation] = useState();

    const getRecommendation = async () => {
        const {data} = await axios.get('http://localhost:9000/travel');
        setRecommendation(data);
    };

    useEffect(() => {
        getRecommendation();
    }, []);

    return (
       <div>
        <StyledTitle>{recommendation?.title}</StyledTitle>
        <p>{recommendation?.text}</p>
       </div>
    );
}
 
export default Travel;