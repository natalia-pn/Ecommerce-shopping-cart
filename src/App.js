import React, { Component } from 'react';
import user from './images/user.svg';
import bag from './images/bag.svg';
import products from './images/products.png';
import vans_36 from './images/vans-36.png';



import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={user} className="User-account" alt="user account"></img>

          <img src={bag} className="Shopping-bag" alt="shopping bag"></img>
        </header>

        <main className="Main-section">
          <img className="Products-display" src={products} alt="products display"></img>

          <div className="Open-bag__action-container">
            <img className="Open-bag__trigger" src={bag} alt="shopping bag"></img>

            <p className="Open-bag_call">Open bag</p>
          </div>
        </main> 
      </div>
    );
  }
}

export default App;
