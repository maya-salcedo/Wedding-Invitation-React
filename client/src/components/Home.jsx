import React, { useState, useEffect } from 'react';
import Flower from './image/flower.png';
import styled from 'styled-components';
import axios from 'axios';
import ComponentWrapper from '../elements/StyledContainer';

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
`;

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
		<ComponentWrapper>
			<StyledName>{couple?.groom} <StyledSpan className="and"> & </StyledSpan> {couple?.bride}</StyledName>
			<StyledText>ARE GETTING MARRIED </StyledText>
			<div className="flower-container"><StyledFlower src={Flower} alt="flower-img" /></div>
		</ComponentWrapper>
	);
}

export default Home;