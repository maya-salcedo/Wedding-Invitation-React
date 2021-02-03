import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './Home';
import Wedding from './Wedding';
import Gift from './Gift';
import Travel from './Travel';
import Rsvp from './Rsvp';
import Error from './Error';
import Navigation from './Navigation';
import Footer from './Footer';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/wedding" component={Wedding}/>
             <Route path="/gifts" component={Gift}/>
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