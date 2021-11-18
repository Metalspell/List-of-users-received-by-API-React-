import './Table.css';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {addSelectedRow, nestedArray} from '../../Store/Reduxrepository';

const Table = ({ apiData, thNav }) => {
  const amountUsersPerPage = 10;
  let count = [];

  const dispatch = useDispatch();
  
  const [clicked, setclicked] = useState('');
  const [amountOfPages, setamountOfPages] = useState([]);
  // const [selectedRow, setselectedRow] = useState([]);

  useEffect(() => {
    let amountOfPages = Math.ceil((apiData.length - 1) / amountUsersPerPage);
    for (let i = 0; i < amountOfPages; i++) {
      count.push(i)
    }
    setamountOfPages(count);
  }, []);

  function selectRow (e) {
    let selectedRow;
    let id  = e.currentTarget.id;
    setclicked(id);

    selectedRow = apiData[id];
    dispatch(addSelectedRow(selectedRow));
    dispatch(nestedArray(selectedRow.adress));

    e = e || window.event;
    let data = [];
    let target = e.srcElement || e.target;
    while (target && target.nodeName !== "TR") {
      target = target.parentNode;
    }
    if (target) {
      let cells = target.getElementsByTagName("td");
      for (let i = 0; i < cells.length; i++) {
        data.push(cells[i].innerHTML);
      }
    }
  }

  let tableNav = thNav.map((item, i) => {
    return (
      <th key={i}>{item.text}</th>
    )
  })

  let usersList = apiData.map((item, i) => {
    if (i < amountUsersPerPage) {
      return (
        <tr key={i} id={i} onClick={selectRow} className={clicked === `${i}` ? "user-data" : "inactive"}>
          <td>{item.id}</td>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.adress.state}</td>
        </tr>
      )
    }
  })

  return (
    <table>
      <thead>
        <tr>
          {tableNav}
        </tr>
      </thead>
      <tbody>
        {usersList}
      </tbody>
    </table>
  )
}

export default Table;