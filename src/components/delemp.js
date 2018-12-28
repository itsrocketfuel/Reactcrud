import React from 'react';
const API = 'http://localhost:4000/emp/employees';
const API1 = 'http://localhost:4000/emp/delemp/';
class delemp extends React.Component {
  constructor(props) {
    super(props);
   // this.delemployee = ::this.delemployee;
   this.state = {
    employees: [],
    test1:0
  };
   
   this.delemployee.bind(this);
          }
  delemployee=(e)=> {
    e.preventDefault();
    let name=this.refs.list.value;
   fetch(API1+name, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }}).then(function(response) {
      if (response.ok) {
        alert('Record Deleted Successfully')
        return true;
            } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
      }
          })
    }
  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ employees: data }));
  }
  render() {
    const { employees } = this.state;

    return (<div align="center">
    <h1>Select an Employee to Delete</h1>
<form name="del">
<select ref="list" align="center">
                 {employees.map(emp =>
                 <option key={emp.name} value={emp.name}>
            {emp.name}</option>
                 )}
                     </select>                  
                     <button onClick={this.delemployee}>
        Delete Employee
      </button>
</form>
      </div>
    );

  }

}

export default delemp;