import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js'
import Login from './components/Login.js'

//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
