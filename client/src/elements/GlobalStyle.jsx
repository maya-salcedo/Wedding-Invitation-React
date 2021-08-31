import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
    display: grid;
    text-align: center;
    position: relative;
    min-height: 100%;
}

body {
    text-align: center;
    background-color: #fde2e2;
    background-image: url("https://www.transparenttextures.com/patterns/white-wall-3.png");
    color:  #679b9b;
    padding: 1rem;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 60px;

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
