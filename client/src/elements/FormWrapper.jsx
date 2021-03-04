import React from 'react';
import styled from 'styled-components';

const Form = styled.div`
  background-color: whitesmoke;
  padding: 1.5rem;
  border-radius: 2%;
  width: 20rem;
  height: auto;
  margin: 2% auto 2% auto;
`;
    
const FormGroup = styled.div`
  width: 100%;
  padding-bottom: 1em;
  > label{
    display: inline-block;
    width: 10em;
    margin-right: 1em;
    font-family: 'Parisienne', cursive;
    text-align: left;
    font-size: 1.5rem;
  }
  > input, textarea {
    box-sizing: border-box;
    background-color: transparent;
    text-decoration: none;
    padding: 0.5rem;
    border-bottom-right-radius: 3px 15px;
    border-bottom-left-radius: 3px 15px;
    border: solid 3px transparent;
    border-bottom: dotted 1.5px #679b9b;
    font-size: 1rem;
    width: 70%;
    margin-bottom: 20px;
    font-family: 'Montserrat', sans-serif;
  }

`;


const Button = styled.button`
  cursor: pointer;
  margin: 0.5rem auto 0.5rem auto;
  border-radius: 5px;
  text-decoration: none;
  padding: 0.5rem;
  width: 15rem;
  font-size: 1.1rem
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
  transition: .3s;
  -webkit-transition: .3s;
  -moz-transition: .3s;
  -o-transition: .3s;
  display: inline-block;
  color: #f9f3f3;
  border: 0.1rem #D5AD6D solid;
  background: -webkit-linear-gradient(transparent, transparent),
  -webkit-linear-gradient(top, rgba(163,126,67,1) 0%, rgba(213,173,109,1) 26%, rgba(226,186,120,1) 35%, rgba(226,186,120,1) 45%, rgba(213,173,109,1) 61%, rgba(163,126,67,1) 100%);

  &:hover {
  border: 0.1rem #679b9b solid;
  color: #679b9b;
  background: #f9f3f3;
`;
  
const FormWrapper = ({children}) => <Form>{children}</Form>; 
export const FormGroupWrapper = ({children}) => <FormGroup>{children}</FormGroup>; 
export const  ButtonWrapper = ({children}) => <Button />;

export default FormWrapper;