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

.icon {
    margin-bottom: 0.5rem;
    font-size: 300%;
    opacity: 0.4;
}

.rsvp-button {
  cursor: pointer;
  margin: 0.5rem auto 0.5rem auto;
  border-radius: 5px;
  text-decoration: none;
  padding: 0.5rem;
  width: 15rem;
  font-size: 1.1rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
  transition: .3s;
  -webkit-transition: .3s;
  -moz-transition: .3s;
  -o-transition: .3s;
  display: inline-block;
  border: 0.1rem #D5AD6D solid;
  color: #D5AD6D; /*if no support for background-clip*/
  /*
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
   */
}

.rsvp-button:hover {
  color: #f9f3f3;
  background: -webkit-linear-gradient(transparent, transparent),
  -webkit-linear-gradient(top, rgba(163,126,67,1) 0%, rgba(213,173,109,1) 26%, rgba(226,186,120,1) 35%, rgba(226,186,120,1) 45%, rgba(213,173,109,1) 61%, rgba(163,126,67,1) 100%);
  /*background: -webkit-linear-gradient(transparent, transparent),
  -webkit-linear-gradient(top, rgba(213,173,109,1) 0%, rgba(213,173,109,1) 26%, rgba(226,186,120,1) 35%, rgba(163,126,67,1) 45%, rgba(145,112,59,1) 61%, rgba(213,173,109,1) 100%);*/
  

}

`;


export default GlobalStyle;