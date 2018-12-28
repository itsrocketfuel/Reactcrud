import React, { Component } from 'react';
import './App.css';

import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Messages from './components/Messages';
import addemp from './components/addemp';
import showemp from './components/showemp';
import editemp from './components/editemp';
import delemp from './components/delemp';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 align="center">Welcome to React CRUD App</h1>
        </header>
        <div align="center">
            <ul>
              <li> <Link to="/">Home</Link> </li>
              <li> <Link to="/messages">Recursive</Link> </li>
              <li> <Link to="/about">About</Link> </li>
              <li> <Link to="/addemp">Add Employee</Link> </li>
              <li> <Link to="/showemp">Show Employees</Link> </li>
              <li> <Link to="/editemp">Update Employees</Link> </li>
              <li> <Link to="/delemp">Delete Employees</Link> </li>
            </ul>
        </div>
        <div className="App-intro">
          <Switch>
            <Route exact path="/"  component={Home} />
            <Route path="/messages" component={Messages} />
            <Route path="/addemp" component={addemp} />
            <Route path="/showemp" component={showemp} />
            <Route path="/editemp" component={editemp} />
            <Route path="/about" component={About} />
            <Route path="/delemp" component={delemp} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
