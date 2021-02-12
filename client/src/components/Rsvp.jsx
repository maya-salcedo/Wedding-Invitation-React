import React from 'react';
import styled from 'styled-components';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';

const StyledTitle = styled(GoldHeadingTwo)`
    padding-bottom: 3%;
`;

const Rsvp = () => {
    return (
       <div>
        <StyledTitle>RSVP</StyledTitle>
        <p>RSVP by 31 May 2021</p>
       </div>
    );
}
 
export default Rsvp;