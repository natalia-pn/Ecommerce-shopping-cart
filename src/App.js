import React, { Component } from 'react';
import user from './images/user.svg';
import bag from './images/bag.svg';
import products from './images/products-display.png';
import vans_36 from './images/vans-36.png';
import vans_44 from './images/vans-44.png';
import vans_39 from './images/vans-39.png';
import down from './images/down-arrow.svg';
import OrderedItemsList from './components/OrderedItemsList';
import Header from './components/Header';
import PromotionalCode from './components/PromotionalCode';
import SubtotalContainer from './components/SubtotalContainer';
import TotalContainer from './components/TotalContainer';
import PurchaseButton from './components/PurchaseButton';
import './styles/App.scss';

const productsList = [
  {
    image: vans_36,
    description: "Vans - Zapatillas classic slip on",
    size: 36,
    price: 49.90,
    quantity: 1,
    id: 1,
  },
  {
    image: vans_44,
    description: "Vans - Zapatillas classic slip on",
    size: 44,
    price: 49.90,
    quantity: 1,
    id: 2
  },
  {
    image: vans_39,
    description: "Vans - Zapatillas classic slip on",
    size: 39,
    price: 49.90,
    quantity: 1,
    id: 3
  },
]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productsArray: productsList,
      showBagClass: 'Shopping-bag__container',
      productsDisplay: 'Products-display',
      showBag: false
    }
  }

  addQuantity = (e) => {
    const { productsArray } = this.state;
    const buttonValue = e.currentTarget.value;
    console.log(buttonValue)

    const newProductsArray = productsArray.map(item => {
      if(item.id !== parseInt(buttonValue) || item.quantity > 9) return item;
      
      return {
        ...item,quantity: item.quantity + 1
      };
    });

    this.setState({productsArray : newProductsArray});
  }


  deductQuantity = (e) => {
    const { productsArray } = this.state;
    const buttonValue = e.currentTarget.value;

    const newProductsArray = productsArray.map(item => {
      if(item.id !== parseInt(buttonValue) || item.quantity < 2) return item;
      
      return {
        ...item,quantity: item.quantity - 1
      };
    });

    this.setState({productsArray : newProductsArray});
  }


  removeProduct = (e) => {
    const buttonValue = e.currentTarget.value;
   
    this.setState(prevState => {
        const newProductsArray = prevState.productsArray.filter(item => item.id !== parseInt(buttonValue));
        
        return { productsArray: newProductsArray };
    });
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
    const { addQuantity, deductQuantity, removeProduct, triggerShoppingBag } = this;
    const { productsArray, showBagClass, productsDisplay } = this.state;

    const totalItems =  productsArray.reduce((acumulador, { quantity }) => acumulador + quantity, 0)

    const productsTotalAmount = productsArray.reduce((acumulador, { price, quantity }) => acumulador + (price * quantity), 0).toFixed(2).replace("." , ",");

    return (
      <div className="App">
        <Header user={user} triggerShoppingBag={triggerShoppingBag} bag={bag} />

        <main className="Main-section">
          <img className={productsDisplay} src={products} alt="products display"></img>

          <div className={showBagClass}>
            <div className="Shopping-bag__summary">
              <p className="Items-quantity">{`Tu cesta (${totalItems} productos)`}</p>

              <div className="Orders-summary__container">
                <p className="Delivery-date">Entrega 15 de abril</p>

                <OrderedItemsList
                  productsArray={productsArray}
                  addQuantity={addQuantity}
                  deductQuantity={deductQuantity}
                  removeProduct={removeProduct} />

                <PromotionalCode down={down} />

                <SubtotalContainer productsTotalAmount={productsTotalAmount} />                 
                <TotalContainer productsTotalAmount={productsTotalAmount} />

                <PurchaseButton />
              </div>
            </div>
          </div>
        </main> 
      </div>
    );
  }
}

export default App;
