import './App.css';
import React, { useState, useEffect } from 'react';
import Input from './Components/Input/Input';
import Table from './Components/Table/Table';
import axios from "axios";
import Output from './Components/Output/Output';

const App = () => {

  const thTableData = [
    { "text": "Id" },
    { "text": "First name" },
    { "text": "Last name" },
    { "text": "Email" },
    { "text": "Phone" },
    { "text": "State" }
  ];
  const [users, setusers] = useState([]);

  useEffect(() => {
    fetchUsers()
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get("https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json");
      setusers(response.data);
    } catch (e) {
      alert('Holy shit! No data about users!');
    };
  };

  return (
    <div className="general-container">
      <Input />
      <Table thNav={thTableData} apiData={users} />
      <Output />
    </div>
  )
};

export default App;

