import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './elements/GlobalStyle';

import Home from './components/Home';
import Wedding from './components/Wedding';
import Gift from './components/Gift';
import Travel from './components/Travel';
import Rsvp from './components/Rsvp';
import Accept from './components/Accept';
import Decline from './components/Decline';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Confirmed from './components/Confirmed';
import Unconfirmed from './components/Unconfirmed';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <GlobalStyle />
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/wedding" component={Wedding} />
            <Route path="/gift" component={Gift} />
            <Route path="/travel" component={Travel} />
            <Route path="/rsvp" component={Rsvp} />
            <Route path="/accept" component={Accept} />
            <Route path="/decline" component={Decline} />
            <Route path="/confirmed" component={Confirmed} />
            <Route path="/unconfirmed" component={Unconfirmed} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;