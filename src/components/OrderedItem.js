import React, { Component } from 'react';

class OrderedItem extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          quantity: 1
        }
    
        this.addItem = this.addItem.bind(this);
      }
    
      addItem() {
        this.setState({
          quantity: this.state.quantity + 1
        });
      }
    
    render() {
        const { image, description, size, price } = this.props;
        const { quantity } = this.state;
        const { addItem } = this;
        return(
            <div className="Order__summary">
                  <img className="Vans-picture" src={image} alt="Vans shoes"></img>
              
                <div className="Order__details">
                    <p className="Item__description">{description}</p>

                    <div className="Delete-action__container">
                      <button type="button" className="Delete-action__button"><i className="far fa-trash-alt"></i></button>

                      <p className="Delete-action">Eliminar</p>
                    </div>

                    <p className="Item__size">{`Talla: ${size} `}</p>

                    <p className="Item__price">{price}</p>

                    <div className="Quantity-display__container">
                      <button type="button" className="Quantity-increase__button" onClick={addItem}>+</button>
                      <div className="Quantity-display__box">{`${quantity}`}</div>
                      <button  type="button" className="Quantity-decrease__button">-</button>
                    </div>
                </div> 
            </div>
        );
    }
}

export default OrderedItem;