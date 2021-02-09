import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div className="navbar">
          <NavLink className="nav-link" to="/">HOME</NavLink>
          <NavLink className="nav-link" to="/wedding">WEDDING</NavLink>
          <NavLink className="nav-link" to="/gift">GIFTS</NavLink>
          <NavLink className="nav-link" to="/travel">TRAVEL</NavLink>
          <NavLink className="nav-link" to="/rsvp">RSVP</NavLink>
       </div>
    );
}
 
export default Navigation;