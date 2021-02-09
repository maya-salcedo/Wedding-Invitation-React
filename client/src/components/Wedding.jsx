import React, { useState, useEffect } from 'react';
import Flower from './image/flower.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCocktail, faUserTie } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
 
 
const Wedding = () => {
    const [instruction, setInstruction] = useState();
    
    const getInstruction = async () => {
        const {data} = await axios.get('http://localhost:9000/wedding');
        setInstruction(data);
    }

    useEffect(() => {
        getInstruction();
    }, []);

    return (
       <div className="wedding-container">      
       <div className="first-box">
            <div className="flower-box"><img className="background-flower" src={Flower} alt="flower-img"/></div>
            <div className="centered">
                <div>
                    <h3 className="invite">{instruction?.invite}</h3>
                    <h2 className="goldtextcss date"> {instruction?.date} </h2>
                    <h3 className="time">{instruction?.time}</h3>
                    <h3 className="goldtextcss church">{instruction?.church?.name}</h3>
                    <h4 className="address">{instruction?.church?.addressLine1}</h4>
                    <h4 className="address">{instruction?.church?.addressLine2}</h4>
                </div>
                <div>
                    <p className="reception">Reception to follow at</p>
                    <h3 className="goldtextcss restaurant">{instruction?.restaurant?.name}</h3>
                    <h4 className="address">{instruction?.restaurant?.addressLine1}</h4>
                    <h4 className="address">{instruction?.restaurant?.addressLine2}</h4></div>
                </div>      
            </div>
        <div className="second-box">
            <h2 className="information">Wedding Information</h2>
            <div className="detail">
                <FontAwesomeIcon icon={faCocktail} className="icon" />
                <p>{instruction?.dining}</p>
            </div>
            <div className="detail">
                <FontAwesomeIcon icon={faUserTie} className="icon" />
                <p>{instruction?.dresscode}</p> 
            </div>
            
        </div>
        </div>
    );
}
 
export default Wedding;