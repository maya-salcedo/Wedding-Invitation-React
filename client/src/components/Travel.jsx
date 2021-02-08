import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
const Travel = () => {

    const [recommendation, setRecommendation] = useState();

    const getRecommendation = async () => {
        const {data} = await axios.get('http://localhost:9000/travel');
        setRecommendation(data);
    };

    useEffect(() => {
        getRecommendation();
    }, []);

    return (
       <div>
        <h2 className="information goldtextcss">{recommendation?.title}</h2>
        <p>{recommendation?.text}</p>
       </div>
    );
}
 
export default Travel;