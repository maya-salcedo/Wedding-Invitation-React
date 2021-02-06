import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import Wedding from './components/Wedding';
import Gift from './components/Gift';
import Travel from './components/Travel';
import Rsvp from './components/Rsvp';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/wedding" component={Wedding}/>
             <Route path="/gift" component={Gift}/>
             <Route path="/travel" component={Travel}/>
             <Route path="/rsvp" component={Rsvp}/>
            <Route component={Error}/>
           </Switch>
           <Footer />
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;