import React, { Component } from 'react';
import user from './images/user.svg';
import bag from './images/bag.svg';
import products from './images/products-display.png';
import vans_36 from './images/vans-36.png';
import vans_44 from './images/vans-44.png';
import vans_39 from './images/vans-39.png';
import down from './images/down-arrow.svg';
import OrderedItemsList from './components/OrderedItemsList';
import './styles/App.scss';

const productsList = [
  {
    image: vans_36,
    description: "Vans - Zapatillas classic slip on",
    size: 36,
    price: 49.90,
    id: 1
  },
  {
    image: vans_44,
    description: "Vans - Zapatillas classic slip on",
    size: 44,
    price: 49.90,
    id: 2
  },
  {
    image: vans_39,
    description: "Vans - Zapatillas classic slip on",
    size: 39,
    price: 49.90,
    id: 3
  },

]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemsQuantity: 3,
      itemPrice: '',
      itemsPricesArray: [
        49.90,
        49.90,
        49.90
      ],
      totalPrice: 149.70,
      productsArray: productsList,
      showBagClass: 'Shopping-bag__container',
      productsDisplay: 'Products-display',
      showBag: false
    }
  }

  addTotalProducts = (buttonValue) => {
    let itemPrice;

    for (const product of this.state.productsArray) {
      if(parseInt(buttonValue) === product.id) {
        const index = this.state.productsArray.findIndex(x => x.id  === parseInt(buttonValue));

        itemPrice = this.state.productsArray[index].price;

        this.state.itemsPricesArray.push(itemPrice);
      }
    }
    const totalPriceSum =  this.state.itemsPricesArray.reduce((a, b) => a + b).toFixed(2)

    this.setState(prevState => ({
      itemsQuantity: prevState.itemsQuantity + 1,
      totalPrice: totalPriceSum
    }));
  }

  deductTotalProducts = (buttonValue) => {
    let itemPrice;

    for (const product of this.state.productsArray) {
      if(parseInt(buttonValue) === product.id) {
        const index = this.state.productsArray.findIndex(x => x.id  === parseInt(buttonValue));

        itemPrice = this.state.productsArray[index].price;
      }
    }

    this.setState(prevState => ({
      itemsQuantity: prevState.itemsQuantity.total - 1,
      totalPrice: (prevState.totalPrice - itemPrice).toFixed(2)
    }));
  }

  removeProduct = (e) => {
    const { productsArray } = this.state;
    const buttonValue = e.currentTarget.value;
    console.log(buttonValue)

    for (const product of productsArray) {
      if(parseInt(buttonValue) === product.id) {
        const index = productsList.findIndex(x => x.id  === parseInt(buttonValue));
        productsList.splice(index, 1);
      }
    }
    this.setState({productsArray: productsList})
  }

  toggleBag = () => {
    this.setState(prevState=> ({
      showBag: !this.state.showBag
    }));
  }

  triggerShoppingBag = () => {
    const { showBag } = this.state;
    this.toggleBag();

    if (showBag === true) {
      this.setState(prevState => ({
        showBagClass: 'Shopping-bag__container-in',
        productsDisplay: 'Products-display--shared'
      }));

    } else {
      this.setState(prevState => ({
        showBagClass: 'Shopping-bag__container',
        productsDisplay: 'Products-display'
      }));
    }
  }

  render() {

    console.log(this.state.totalPrice)
    const { addTotalProducts, deductTotalProducts, removeProduct, triggerShoppingBag } = this;
    const { itemsQuantity, productsArray, showBagClass, productsDisplay, totalPrice } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={user} className="User-account" alt="user account"></img>

          <button className="Bag__trigger" onClick={triggerShoppingBag}><img src={bag} className="Shopping-bag" alt="shopping bag"></img></button>
        </header>

        <main className="Main-section">
          <img className={productsDisplay} src={products} alt="products display"></img>

          <div className={showBagClass}>
            <div className="Shopping-bag__summary">
              <p className="Items-quantity">{`Tu cesta (${itemsQuantity} productos)`}</p>

              <div className="Orders-summary__container">
                <p className="Delivery-date">Entrega 15 de abril</p>

                <OrderedItemsList
                  addTotalProducts={addTotalProducts}
                  deductTotalProducts={deductTotalProducts} 
                  removeProduct={removeProduct} 
                  productsArray={productsArray} />
              
                <div className="Promotional-code__container">
                  <p className="Promotional-code">Código promocional</p>
                  <img className="Promotional-code__selection" src={down} alt="selection arrow"></img>
                </div>

                <div className="Subtotal__container">
                  <p className="Subtotal">Subtotal</p>
                  <p className="Subtotal__amount">{`${totalPrice}€`}</p>
                </div>                     

                <div className="Total__container">
                  <p className="Total">Total</p>
                  <p className="Total__amount">{`${totalPrice}€`}</p>
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
