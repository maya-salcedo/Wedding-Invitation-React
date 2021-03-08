import React, { useState, useEffect, useContext } from 'react';
import Flower from './image/flower.png';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCocktail, faUserTie } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import ComponentWrapper from '../elements/StyledContainer';
import { InvitationWrapper } from './InvitationWrapper'
import { FlagContext } from './FlagContext';

const FirstBoxWrapper = styled.div`
  padding: 1%;
`;

const FlowerWrapper = styled.div`
  height: 5rem;
  >img {
    width: 70%; 
    transform: rotate(180deg);
  }
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
  const {flag} = useContext(FlagContext);

  const [instruction, setInstruction] = useState();
  const query = flag === 'italy' ? '?it=true' : '';
  const getInstruction = async () => {
    const { data } = await axios.get(`http://localhost:9000/wedding${query}`);
    setInstruction(data);
  }

  useEffect(() => {
    getInstruction();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag]);

  return (
    <ComponentWrapper>
      <FirstBoxWrapper>
        <FlowerWrapper>
          <img src={Flower} alt="flower-img" />
        </FlowerWrapper>
        <InvitationWrapper
          invite={instruction?.invite}
          date={instruction?.date}
          time={instruction?.time}
          churchName={instruction?.church?.name}
          churchAddressFirst={instruction?.church?.addressLine1}
          churchAddressSecond={instruction?.church?.addressLine2}
          receptionText={instruction?.restaurant?.reception}
          restaurantName={instruction?.restaurant?.name}
          restaurantAddressFirst={instruction?.restaurant?.addressLine1}
          restaurantAddressSecond={instruction?.restaurant?.addressLine2}
        />
      </FirstBoxWrapper>
      <SecondBoxWrapper>
        <StyledInformation>
          Wedding Information</StyledInformation>
        <InformationWrapper>
          <FontAwesomeIcon icon={faCocktail} className="icon" />
          <p>{instruction?.dining?.line1}</p>
          <p>{instruction?.dining?.line2}</p>
          <FontAwesomeIcon icon={faUserTie} className="icon" />
          <p>{instruction?.dresscode?.line1}</p>
          <p>{instruction?.dresscode?.line2}</p>
          <p>{instruction?.dresscode?.line3}</p>
          <p>{instruction?.dresscode?.line4}</p>
        </InformationWrapper>
      </SecondBoxWrapper>
    </ComponentWrapper>
  );
}

export default Wedding;