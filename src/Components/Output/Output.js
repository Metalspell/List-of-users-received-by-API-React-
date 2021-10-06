import React, { useState, useEffect } from 'react';
import './Output.css';

export default function Output(props) {
  const [state, setstate] = useState([]);

  useEffect(() => {
    setstate(props.selRow);
  })

  return (
    <>
      <div className='about-each-user'>
        {/* <h2>Profile info: </h2>
        <p>Selected profile: <i>{state.firstName} {state.lastName}</i></p>
        <p>Description: <i>{state.description}</i></p>
        <p>Adress: <i>{state.adress.streetAddress}</i></p>
        <p>City: <i>{state.adress.city}</i></p>
        <p>State: <i>{state.adress.state}</i></p>
        <p>Index: <i>{state.adress.zip}</i></p> */}
      </div>
    </>
  );
}