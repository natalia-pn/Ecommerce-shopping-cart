import React, { Component } from 'react';
import user from './images/user.svg';
import bag from './images/bag.svg';
import products from './images/products.png';
import vans_36 from './images/vans-36.png';
import vans_44 from './images/vans-44.png';
import vans_39 from './images/vans-39.png';
import down from './images/down-arrow.svg';
import OrderedItem from './components/OrderedItem';
import './App.css';

const productsArray = [
  {
    image: vans_36,
    description: "Vans - Zapatillas classic slip on",
    size: 36,
    price: "49,90",
  },
  {
    image: vans_44,
    description: "Vans - Zapatillas classic slip on",
    size: 44,
    price: "49,90",
  },
  {
    image: vans_39,
    description: "Vans - Zapatillas classic slip on",
    size: 39,
    price: "49,90",
  },

]

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

              <div className="Orders-summary__container">
                <p className="Delivery-date">Entrega 15 de abril</p>

                {productsArray.map((item, index) =>
                  <OrderedItem key={index} image={item.image} description={item.description} size={item.size} price={item.price}/>)}
              
                  <div className="Promotional-code__container">
                    <p className="Promotional-code">Código promocional</p>
                    <img className="Promotional-code__selection" src={down} alt="selection arrow"></img>
                  </div>

                  <div className="Subtotal__container">
                    <p className="Subtotal">Subtotal</p>
                    <p className="Subtotal__amount">xxx€</p>
                  </div>

                  <div className="Total__container">
                    <p className="Total">Total</p>
                    <p className="Total__amount">xxx€</p>
                  </div>

                  <div className="Purchase-button__container">
                    <button type="button" className="Purchase-button">comprar</button>
               
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
