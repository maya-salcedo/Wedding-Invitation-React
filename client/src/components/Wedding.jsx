import React, { useState, useEffect } from 'react';
import Flower from './image/flower.png';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCocktail, faUserTie } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import ComponentWrapper from '../elements/StyledContainer';
 
const FirstBoxWrapper = styled.div`
    padding: 1%;
`;

const FlowerImage = styled.img`
    width: 70%; 
    transform: rotate(180deg);
`;

const InvitationWrapper = styled.div`
    background-color: whitesmoke;
    position: relative;
    padding: 1.5rem;
    border-radius: 2%;
    display: inline-block;
`;


const GoldText = styled.h2`
    color: #D5AD6D; /*if no support for background-clip*/
    background: -webkit-linear-gradient(transparent, transparent),
    -webkit-linear-gradient(top, rgba(213,173,109,1) 0%, rgba(213,173,109,1) 26%, rgba(226,186,120,1) 35%, rgba(163,126,67,1) 45%, rgba(145,112,59,1) 61%, rgba(213,173,109,1) 100%);
    background: -o-linear-gradient(transparent, transparent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`; 

const InviteText = styled.h3`
    font-size: 1.5rem;
    font-family: 'Parisienne', cursive;
    font-weight: 500;
    margin: 0 0 2rem 0;
`;

const StyledDate = styled(GoldText)`
    font-size: 1.8rem;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    padding: 0;
    margin: 0;
`;

const StyledTime = styled.h3`
    padding: 0;
    margin-top: 0.2rem;
    font-size: 1rem;
`;

const StyledChurchName = styled(GoldText)`
    font-size: 1.2rem;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    margin: 3rem 0 0 0;
`;

const StyledAddress = styled.h4`
    padding: 0;
    margin: 0.2rem 0 0.2rem 0;
    font-size: 0.9rem;
`;

const StyledReceptionText = styled.p`
    font-style: oblique;
    font-size: 0.8rem;
    font-family: 'EB Garamond', serif;
    margin: 3rem 0 0 0;
    padding: 0;
`;


const StyledRestaurantName = styled(GoldText)`
    font-size: 1.2rem;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    margin: 1rem 0 0 0;
    padding: 0;
`;

const SecondBoxWrapper = styled.div`
    padding: 23% 1% 1% 1%;
    position: relative;
`;

const StyledInformation = styled.h2`
    font-weight: bolder;
    font-family: 'Parisienne', cursive;
    font-size: 2.1rem;
    color: #679b9b;
    padding-bottom: 3%;
`;

const InformationWrapper = styled.div`
    padding: 1.5rem;
    font-family: 'EB Garamond', serif;
    font-size: 1.2rem;
`;


const Wedding = () => {
    const [instruction, setInstruction] = useState();
    
    const getInstruction = async () => {
        const {data} = await axios.get('http://localhost:9000/wedding');
        setInstruction(data);
    }

    useEffect(() => {
        getInstruction();
    }, []);

    return (
       <ComponentWrapper>      
       <FirstBoxWrapper>
            <div className="flower-box"><FlowerImage src={Flower} alt="flower-img" /></div>
            <InvitationWrapper>
                <div>
                    <InviteText>{instruction?.invite}</InviteText>
                    <StyledDate> {instruction?.date} </StyledDate>
                    <StyledTime>{instruction?.time}</StyledTime>
                    <StyledChurchName>{instruction?.church?.name}</StyledChurchName>
                    <StyledAddress>{instruction?.church?.addressLine1}</StyledAddress>
                    <StyledAddress>{instruction?.church?.addressLine2}</StyledAddress>
                </div>
                <div>
                    <StyledReceptionText>Reception to follow at</StyledReceptionText>
                    <StyledRestaurantName>{instruction?.restaurant?.name}</StyledRestaurantName>
                    <StyledAddress>{instruction?.restaurant?.addressLine1}</StyledAddress>
                    <StyledAddress>{instruction?.restaurant?.addressLine2}</StyledAddress>
                </div>
                </InvitationWrapper>      
        </FirstBoxWrapper>
        <SecondBoxWrapper>
            <StyledInformation>Wedding Information</StyledInformation>
            <InformationWrapper>
                <FontAwesomeIcon icon={faCocktail} className="icon" />
                <p>{instruction?.dining}</p>
            </InformationWrapper>
            <InformationWrapper>
                <FontAwesomeIcon icon={faUserTie} className="icon" />
                <p>{instruction?.dresscode}</p> 
            </InformationWrapper>
            
        </SecondBoxWrapper>
        </ComponentWrapper>
    );
}
 
export default Wedding;