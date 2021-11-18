import React, { useEffect } from 'react';
import './Output.css';
import { useSelector } from 'react-redux';
import { selectValue1, selectValue2 } from '../../Store/Reduxrepository';

export default function Output() {
  const oneUser = useSelector(selectValue1);
  let nestArray = useSelector(selectValue2);

  return (
    <>
      <div className='about-each-user'>
        <h2>Profile info: </h2>
        <ul>
          <li>Selected profile: <i>{oneUser.firstName} {oneUser.lastName}</i></li>
          <li>Phone: <i>{oneUser.phone}</i></li>
          <li>Adress: <i>{nestArray.streetAddress}</i></li>
          <li>City: <i>{nestArray.city}</i></li>
          <li>State: <i>{nestArray.state}</i></li>
          <li>Index: <i>{nestArray.zip}</i></li>
        </ul>
      </div>
    </>
  );
};