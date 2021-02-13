import React from 'react'
import styled from 'styled-components';

const GoldText = styled.h2`
  color: #D5AD6D; /*if no support for background-clip*/
  background: -webkit-linear-gradient(transparent, transparent),
  -webkit-linear-gradient(top, rgba(213,173,109,1) 0%, rgba(213,173,109,1) 26%, rgba(226,186,120,1) 35%, rgba(163,126,67,1) 45%, rgba(145,112,59,1) 61%, rgba(213,173,109,1) 100%);
  background: -o-linear-gradient(transparent, transparent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`; 

const Wrapper = styled.div`
	background-color: whitesmoke;
	position: relative;
	padding: 1.5rem;
	border-radius: 2%;
	display: inline-block;
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

const GoldHeader = styled(GoldText)`
	font-size: 1.2rem;
	font-weight: 500;
	font-family: 'Montserrat', sans-serif;
`;

const StyledAddress = styled.h4`
	padding: 0;
	margin: 0.2rem 0 0.2rem 0;
	font-size: 0.9rem;
	line-height: 1.5;
`;

const StyledReceptionText = styled.p`
	font-style: oblique;
	font-size: 0.8rem;
	font-family: 'EB Garamond', serif;
	margin: 3rem 0 0 0;
	padding: 0;
`;

export const InvitationWrapper = (props) => {
  const {
    invite, date, time, churchName, churchAddressFirst,
    churchAddressSecond, restaurantName, restaurantAddressFirst,
    restaurantAddressSecond
  } = props;
  return (
    <Wrapper>
      <InviteText>{invite}</InviteText>
      <StyledDate> {date} </StyledDate>
      <StyledTime>{time}</StyledTime>
      <GoldHeader margin="3rem 0 0 0">{churchName}</GoldHeader>
      <StyledAddress>{churchAddressFirst}
        <br />
        {churchAddressSecond}
      </StyledAddress>
      <StyledReceptionText>Reception to follow at</StyledReceptionText>
      <GoldHeader margin="1rem 0 0 0">{restaurantName}</GoldHeader>
      <StyledAddress>{restaurantAddressFirst}
        <br />
        {restaurantAddressSecond}
      </StyledAddress>
    </Wrapper>
  )
}
