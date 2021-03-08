import React, { Component, useState } from 'react';
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
import ConfirmedAccept from './components/ConfirmedAccept';
import UnconfirmedAccept from './components/UnconfirmedAccept';
import ConfirmedDecline from './components/ConfirmedDecline';
import UnconfirmedDecline from './components/UnconfirmedDecline';
import { FlagContext } from './components/FlagContext';


const App = () => {
    const [flag, setFlag] = useState('english')
    return (
      <BrowserRouter>
        <GlobalStyle />
        <FlagContext.Provider value={{flag, setFlag}} >
          <Navigation />
          <Switch >
            <Route path="/" component={Home} exact />
            <Route path="/wedding" component={Wedding}/>
            <Route path="/gift" component={Gift} />
            <Route path="/travel" component={Travel} />
            <Route path="/rsvp" component={Rsvp} />
            <Route path="/accept" component={Accept} />
            <Route path="/decline" component={Decline} />
            <Route path="/confirmed-accept" component={ConfirmedAccept} />
            <Route path="/unconfirmed-accept" component={UnconfirmedAccept} />
            <Route path="/confirmed-decline" component={ConfirmedDecline} />
            <Route path="/unconfirmed-decline" component={UnconfirmedDecline} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </FlagContext.Provider>
      </BrowserRouter>
    );
}

export default App;