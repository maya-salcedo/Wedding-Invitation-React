import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
    text-align: center;
    background-color: #fde2e2;
    background-image: url("https://www.transparenttextures.com/patterns/white-wall-3.png");
    color:  #679b9b;
    padding: 1rem;
    font-family: 'Montserrat', sans-serif;

}

html {
    display: grid;
    text-align: center;
}


.nav-link {
    color:  #679b9b !important;
    margin: 0.5%;
    text-decoration: none;
}

.nav-link:hover {
    border: solid  #679b9b 1px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    text-decoration: none;
    color:  #679b9b;
}


h1 {
    font-family: 'Parisienne', cursive;
    font-size: 8rem;
    font-weight: 100;
    padding: 1%;
    margin-bottom: 0%;
    padding-bottom: 1%;
}

h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 500;
    color: #679b9b;
    margin-block-end: 0;
}

h4 {
    font-size: 0.9rem;
}

h3 {
    font-size: 1rem;

}


p {
    margin: 0.1rem 0 0 0;
    font-family: 'EB Garamond', serif;
    font-size: 1.2rem;
}

button {
    color: #679b9b;
    background-color: #fde2e2;
    border: none;
    cursor: pointer;
    border-radius: 10%;
    font-size: 100%
}

.button:hover {
  background-color: #4CAF50; /* Green */
  color: white;
}

.icon {
    margin-bottom: 0.5rem;
    font-size: 300%;
    opacity: 0.4;
}

.rsvp-button {
   -webkit-border-radius: 1rem;
   -moz-border-radius: 1rem;
   border-radius: 1rem;
   color: #D5AD6D;
   font-size: 1.2rem;
   font-family: 'Montserrat', sans-serif;
   font-weight: 100;
   padding: 0.8rem;
   margin: 0.5rem auto 0.5rem auto;
   width: 15rem;
   background-color: #f9f3f3;
   -webkit-box-shadow: 1px 1px 20px 0 #2B7070;
   -moz-box-shadow: 1px 1px 20px 0 #2B7070;
   box-shadow: 1px 1px 20px 0 #2B7070;
   text-shadow: 1px 1px 20px #F9F7F5;
   text-decoration: none;
   display: inline-block;
   cursor: pointer;
   text-align: center;
}

.rsvp-button:hover {
   background: ;
   border: solid #679B9B 1px;
   -webkit-border-radius: 19px;
   -moz-border-radius: 19px;
   border-radius: 19px;
   text-decoration: none;
}

`;


export default GlobalStyle;