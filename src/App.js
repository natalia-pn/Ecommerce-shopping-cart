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

          <div className="Shopping-bag__container">
            <div className="Shopping-bag__summary">
              <p className="Item quantity">Tu cesta (3 productos)</p>

              <div className="Order-summary__container">
                <p className="Delivery-date">Entrega 15 de abril</p>

                <div className="Order__summary">
                  <img className="Vans-picture" src={vans_36} alt="Vans shoes"></img>
                </div>
                
                <div className="Order__details">
                  <p className="Item__description">Vans - Zapatillas classic slip on</p>

                  <div className="Delete-action__container">
                    <button type="button" className="Delete-action__button"><i className="far fa-trash-alt"></i></button>

                    <p className="Delete-action__line">Eliminar</p>
                  </div>

                  <p className="Item__size">Talla: 36</p>

                  <p className="Item__price">49,90€</p>

                  <div className="Quantity-display__container"></div>
                    <div className="Quantity-increase__box">+</div>
                    <div className="Quantity-display__box">1</div>
                    <div className="Quantity-decrease__box">-</div>
                  </div>
              </div>
            </div>
          </div>
        </main> 
      </div>
    );
  }
}

export default App;
