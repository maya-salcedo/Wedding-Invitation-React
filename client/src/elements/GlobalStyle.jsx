import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden; 
  text-align: center;
  background-color: #fde2e2;
  background-image: url("https://www.transparenttextures.com/patterns/white-wall-3.png");
  color:  #679b9b;
  font-family: 'Montserrat', sans-serif;
}

.nav-link {
    color:  #679b9b !important;
    margin: 0.5%;
    text-decoration: none;
    padding: 4px;
    font-size: 1.2rem;
}

.nav-link:hover {
    border: solid  #679b9b 1px;
    margin: 0.5%;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    text-decoration: none;
    color:  #679b9b;
    padding: 3px;
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
  line-height: 160%;
}

.icon {
  padding-top: 3rem;
  margin-bottom: 0.5rem;
  font-size: 300%;
  opacity: 0.4;
}

a {
  color: #679b9b;
}
a:link {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
`;


export default GlobalStyle;