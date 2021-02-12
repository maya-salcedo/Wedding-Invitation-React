import React, { useState, useEffect } from 'react';
import Flower from './image/flower.png';
import styled from 'styled-components';
import axios from 'axios';
import StyledContainer from '../elements/StyledContainer'

const StyledSpan = styled.span`
	font-size: 4rem;
`;

const StyledText = styled.p`
	margin: 0.1rem 0 0 0;
    font-family: 'EB Garamond', serif;
    font-size: 1.2rem;
`;

const StyledFlower = styled.img`
	width: 80%;
    transform: rotate(180deg);
    padding: 1rem;
`;


const Home = () => {
	const [couple, setCouple] = useState()
	const getCouple = async () => {
		const { data } = await axios.get('http://localhost:9000/couple');
		setCouple(data);
	}
	useEffect(() => {
		getCouple();
	}, []);

	return (
		<StyledContainer>
			<h1 className="goldtextcss">{couple?.groom} <StyledSpan className="and"> & </StyledSpan> {couple?.bride}</h1>
			<StyledText>ARE GETTING MARRIED </StyledText>
			<StyledFlower src={Flower} alt="flower-img" />
		</StyledContainer>
	);
}

export default Home;