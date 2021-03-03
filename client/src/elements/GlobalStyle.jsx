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

.decline-form {
  background-color: whitesmoke;
  padding: 1.5rem;
  border-radius: 2%;
  width: 22rem;
  height: 20rem;
  margin: 2% auto 2% auto;
}

.form-group {
  float: left;
  clear: left;
  width: 100%;
  padding-bottom: 1em;
}
.label {
  float: left;
  width: 10em;
  margin-right: 1em;
  font-family: 'Parisienne', cursive;
}

input, textarea {
  box-sizing: border-box;
  background-color: transparent;
  padding: 0.5rem;
  border-bottom-right-radius: 15px 3px;
  border-bottom-left-radius: 3px 15px;
  border: solid 3px transparent;
  border-bottom: dotted 1.5px #679b9b;
  font-size: 1rem;
  color: hsla(260, 2%, 25%, 0.7);
  width: 70%;
  margin-bottom: 20px;
}

.decline-button {
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
  color: #f9f3f3;
  border: 0.1rem #D5AD6D solid;
  background: -webkit-linear-gradient(transparent, transparent),
  -webkit-linear-gradient(top, rgba(163,126,67,1) 0%, rgba(213,173,109,1) 26%, rgba(226,186,120,1) 35%, rgba(226,186,120,1) 45%, rgba(213,173,109,1) 61%, rgba(163,126,67,1) 100%);

}

.decline-button:hover {
  border: 0.1rem #D5AD6D solid;
  color: #D5AD6D;
  background: #f9f3f3;
}

`;


export default GlobalStyle;