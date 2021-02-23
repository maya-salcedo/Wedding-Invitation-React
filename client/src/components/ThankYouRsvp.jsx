import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';

const ThankYouRsvp = () => {
    const [note, setNote] = useState();
    const getNote = async () => {
        const {data} = await  axios.get('http://localhost:9000/thankyou');
        setNote(data);
    };

    useEffect(() => {
        getMessage();
    }, []);
}

    return(
        <div>
            <div>
                <h1>{note?.title}</h1>
                <p>{note?.message}</p>
            </div>
            <div>
                <p> In case you need to cancel your rsvp, please contact us at:</p>
                <p> Email: {note?.cancelation?.email} </p>
                <p> Phone: {note?.cancelation?.phone} </p>
                <p> Whatsapp: {note?.cancelation?.whatsapp} </p>
            </div>


        </div>
    )


export default ThankYouRsvp;