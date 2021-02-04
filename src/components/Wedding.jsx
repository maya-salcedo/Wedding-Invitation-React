import React from 'react';
import Flower from './image/flower.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCocktail, faUserTie } from '@fortawesome/free-solid-svg-icons'

 
 
const Wedding = () => {
    return (
       <div>
       <div className="first-box">
            <img className="background-flower" src={Flower} alt="flower-img"/>
            <div className="centered">
            <div>
                <h3 className="invite">You are joyfully invited to our wedding on</h3>
                <h2 className="goldtextcss date"> 09 July 2021 </h2>
                <h3 className="time">3:00 P.M. Friday</h3>
                <h3 className="goldtextcss church">Parrocchia Di Sant' Ambrogio</h3>
                <h4 className="address">Via Papa Giovanni XXIII 41, 23827 Lierna</h4>
                <h4 className="address">Province of Lecco, Italy</h4>
            </div>
            <div>
                <p className="reception">Reception to follow at</p>
                <h3 className="goldtextcss restaurant">Ristorante La Breva</h3>
                <h4 className="address">Via Roma 24, Lierna</h4>
                <h4 className="address">Province of Lecco, Italy</h4></div>
            </div>      
        </div>
        <div>
            <h2 className="information">Wedding Information</h2>
            <div className="detail">
                <FontAwesomeIcon icon={faCocktail} className="icon" />
                <p>After the church ceremony, please proceed to the reception venue.</p>
                <p>Aperitif will be served on the restaurant's veranda followed by a sit down dinner in the function hall. </p> 
                <p>Please let us know of any special dietary requirements you may have. </p>
            </div>
            <div className="detail">
                <FontAwesomeIcon icon={faUserTie} className="icon" />
                <p> Dress Code is semi-formal. </p> 
                <p>Suit and tie. Cocktail dress. </p>
                <p> Dress real pretty, dress real fine, dress for comfort, dress for fun. </p>
                <p> 'Cause it's a party, when all's said and done.</p>
            </div>
            
        </div>
        </div>
    );
}
 
export default Wedding;