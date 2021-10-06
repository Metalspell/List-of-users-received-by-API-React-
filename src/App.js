import './App.css';
import React from 'react';
import Input from './Components/Input/Input';
import Table from './Components/Table/Table';

const thTableData = [
  { "text": "Id" },
  { "text": "First name" },
  { "text": "Last name" },
  { "text": "Email" },
  { "text": "Phone" },
  { "text": "State" }
];

export default class App extends React.Component {
  constructor() {

    super();

    this.state = {
      items: []
    }
  }

  componentDidMount() {
    fetch("https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json")
      .then(res => res.json())
      .then(
        (res) => {
          this.setState({
            items: res
          })
        },
        (error) => {
          this.setState({
            error,
            isLoaded: false
          })
        }
      )
  }

  render() {
    return (
      <div className="general-container">
        <Input />
        <Table thNav={thTableData} apiData={this.state.items}/>
      </div>
    )
  }
}