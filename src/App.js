import React, { Component } from 'react';
import user from './images/user.svg';
import bag from './images/bag.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={user} className="User-account" alt="user account"/>

          <img src={bag} className="Shopping-bag" alt="shopping bag"/>
        </header>
      </div>
    );
  }
}

export default App;
