import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
const Gift = () => {
    const [message, setMessage] = useState();
    
    const getMessage = async () => {
        const {data} = await axios.get('http://localhost:9000/gift');
        setMessage(data);
    };

    useEffect(() => {
      getMessage();
    }, []);

    return (
       <div>
       <div>
         <h2 className="information goldtextcss">{message?.title}</h2>
         <p> {message?.message}</p> 
         
       </div>
      <div className="bank-details">
      <p>Here's how you can get the money to us: </p> 
         <p> Name: {message?.account?.name}</p>  
         <p> Account Number: {message?.account?.number}</p>  
         <p> BIC: {message?.account?.bic}</p>      
      </div>
           
       </div>
    );
}
 
export default Gift;