import './Table.css';
import React from 'react';
import Output from '../Output/Output';

const amountUsersPerPage = 20;
let count = [];

export default class Table extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      s1: props.thNav,
      users: props.apiData,
      clicked: '',
      selectedRow: [],
      amountOfPages: [],
      numberOfPage: 1,
      prev: 0,
      next: 20
    }
  }

  componentDidMount() {
    let amountOfPages = Math.ceil((this.state.users.length - 1) / amountUsersPerPage);
    for (let i = 0; i < amountOfPages; i++) {
      count.push(i)
    }
    this.setState({
      amountOfPages: count
    })
  }

  selectRow = (e) => {
    const { id } = e.currentTarget;
    this.setState({ clicked: id });

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
    this.state.users.map((item) => {
      if (data[0] == item.id) {
        this.setState({
          selectedRow: item
        })
      }
    })
  }

  render() {
    const { clicked } = this.state;
    const { users } = this.state;

    let tableNav = this.state.s1.map((item, i) => {
      return (
        <th key={i}>{item.text}</th>
      )
    })

    let usersList = users.map((item, index) => {
      if (index < amountUsersPerPage) {
        return (
          <tr id={index} onClick={this.selectRow} className={clicked === `${index}` ? "user-data" : "inactive"}>
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
      <>
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
        <div className="carousel-of-pages">
          {count.map((items, i) => (
            <div onClick={(e) => this.setState({ numberOfPage: +e.currentTarget.innerHTML })} className="carousel-items" key={i}>{i + 1}</div>
          ))}
        </div>
        <Output selRow={this.state.selectedRow} />
      </>
    )
  }
}