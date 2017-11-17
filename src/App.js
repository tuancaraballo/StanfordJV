import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import NavBar2 from './containers/Navbar'
import SearchList from './containers/SearchList'


class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar2/>
          <SearchList/>
      </div>
    );
  }
}

export default App;
