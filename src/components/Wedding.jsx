import React from 'react';
import Flower from './image/flower.png';
 
const Wedding = () => {
    return (
       <div>
       <div className="first-box">
            <img className="background-flower" src={Flower} alt="flower-img"/>
            <div className="centered">
            <div>
                <h3 className="invite">You are joyfully invited to our wedding on</h3>
                <h2 className="goldtextcss date"> 09 July 2021 </h2>
                <h3>3:00 P.M. Friday</h3>
                <h3 className="goldtextcss church">Parrocchia Di Sant' Ambrogio</h3>
                <h4>Via Papa Giovanni XXIII 41, 23827 Lierna</h4>
                <h4>Province of Lecco, Italy</h4>
            </div>
            <div>
                <p className="reception">Reception to follow at</p>
                <h3 className="goldtextcss church">Ristorante La Breva</h3>
                <h4>Via Roma 24, Lierna</h4>
                <h4>Province of Lecco, Italy</h4></div>
            </div>      
            </div>
        <div>
            <h2 className="information">Wedding Information</h2>
           
            <i className="fas fa-cocktail fa-3x information-icon"></i>
            <p>After the church ceremony, please proceed to the reception venue. 
                Aperitif will be served on the restaurant's veranda followed
                by a sit down dinner in the function hall.  Please let us know of any special dietary requirements
                you may have.</p>
       
            <i className="fas fa-user-tie fa-3x information-icon"></i>
            <p> Dress Code is semi-formal. Suit and tie. Cocktail dress. 
                Dress real pretty, dress real fine, dress for comfort, dress for fun. 
                'Cause it's a party, when all's said and done.</p>
                </div>
                </div>
    );
}
 
export default Wedding;