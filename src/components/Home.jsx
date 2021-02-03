import React from 'react';
import Flower from './image/flower.png';
 
const Home = () => {
    return (
       <div>
          <h1 className="goldtextcss">Emanuele <span className="and"> & </span> Maya</h1>
           <p>ARE GETTING MARRIED</p>
           <img className="flower" src={Flower} alt="flower-img"/>
       </div>
    );
}
 
export default Home;