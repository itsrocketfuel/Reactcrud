import React from 'react';
const API = 'http://localhost:4000/emp/addemp';
class addemp extends React.Component {
  constructor(props) {
    super(props);
    this.addemployee = this.addemployee.bind(this);
    this.refresh=this.refresh.bind(this);
    this.state = {
      employees: {},
      name:'',
      designation:'',
      counter:0
    };


  }
  refresh=()=>{
    this.setState({counter:this.state.counter++});
  }
  addemployee(e) {
    e.preventDefault();
    
    let name=this.refs.name.value;
    let designation=this.refs.designation.value;
  let data={
    name,designation
  };
  fetch(API, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }}).then(function(response) {
      if (response.ok) {
        alert('Record Added Successfully')    
      } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
      }
    })
  this.refresh();
  }
  render() {
    return (
  <div>
    <h2>Add New Employee</h2>
    <form name="addform">
    <table align="center">
      <tr>
        <td>Name of Employee</td>
        <td><input type="text" ref="name" placeholder="Enter Name"></input></td></tr>
      <tr><td>Name of Employee</td>
        <td>
      <input type="text" ref="designation" placeholder="Enter Designation"></input></td></tr>
      <tr><td colSpan="2" align="center">
      <button onClick={this.addemployee}>Add Employee</button>
      </td></tr>
      <tr><td colSpan="2" align="center">
      <input type="hidden" ref="hid" value={this.state.counter}></input>
      </td></tr>
    
      </table>
    </form>
  </div>
);
    }
  }

export default addemp;