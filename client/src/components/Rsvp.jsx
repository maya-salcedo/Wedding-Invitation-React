import React, { useState } from 'react';
import GoldHeadingTwo from '../elements/GoldHeadingTwo';

function ListedName(props) {
  return (
    <div>
      <li> {props.text} </li>
      <button><span>Delete</span></button>
      <button><span>Edit</span></button>         
    </div>
  );
}

const Rsvp = () => {
  const [inputText, setInputText] = useState("");
  const [names, setNames] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addName() {
    setNames((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div>
      <GoldHeadingTwo text="RSVP" />
      <p>RSVP by 31 May 2021</p>
      <div className="form">
        <input value={inputText} onChange={handleChange} type="text" placeholder="Name" />
        <button onClick={addName}><span>Add</span></button>
      </div>
      <div>
        <ol>
        {names.map((nameOfGuest,index) => (
          <ListedName
            key={index}
            id={index}
            text={nameOfGuest}
          />       
        ))}
        </ol>       
      </div>
      <button>Confirm</button>
    </div>
  );
}

export default Rsvp;