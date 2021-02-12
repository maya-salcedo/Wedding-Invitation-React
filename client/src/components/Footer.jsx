import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    position: relative;
    text-align: center;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
`;

const Footer = () => {
    return (
       <div>
         <StyledFooter><p>© EM 2021</p></StyledFooter>
       </div>
    );
}
 
export default Footer;